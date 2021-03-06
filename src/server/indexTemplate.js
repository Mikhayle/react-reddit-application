export const indexTemplate = (content, token) => `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>React app</title>
	<script src="/static/client.js" type="application/javascript"></script>
	<script >
		window.__token__ = '${token}';
	</script>
</head>
<body>
    <div id="modal-root"></div>
    <div id="react-root">${content}</div>    
</body>
</html>
`;