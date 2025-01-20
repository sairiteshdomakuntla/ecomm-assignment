// src/components/tracking/TrackingPixel.js
import React, { useEffect, useCallback } from 'react';
import axios from 'axios';

const TrackingPixel = ({ userId, productId = null }) => {
  // Debounce function to prevent too many API calls
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  // Track specific events
  const trackEvent = useCallback(async (eventType, details = {}) => {
    try {
      await axios.post('http://localhost:5000/api/track', {
        userId,
        productId,
        activityType: eventType,
        timestamp: new Date().toISOString(),
        details: {
          url: window.location.href,
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          ...details
        }
      });
    } catch (error) {
      console.error('Tracking error:', error);
    }
  }, [userId, productId]);

  useEffect(() => {
    let sessionStart = Date.now();
    let lastActivity = Date.now();
    let scrollDepth = 0;
    let hasTrackedExit = false;

    // Track initial page load
    trackEvent('pageView');

    // Track scroll depth
    const handleScroll = debounce(() => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const newScrollDepth = Math.round((scrollPosition / docHeight) * 100);
      
      if (newScrollDepth > scrollDepth) {
        scrollDepth = newScrollDepth;
        trackEvent('scroll', { scrollDepth });
      }
    }, 500);

    // Track mouse movement
    const handleMouseMove = debounce((e) => {
      trackEvent('mouseMove', {
        x: e.clientX,
        y: e.clientY
      });
    }, 1000);

    // Track clicks
    const handleClick = (e) => {
      const target = e.target;
      trackEvent('click', {
        elementType: target.tagName,
        elementId: target.id,
        elementClass: target.className,
        text: target.textContent?.slice(0, 50)
      });
    };

    // Track time spent
    const updateTimeSpent = () => {
      const now = Date.now();
      const timeSpent = now - lastActivity;
      lastActivity = now;
      return timeSpent;
    };

    // Track when user leaves the page
    const handleExit = async () => {
      if (!hasTrackedExit) {
        hasTrackedExit = true;
        const sessionDuration = Date.now() - sessionStart;
        await trackEvent('exit', {
          sessionDuration,
          finalScrollDepth: scrollDepth
        });
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('beforeunload', handleExit);
    
    // Periodic activity updates
    const activityInterval = setInterval(() => {
      const timeSpent = updateTimeSpent();
      if (timeSpent > 1000) { // Only track if more than 1 second has passed
        trackEvent('activity', { timeSpent });
      }
    }, 30000); // Update every 30 seconds

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', handleExit);
      clearInterval(activityInterval);
      handleExit();
    };
  }, [trackEvent]);

  return (
    <img 
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }}
      alt=""
      aria-hidden="true"
    />
  );
};

export default TrackingPixel;