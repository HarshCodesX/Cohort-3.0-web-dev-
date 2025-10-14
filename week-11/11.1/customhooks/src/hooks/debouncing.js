let currentClock;

function searchBackend(){
    console.log("request sent to backend");
}

function debouncedSearchBackend(){
    clearTimeout(currentClock);
    currentClock = setTimeout(searchBackend, 400);
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();