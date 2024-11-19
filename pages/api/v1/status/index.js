function status(request, response) {
  return response.status(200).json({ status: "Everything OK!" });
}

export default status;
