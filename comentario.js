function addComment() {
    var commentInput = document.getElementById("comment-input").value;
    if (commentInput.trim() !== "") {
      var commentSection = document.getElementById("comment-section");
      var commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.textContent = commentInput;
      commentSection.appendChild(commentDiv);
      document.getElementById("comment-input").value = "";
    } else {
      alert("Por favor, insira um comentário válido.");
    }
  }