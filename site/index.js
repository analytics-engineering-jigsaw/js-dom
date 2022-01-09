document.querySelector("#email-form").addEventListener("submit", function(event){
    event.preventDefault()

    const emailForm = document.querySelector("#email")
    const email = emailForm.value

    console.log(email)
    
    // Add Rudder Event Handler Here:
    rudderanalytics.identify(email, { lead_source: "App Signup" })

    emailForm.value = ""
} )
