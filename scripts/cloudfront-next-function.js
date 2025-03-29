function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Handle trailing slash routes
  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  }
  // Handle extensionless paths (SPA routes)
  else if (!uri.includes(".")) {
    request.uri = uri + "/index.html";
  }

  return request;
}
