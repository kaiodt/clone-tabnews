function status(request, response) {
  response.status(200).json({ status: "Tudo OK com a aplicação." });
}

export default status;
