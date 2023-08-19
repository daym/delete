if (confirm("Are you sure you want to delete this page?")) {
fetch(document.location.href, {
  method: "DELETE",
  mode: "same-origin",
  credentials: "same-origin",
  redirect: "follow",
  cache: "default",
  headers: { "Content-Type": document.contentType,
             // TODO: Also pass Previous-Etag
             "Previous-Last-Modified": document.lastModified },
  //body: document.body.outerHTML
})
  .then(response => {
    alert(response.statusText || response.status)
  })
}
