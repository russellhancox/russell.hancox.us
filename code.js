function startup() {
	// Call the function for the correct page, if it's defined
	var fn = window[page_id];
	if(typeof fn === 'function') {
	    fn();
	}
}
