console.log("serve bread")
prepareOmlette(5000,serveOmlette)
console.log("serve coffee")

//high order 
function prepareOmlette(duration,callback)
{
    console.log("Omlette preparation started")
    setTimeout(callback,duration)
}

//callback
function serveOmlette()
{
    console.log("serve omlette")
}