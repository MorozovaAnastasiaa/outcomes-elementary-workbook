'use strict';
// Synchronous local adapter. Replace with an awaited API repository when backend exists.
window.SubmissionStore={
 load(page){const value=JSON.parse(localStorage.getItem(`outcomes-single-attempt-p${page}-v1`)||'{}');if(!value||typeof value!=='object'||Array.isArray(value))throw Error('Invalid submission store');return value;},
 save(page,value){localStorage.setItem(`outcomes-single-attempt-p${page}-v1`,JSON.stringify(value));}
};
