const categoryFirst = document.getElementById('category-1')
const categorySecond = document.getElementById('category-2')
const categoryThird = document.getElementById('category-3')

var dataSection = document.getElementById('data-section')

let clickCategory = ''
let infoData = []

const templateFunction = (category_key,_fname,_lname,_category) => {
    return(`
            <aside class="user-info" id=${category_key}>
                <div class="profile-section">
                    <h4><strong class="profile-text">Profile Pic:</strong><img src='https://media.istockphoto.com/vectors/user-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM='> </h4>
                </div>   
                <div class"info-section">
                    <h4>First Name: ${_fname} </h4>
                    <h4>Last Name: ${_lname} </h4>
                    <h4>Category: ${_category} </h4>
                </div>
            </aside>

            
        `)
}

const getData = async() => {
    const res = await fetch('http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=["category1","category2","category3"]&pretty=true')
    const data = await res.json()
    infoData = data
    console.log(data)
    for(let i=0;i<data.length;i++){
        dataSection.innerHTML += `
            <aside class="user-info" id=${data[i].category}>
                <div class="profile-section">
                    <h4><strong class="profile-text">Profile Pic:</strong><img src='https://media.istockphoto.com/vectors/user-icon-people-icon-isolated-on-white-background-vector-vector-id1210939712?k=20&m=1210939712&s=612x612&w=0&h=xJqEPQnMiNofprbLXWdEtJQ75QL79lQ5N76J4JOdTIM='> </h4>
                </div>   
                <div class"info-section">
                    <h4>First Name: ${data[i].fname} </h4>
                    <h4>Last Name: ${data[i].lname} </h4>
                    <h4>Category: ${data[i].category} </h4>
                </div>
            </aside>

            
        `

    }
    
}

getData()

categoryFirst.onclick = function(){
    dataSection.innerHTML = ''
    let clickCategory = 'category1'
    for(let i=0;i<infoData.length;i++){
        if(infoData[i].category === clickCategory)
        dataSection.innerHTML += templateFunction(infoData[i].category,infoData[i].fname,infoData[i].lname,infoData[i].category)

    }
}

categorySecond.onclick = function(){
    dataSection.innerHTML = ''
    let clickCategory = 'category2'
    for(let i=0;i<infoData.length;i++){
        if(infoData[i].category === clickCategory)
        dataSection.innerHTML += templateFunction(infoData[i].category,infoData[i].fname,infoData[i].lname,infoData[i].category)

    }
}

categoryThird.onclick = function(){
    dataSection.innerHTML = ''
    let clickCategory = 'category3'
    for(let i=0;i<infoData.length;i++){
        if(infoData[i].category === clickCategory)
        dataSection.innerHTML += templateFunction(infoData[i].category,infoData[i].fname,infoData[i].lname,infoData[i].category)

    }
}
