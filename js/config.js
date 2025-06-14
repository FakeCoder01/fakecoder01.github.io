// SkyTracker Configuration File
// Modify these settings to customize your flight tracking experience

const CONFIG = {
    // === API SETTINGS ===
    api: {
        // OpenSky Network API base URL
        baseUrl: 'https://opensky-network.org/api/states/all',

        // Refresh interval in milliseconds (30 seconds default)
        refreshInterval: 30000,

        // Request timeout in milliseconds
        timeout: 10000,

        // Enable/disable automatic refresh
        autoRefresh: true
    },

    // === MAP SETTINGS ===
    map: {
        // Default location when geolocation fails [latitude, longitude]
        defaultLocation: [55.7558, 37.6176], // Moscow

        // Default zoom level
        defaultZoom: 10,

        // Minimum and maximum zoom levels
        minZoom: 3,
        maxZoom: 18,

        // Enable satellite view toggle
        enableSatelliteView: true,

        // Map tile URLs
        streetTileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        satelliteTileUrl: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',

        // Attribution texts
        streetAttribution: '© OpenStreetMap contributors',
        satelliteAttribution: 'Tiles © Esri'
    },

    // === AIRCRAFT SETTINGS ===
    aircraft: {
        // Maximum number of aircraft detail modals that can be open
        maxOpenModals: 5,

        // Aircraft icon settings
        icon: {
            // Default aircraft icon size [width, height]
            size: [16, 16],

            // Selected aircraft icon size
            selectedSize: [20, 20],

            // Default aircraft color (pink)
            defaultColor: '#ff6b9d',

            // Selected aircraft color (blue)
            selectedColor: '#4facfe'
        },

        // Minimum altitude to display (in feet)
        minAltitudeDisplay: 0,

        // Filter out aircraft with no callsign
        hideUnknownCallsigns: false
    },

    // === UI THEME SETTINGS ===
    theme: {
        // Primary color scheme
        colors: {
            primary: '#ff6b9d',
            secondary: '#4facfe',
            success: '#28a745',
            warning: '#ffc107',
            danger: '#dc3545',
            dark: '#1a2035',
            light: '#f8f9fa'
        },

        // Gradient backgrounds
        gradients: {
            primary: 'linear-gradient(45deg, #ff6b9d, #c44569)',
            secondary: 'linear-gradient(45deg, #4facfe, #00f2fe)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },

        // Animation settings
        animations: {
            // Enable smooth transitions
            enabled: true,

            // Default transition duration
            duration: '0.3s',

            // Easing function
            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
    },

    // === NOTIFICATION SETTINGS ===
    notifications: {
        // Enable notifications
        enabled: true,

        // Auto-hide duration in milliseconds
        autoHideDuration: 3000,

        // Position: 'top-right', 'top-left', 'bottom-right', 'bottom-left'
        position: 'top-right'
    },

    // === GEOLOCATION SETTINGS ===
    geolocation: {
        // Enable automatic location detection
        enabled: true,

        // Geolocation options
        options: {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 300000 // 5 minutes
        }
    },

    // === DATA DISPLAY SETTINGS ===
    display: {
        // Units for altitude: 'feet' or 'meters'
        altitudeUnit: 'feet',

        // Units for speed: 'mph', 'kmh', or 'knots'
        speedUnit: 'mph',

        // Number of decimal places for coordinates
        coordinateDecimals: 4,

        // Show aircraft heading arrow
        showHeadingArrow: true,

        // Format large numbers with commas
        useThousandsSeparator: true
    },

    // === EXTERNAL LINKS ===
    externalLinks: {
        // JetPhotos base URL for aircraft photos
        jetPhotosUrl: 'https://www.jetphotos.com/search?keywords=',

        // Alternative photo sources (future feature)
        alternativePhotoSources: [
            'https://www.planespotters.net/search?q=',
            'https://www.airliners.net/search?keywords='
        ]
    },

    // === PERFORMANCE SETTINGS ===
    performance: {
        // Maximum number of aircraft to display simultaneously
        maxAircraftDisplay: 500,

        // Enable marker clustering for high-density areas
        enableClustering: false,

        // Clustering distance
        clusterDistance: 80,

        // Enable aircraft position interpolation
        enablePositionSmoothing: false
    },

    // === FEATURE FLAGS ===
    features: {
        // Enable experimental features
        experimental: false,

        // Show debug information
        debug: false,

        // Enable keyboard shortcuts
        keyboardShortcuts: true,

        // Enable right-click context menu
        contextMenu: true,

        // Enable flight path history (future feature)
        flightPaths: false,

        // Enable weather overlay (future feature)
        weatherOverlay: false,

        // Enable airport markers (future feature)
        airportMarkers: false
    },

    // === KEYBOARD SHORTCUTS ===
    shortcuts: {
        refresh: 'KeyR',
        toggleSatellite: 'KeyS',
        centerLocation: 'KeyL',
        closeAllModals: 'Escape'
    },

    // === ACCESSIBILITY SETTINGS ===
    accessibility: {
        // Enable high contrast mode
        highContrast: false,

        // Enable reduced motion for users with vestibular disorders
        reducedMotion: false,

        // Enable screen reader support
        screenReaderSupport: true,

        // Focus indicators
        showFocusIndicators: true
    },

    // === MOBILE SETTINGS ===
    mobile: {
        // Enable touch gestures
        touchGestures: true,

        // Minimum touch target size (in pixels)
        minTouchTargetSize: 44,

        // Enable vibration feedback (where supported)
        vibrationFeedback: false,

        // Optimize for mobile performance
        optimizeForMobile: true
    },

    // === DEVELOPMENT SETTINGS ===
    development: {
        // Enable console logging
        enableLogging: false,

        // Log level: 'error', 'warning', 'info', 'debug'
        logLevel: 'warning',

        // Enable performance monitoring
        performanceMonitoring: false,

        // Mock data for testing (when API is unavailable)
        useMockData: false
    }
};

// Export configuration for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Configuration validation function
function validateConfig() {
    const requiredFields = [
        'api.baseUrl',
        'api.refreshInterval',
        'map.defaultLocation',
        'aircraft.maxOpenModals'
    ];

    const errors = [];

    requiredFields.forEach(field => {
        const value = field.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
        if (value === undefined || value === null) {
            errors.push(`Missing required configuration: ${field}`);
        }
    });

    // Additional validation
    if (CONFIG.aircraft.maxOpenModals < 1 || CONFIG.aircraft.maxOpenModals > 10) {
        errors.push('aircraft.maxOpenModals must be between 1 and 10');
    }

    if (CONFIG.api.refreshInterval < 5000) {
        errors.push('api.refreshInterval must be at least 5000ms to avoid API rate limits');
    }

    if (!CONFIG.map.defaultLocation || CONFIG.map.defaultLocation.length !== 2) {
        errors.push('map.defaultLocation must be an array of [latitude, longitude]');
    }

    if (errors.length > 0) {
        console.error('Configuration validation errors:', errors);
        return false;
    }

    return true;
}

// Validate configuration on load
validateConfig();
