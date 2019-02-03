
/**
 * This class is a helper to build an element's className in a semantic way.
 * 
 * @author Giovanna Marinelli
 */
export default class ClassNameBuilder {

    constructor(className) {
        this.contructorClassName=className || "";
        this.className = className || "";
    }

    /**
     * Add an className to the current className being built according an specific condition.
     * 
     * @param {String} className the className that you want to add to your current className 
     * @param {*} condition condition that must be met to add the className.
     */
    add(className, condition = null) {

        const classNameIsString = typeof(className) === "string"

        if(!classNameIsString){
            throw new Error("The className being add must be specified as a String");
        }
        
        const conditionIsString = typeof(condition) === "string";
        const conditionIsBoolean = typeof(condition) === "boolean";
        const conditionIsNullOrUndefined = condition === null || condition === undefined;

        let assertCondition;

        if (conditionIsString) {
            assertCondition = condition.toLowerCase() === "false"
                ? false
                : true;
        } else if (conditionIsBoolean) {
            assertCondition = condition;
        } else if (conditionIsNullOrUndefined) {
            assertCondition = true;
        } else {
            assertCondition = false;
        }

        const separator = this.className
            ? " "
            : "";

        this.className = assertCondition && className
            ? this.className + separator + className
            : this.className;

        return this;
    }

    /**
     * Clean the className being build
     */
    clean(){
        this.className = "";
    }

    /**
     * Get the className.
     */
    getClassName(){
        return this.className;
    }

    toString() {
        return this.className;
    }
}