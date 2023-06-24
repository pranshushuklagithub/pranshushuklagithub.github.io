

// https://drive.google.com/file/d/1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h/view?usp=sharing        this is direct google drive link 

// https://drive.google.com/uc?export=download&id=1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h            this is download link from google drive
export const downloadResume=()=>{
    window.open("https://drive.google.com/file/d/1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h/view?usp=sharing","_blank")
    const fileURL = "https://drive.google.com/uc?export=download&id=1wOhjFp3m5wa1uqpqTEeIPV8iWZkaKb7h";
            
           console.log("hash")
             // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            // alink.download = 'Pranshu_Shukla_Resume';
            alink.click();
}

