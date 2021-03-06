let institution = 'NYU';
let id = 'primo_explore_search_embed_container';

function redefineScript({ institution, id }) {
  const script = document.createElement('script');
  script.setAttribute('src', `http://cdn.example.com/app.min.js?institution=${institution}&element_id=${id}`);
  Object.defineProperty(document, 'currentScript', { value: script });

  const injectionElement = document.createElement('div', { id });
  injectionElement.setAttribute('id', id);
  document.body.appendChild(injectionElement);
}

redefineScript({ institution, id });