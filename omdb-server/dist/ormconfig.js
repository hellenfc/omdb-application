module.exports = {
    "type": "mysql",
    "host": process.env.TYPEORM_HOST,
    "port": process.env.TYPEORM_PORT,
    "username": process.env.TYPEORM_USERNAME,
    "password": process.env.TYPEORM_PASSWORD,
    "database": process.env.TYPEORM_DATABASE,
    "entities": [
        "./dist/entity/*.js"
    ],
    "logging": true,
    "synchronize": true
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JtY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJvcm1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLE1BQU0sRUFBRSxPQUFPO0lBQ2YsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWTtJQUNoQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO0lBQ2hDLFVBQVUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQjtJQUN4QyxVQUFVLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0I7SUFDeEMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCO0lBQ3hDLFVBQVUsRUFBRTtRQUNSLG9CQUFvQjtLQUN2QjtJQUNELFNBQVMsRUFBRSxJQUFJO0lBQ2YsYUFBYSxFQUFFLElBQUk7Q0FDdEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIFwidHlwZVwiOiBcIm15c3FsXCIsXG4gICAgXCJob3N0XCI6IHByb2Nlc3MuZW52LlRZUEVPUk1fSE9TVCxcbiAgICBcInBvcnRcIjogcHJvY2Vzcy5lbnYuVFlQRU9STV9QT1JULFxuICAgIFwidXNlcm5hbWVcIjogcHJvY2Vzcy5lbnYuVFlQRU9STV9VU0VSTkFNRSxcbiAgICBcInBhc3N3b3JkXCI6IHByb2Nlc3MuZW52LlRZUEVPUk1fUEFTU1dPUkQsXG4gICAgXCJkYXRhYmFzZVwiOiBwcm9jZXNzLmVudi5UWVBFT1JNX0RBVEFCQVNFLFxuICAgIFwiZW50aXRpZXNcIjogW1xuICAgICAgICBcIi4vZGlzdC9lbnRpdHkvKi5qc1wiXG4gICAgXSxcbiAgICBcImxvZ2dpbmdcIjogdHJ1ZSxcbiAgICBcInN5bmNocm9uaXplXCI6IHRydWVcbn0iXX0=