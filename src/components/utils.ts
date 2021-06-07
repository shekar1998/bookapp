import axios from "axios";

    async function bookData12() {
        console.log('work');
        let array;

    await axios("http://localhost:4000/books").then((res) => res).then((data) => {
      console.log(data.data);
      array = data.data;
      console.log(array);
      
    });
    return array;
  }

async function deleteBook(title: any) {
try{
  console.log(title+'ppppppppppppppppppp');
  
console.log("title : ", localStorage.getItem("token"));
const data:any =  await axios.delete("http://localhost:4000/books/" + title, {
 headers:{
   "Authorization" : `${localStorage.getItem("token")}`
     },
})
}catch(err)
{
  return err.message
}

}

export {
    deleteBook, bookData12
}