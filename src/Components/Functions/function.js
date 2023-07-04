

// https://drive.google.com/file/d/1ses2VtkMl_8bzwViHhgXZi7P7fcfykTE/view?usp=sharing        this is direct google drive link 


// https://drive.google.com/uc?export=download&id=1ses2VtkMl_8bzwViHhgXZi7P7fcfykTE            this is download link from google drive
export const downloadResume=()=>{
    window.open("https://1drv.ms/b/s!AplsJENjsBMsuyJ223S9aVrNKEP5","_blank")
    const fileURL = "https://1drv.ms/b/s!AplsJENjsBMsuyJ223S9aVrNKEP5&download=1";
            
          //  console.log("hash")
             // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            // alink.download = 'Pranshu_Shukla_Resume';
            alink.click();
}

