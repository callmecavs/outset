// CSS Layout Debugger
// https://gist.github.com/addyosmani/fd3999ea7fce242756b1

// Paste in console, or add a new bookmark and set the URL to the following:

javascript:[].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})