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