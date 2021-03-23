/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Button,
  Flex,
  Checkbox,
  Label,
  Text,
} from "theme-ui";
import { useState } from "react";
import SectionHeading from "../components/section-heading";
import Input from "../components/input";

const Comments = () => {
  const [value, setValue] = useState("Yorumunuzu Giriniz");
  const [comments, setComments] = useState([
    "Reactjs seems to be the best solution for web development",
    "Yuksel is really a good boy. I miss him everyday",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, value]);
    setValue("Yorumunuzu Giriniz");
  };

  const handleDelete = (item) => {
    setComments(comments.filter((e) => e !== item));
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Box
      as="section"
      id="comments"
      sx={styles.section}
      variant="section.comments"
    >
      <SectionHeading sx={styles.heading} title="Yorumlar" />
      <Container>
        <Box sx={styles.contentWrapper}>
          {comments.map((item) => (
            <Box key={item}>
              <Box>{item}</Box>
              <Text sx={styles.textButton} onClick={(e) => handleDelete(item)}>
                Sil
              </Text>
              <hr />
            </Box>
          ))}
        </Box>

        <Box as="form" sx={styles.contentWrapper}>
          <Flex sx={styles.formGroup}>
            <Label htmlFor="comment-text" variant="styles.srOnly">
              Comment
            </Label>
            <Input
              id="comment-text"
              type="text"
              className="comment-input"
              value={value}
              onChange={(e) => handleInputChange(e)}
            />
            <Button variant="primary" onClick={handleSubmit}>
              Gönder
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Comments;

const styles = {
  contentWrapper: {
    backgroundColor: "#fff",
    borderRadius: 15,
    p: [30, 40, null, "40px 100px", "50px 80px", "40px"],
    display: ["block", "block", "grid", "block", "grid"],
    alignItems: "center",
    mt: 24,
  },
  textButton: {
    backgroundColor: "#EDAEDA",
    maxWidth: 50,
    padding: 2,
    borderRadius: 5,
  },
  heading: {
    textAlign: ["center", "center", "center", "center", "center"],
    mb: ["30px", "30px", "30px", "30px", 0],
    h2: {
      fontSize: ["24px", "24px", "24px", "28px", "32px", "36px"],
    },
  },
  comments: {
    ".comment-input": {
      mr: [0, null, null, "15px"],
      minHeight: ["50px", "50px", "60px"],
      minWidth: "80%",
    },
    button: {
      minHeight: ["50px", "50px", "60px"],
      fontSize: ["14px", "14px", "16px"],
      mt: ["15px", null, null, 0],
    },
  },
  formGroup: {
    flexDirection: ["column", null, null, "row"],
  },
};
