/**
 * DecoratorIncompatibilityException
 *
 * @author Johannes Diemke <johannes.diemke@eventim.de>
 * @since 0.0.1
 */

class DecoratorIncompatibilityException {

    private message: string;
    private name: string;

    constructor(message) {
        this.message = message;
        this.name = "DecoratorIncompatibilityException";
    }

}

export default DecoratorIncompatibilityException;
