export const showInternal = (res, error) => {
  console.log(error);
  return res.status(500).json({ success: false, message: "Internal server" });
};

export const showNotAuthorized = (res) => {
  return res.status(401).json({ success: false, message: "Not authorized" });
};

export const showMissing = (res) => {
  return res.status(400).json({ success: false, message: "Missing field" });
};

export const showErrorFormat = (res) => {
  return res
    .status(400)
    .json({ success: false, message: "Format field incorrect" });
};

export const showNotFound = (res) => {
  return res.status(404).json({ success: false, message: "Not found" });
};

export function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
