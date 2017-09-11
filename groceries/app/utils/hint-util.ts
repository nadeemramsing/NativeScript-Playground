import { Color } from "color";
import { TextField } from "ui/text-field";

/* The TypeScript declare keyword is used to declare variables that may not have originated from a TypeScript file. */

/*
"declare var myLibrary: any;" produces different output than "var myLibrary: any";

The one which uses `declare` actually produces NO output which is what you want when you need to silence the compiler in order to use a library with no type definition file.

If don’t use `declare` then TS outputs "var myLibrary: any" which will overwrite the actual library, which is not what you usually want. 
*/
declare var NSAttributedString: any;
declare var NSDictionary: any;
declare var NSForegroundColorAttributeName: any;
/* Assigned value by JavaScript Virtual Machines (V8 or JavaScriptCore)? */

export function setHintColor(args: { view: TextField, color: Color }) {
    /* NativeScript makes native objects available via a android property =>  args.view.android refers to a TextView, and therefore has the setHintTextColor() method */

    if (args.view.android) { //runs only for android
        args.view.android.setHintTextColor(args.color.android);
    }
    if (args.view.ios) { //runs only for ios
        let dictionary = new NSDictionary(
            [args.color.ios],
            [NSForegroundColorAttributeName]
        );
        args.view.ios.attributedPlaceholder = NSAttributedString.alloc().initWithStringAttributes(
            args.view.hint, dictionary);
    }
}