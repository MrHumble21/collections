const headersCollections = [
  { label: "Title", key: "title" },
  { label: "Description", key: "description" },
  { label: "Tags", key: "tags" },
  { label: "CommentsID", key: "comments" },
  { label: "Number of Likes", key: "likes" },
  { label: "Image Link", key: "image" },
];
// haosdo
const userCollectionHeader = [
  { label: "Full name", key: "fullName" },
  { label: "Gender", key: "gender" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Password", key: "password" },
  { label: "Number of Collections", key: "collections" },
  { label: "Role", key: "role" },
];

const BASE_URL = "https://collections.mrhumble.uz";

exports.BASE_URL = BASE_URL;
exports.headersCollections = headersCollections;
exports.userCollectionHeader = userCollectionHeader;
