const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');
textarea.focus();

/*
console.log(tagsEl)  This will give the following
<div id="tags">
      <span class="tag">Choice 1</span>
      <span class="tag">Choice 2</span>
      <span class="tag">Choice 3</span>
      <span class="tag">Choice 4</span>
    </div>
  */




/*focus method is used to give focus to bring the current window to the foreground.It then focus on the element whicj will receive keyboard and similar events by default. In other words it will set the elements as the active element in the current document. It does not return any value. 
Here it will automatically focus on textarea when the page is uploaded.*/



textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
  //e.target.value will be whatever we typed in. 
  if (e.key === 'Enter'){
    setTimeout(() =>{
      e.target.value =''
    }, 20)
    randomSelect()
  }
})

function createTags(input){
  const tags =input.split(',').filter(tag=> tag.trim() !=='').map(tag =>tag.trim()) 
   /*this is an array. It returns the tag if the tag is not empty string. plus the map function trims  the tag that comes from filter. */

  tagsEl.innerHTML = ''
  //console.log("tagsEl",tagsEl)
  tags.forEach(tag => {
    const tagEl=document.createElement('span')
    tagEl.classList.add('tag');
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  }) 
}


function randomSelect(){
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()

    highlightTag(randomTag)

    setTimeout(() => {
      unhighlightTag(randomTag)},100)
    },100);

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    },100)

  }, times*100)
}



function pickRandomTag(){
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random()*tags.length)]
}


function highlightTag(tag){
  tag.classList.add('highlight')

}

function unhighlightTag(tag){
  tag.classList.remove('highlight')

}