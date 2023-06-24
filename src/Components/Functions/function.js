export const downloadResume=()=>{
    window.open("./Pranshu_Shukla_Resume.pdf")
    const fileURL = "https://drive.google.com/file/d/1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h/view?usp=sharing";
            console.log()
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Pranshu_Shukla_Resume';
            alink.click();
}

