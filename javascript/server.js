//get
let a=fetch('https://reqres.in/api/users?page=2')
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((content)=>{
    document.getElementById('main').innerHTML=
    `${content.data[0].id},${content.data[0].email},
    ${content.data[0].first_name},${content.data[0].last_name},
    <img src=" ${content.data[1].avatar}"/>`;
    console.log(content);
})