/**
 * Created by IMELNIKOV on 09.04.2014.
 */
    // mynamespace is an object to use as a namespace
mynamespace = (function() {

    // Variables in the namespace
    var mynamespace = {
        foo: "Yes, this is foo."
    };

    // "Public" methods for the namespace
    mynamespace.fooTwo = function() {
        return twice(this.foo);
    };

    // "Private" methods in the namespace
    function twice(x) {
        return x + x;
    }


    // A class in the namespace
    mynamespace.CoolClass = (function() {
        // Contstructor
        var coolclass = function() {
            this.bar = "A bar.";
        };

        // Convenience  var for the prototype
        var prototype = coolclass.prototype;

        // "Public" methods - add to the prototype
        prototype.barThree = function() {
            return thrice(this.bar);
        };

        // "Private" methods - functions starting with "_" are private only by
        // convention.
        prototype._barNine = function() {
            return thrice(thrice(this.bar));
        };

        // Internal functions - these are captured in the closure, note that they
        // are not duplicated when you do `new CoolClass()`. They cannot access
        // `this`.
        function thrice(x) {
            return x + x + x;
        }

        return coolclass;
    })();

    // Instantiate the CoolClass (must be after CoolClass is defined)
    mynamespace.coolObject = new mynamespace.CoolClass();

    return mynamespace;
})();


var a = mynamespace.CoolClass();
b = a.barThree();

// Outside of the anonymous function, can access the following:
console.log(mynamespace.foo);        // "Yes, this is foo."
console.log(mynamespace.fooTwo());   // "Yes, this is foo.Yes, this is foo."

// The instantiated CoolClass object, and public members
console.log(mynamespace.coolObject);
console.log(mynamespace.coolObject.bar);        // "A bar."
console.log(mynamespace.coolObject.barThree()); // "A bar.A bar.A bar."

// Constructor for CoolClass
console.log(new mynamespace.CoolClass());