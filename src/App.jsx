import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModelHundler() {
    setModalIsVisible(true);
  }
  function hidenModalHandler() {
    setModalIsVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModelHundler} />
      <main>
        <PostList
          isPosting={modalIsVisible}
          onStopPosting={hidenModalHandler}
        />
      </main>
    </>
  );
}

export default App; 
