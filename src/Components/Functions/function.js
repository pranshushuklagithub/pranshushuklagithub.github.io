export const downloadResume=(e)=>{
    e.preventDefault()
  window.open(
    "https://drive.google.com/file/d/1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h/view?usp=sharing",
    "_blank"
  )
  let link = document.createElement("a")
  link.href =
    "https://drive.google.com/file/d/1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h/view?usp=sharing"
  link.download = "Pranshu_Shukla_Resume"
  link.click()
}


// resumeLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.open(
//       "https://onedrive.live.com/view.aspx?resid=28E32F7AA490015B!551&authkey=!AFzRJF9ixXvV4Ck",
//       "_blank"
//     );
//     let link = document.createElement("a");
//     link.href =
//       "https://drive.google.com/u/0/uc?id=11J8o3BDozE0QKCrvFbteWAAF-ddWXZG6&export=download";
//     link.download = "Hasbe-Alam-Resume";
//     link.click();
//   });