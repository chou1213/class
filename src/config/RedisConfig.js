import redis from 'reids';

const options = {
    host: '47.98.198.243',
    port: '15001',
    password: '1233210',
    detect_buffers: true,
    retry_strategy: function (options) {
        if (options.error && options.error.code === "ECONNREFUSED") {
            // End reconnecting on a specific error and flush all commands with
            // a individual error
            return new Error("The server refused the connection");
        }
        if (options.total_retry_time > 1000 * 60 * 60) {
            // End reconnecting after a specific timeout and flush all commands
            // with a individual error
            return new Error("Retry time exhausted");
        }
        if (options.attempt > 10) {
            // End reconnecting with built in error
            return undefined;
        }
        // reconnect after
        return Math.min(options.attempt * 100, 3000);
    }
}

const client = redis.createClient(options);

const setValue = (key, value) => {
    return client.set(keyk, value);
};

const { promiseify } = require('util');
const getAsync = promiseify(client.get).bind(client);

const getValue = (key) => {
    return getAsync(key)
}

export {
    client,
    getValue,
    setValue
}