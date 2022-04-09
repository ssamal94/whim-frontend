import { useState } from "react";

const useProductUpload = () => {
  const [authorId, setAuthorId] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [aboutCorse, setAboutCorse] = useState("");
  const [preRequisite, setPreRequisite] = useState("");
  const [videoLinks, setVideoLinks] = useState([]);

  //   authorId: String,
  //   category: String,
  //   coverImage: Object,
  //   title: String,
  //   aboutCorse: String,
  //   preRequisite: String,
  //   videoLinks: Object,
  return {
    authorId,
    setAuthorId,
    category,
    setCategory,
    coverImage,
    setCoverImage,
    title,
    setTitle,
    aboutCorse,
    setAboutCorse,
    preRequisite,
    setPreRequisite,
    videoLinks,
    setVideoLinks,
  };
};
export default useProductUpload;
