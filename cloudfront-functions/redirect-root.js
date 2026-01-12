// CloudFront Function to redirect root path to /en/
function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // If accessing root, redirect to /en/
    if (uri === '/' || uri === '/index.html') {
        return {
            statusCode: 302,
            statusDescription: 'Found',
            headers: {
                'location': { value: '/en/' }
            }
        };
    }
    
    // For other requests, add trailing slash if it's a directory
    // This helps with Next.js static export
    if (uri && !uri.includes('.') && !uri.endsWith('/')) {
        return {
            statusCode: 301,
            statusDescription: 'Moved Permanently',
            headers: {
                'location': { value: uri + '/' }
            }
        };
    }
    
    // Otherwise, pass through
    return request;
}

