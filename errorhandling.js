try{
    //Code that may throw an error
    throw new Error("An error");
}catch (error){
    //Code to handle the error
    console.error(error.message);
}finally{
    //Code that will run regardless of whether there was an error
    console.log("Cleanup code");
}