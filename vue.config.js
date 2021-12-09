module.exports = {
    // ...
    devServer: {
        port: 8001,
        proxy: {
            '/api': {
                target: 'http://localhost:8001',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        disableHostCheck: true,
    }
}