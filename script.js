window.onload = function(){

    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWM1ZGNlYWY0ODAwMTVjOTE5NDEiLCJpYXQiOjE2MjIwMzk2NDUsImV4cCI6MTYyMzI0OTI0NX0.08kVd3TtmL9JCL3KR6ScTq5lZEJMftKm4UzaHocbYBs"
        }
        }
    ).then(response => response.json())
    .then(data => console.log(data))        

}