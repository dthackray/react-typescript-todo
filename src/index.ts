const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")
// const list = document.querySelector("#list")

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value === "" || input?.value === null) return
})