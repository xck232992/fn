# SpringBoot 和 Token

> 在前后端交互的过程中为了保证信息的安全，往往需要用户能够登录认证后能够在之后的各种请求中都携带认证信息。但是由于 HTTP 是一种无状态协议，所以就需要额外来存储这些认证信息。

> 参考资料：[Spring and JWT](https://blog.softtek.com/en/token-based-api-authentication-with-spring-and-jwt)

### Cookie/Session 认证

Cookie 是由浏览器来保存认证信息，开发者可以设定 cookie 的保存时间。

但是 Cookie 需要浏览器来支持，如果浏览器不支持 cookie 或者是 cookie 被禁用了，那么 cookie 功能就会失效。而且 Cookie 不可跨域名，浏览器会按照域名来判断一个网站能不能操作另一个网站的 Cookie。

Session 则是由服务器来保存这些认证信息，服务端把客户端的信息以某种形式记录在服务端上，当客户端再次访问的时候只要在 session 中查找这个客户端的信息就可以了。

但是 Session 保存在服务端，必然会造成服务端的压力。而且 session 只是暂时保存，关闭了网站信息就没有了。

<br>

###  token 认证

原来基于服务器验证的方式，存在各种缺点，比如占用服务器内存开销、CORS (跨域资料分享问题)，等问题。而 token 可以跨程序调用，支持移动端，无状态，可拓展。

**Token 的认证流程：**

- 用户发送用户名和密码
- 服务器进行验证
- 验证通过后返回一个带签名的 token 给客户端
- 客户端存储 token ，每次发送请求都携带这个 token 
- 服务端验证这个 token 

 