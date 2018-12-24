export default class Ticket {
    constructor(summary, description, status, severity) {
        this.Summary = summary;
        this.Description = description;
        this.Status = status;
        this.Severity = severity;
        this.Id = 0;

        let now = new Date();
        this.DateCreated = now;
        this.DateUpdated = now;
    }

    /**
     * Validate summary and description fields
     */
    Validate() {
        //this validation can be more complex
        let retVal = {
            isValid: true,
            msg: ""
        }

        if (this.Summary === "") {
            retVal.isValid = false;
            retVal.msg = "Summary field can't be empty.";
        }

        if (this.Description === "") {
            retVal.isValid = false;
            retVal.msg = "Description field can't be empty.";
        }

        return retVal;
    }    
}