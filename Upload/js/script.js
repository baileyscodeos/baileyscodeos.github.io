function uploadFile (data) {
        // define data and connections
    var blob = new Blob([JSON.stringify(data)]);
    var url = URL.createObjectURL(blob);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);
    
        // define new form
    var formData = new FormData();
    formData.append('someUploadIdentifier', blob, 'test.json');
        
        // action after uploading happens
    xhr.onload = function(e) {
        console.log("File uploading completed!");
    };
    
        // do the uploading
    console.log("File uploading started!");
    xhr.send(formData);
}
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
function getFile (url) {
    getJSON(url, function(status, data) {
    console.log(data)
    uploadFile(data)
    });
}
