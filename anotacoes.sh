# pesquisa:
# https://www.google.com/search?q=design+de+site+lojas+de+moda&sxsrf=AJOqlzV3DbB71I03mMbqG81d7e7htHAMog%3A1677269647651&ei=jxr5Y463J_Sz5OUPzPanaA&ved=0ahUKEwjOuqms_K79AhX0GbkGHUz7CQ0Q4dUDCA8&uact=5&oq=design+de+site+lojas+de+moda&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICCEQoAEQwwQ6CggAEEcQ1gQQsAM6BwgjELACECdKBAhBGABQ9RhY-R1gryFoAXABeACAAa0BiAGeBpIBAzAuNZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp
# https://br.pinterest.com/pin/477240891746517090/

# modelo para criação do site:
# https://www.mustachestore.com.br/

# Token jwt:
# https://www.javainuse.com/jwtgenerator
# https://jwt.io/
# https://www.npmjs.com/package/@auth0/angular-jwt

# manipulação da DOM:
# https://medium.com/@philippenunes/angular-manipulando-o-dom-com-responsabilidade-2e5da54c4818

# ataque xss:
# https://www.kaspersky.com.br/resource-center/definitions/what-is-a-cross-site-scripting-attack


# OBSERVAÇÕES:
# Criei módulos de erro e core no interior do módulo
# de pages, pois o caminho coringa [/**] intercepta qualquer 
# rota que não sejam as rotas cadastradas no módulo onde, se há
# registrado o path coringa, a solução foi designar as rotas, ao
# appModule para não gerar conflitos e bloquear rotas importantes
# como no caso da rota admin. O appModule então cadastra as rotas,
# através dos módulos carregados via lazy loading e cada módulo 
# apontará para o caminho raíz [/] com o argumento { path:'' }



# path:
#     - pages.module
#         - storeComponent
#         - error.module
#             - errorComponent
#         - core.module
#             - 



# Token fake para testes:
# eyJhbGciOiJIUzI1NiJ9.
# eyJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6ImxvamEiLCJleHAiOjE2Nzc0Mjg2NjksImlhdCI6MTY3NzQyODY2OX0.
# kq4lbf4oiVHZTlmxXiHd4BHChcTeRHwQiqftuAhRXgY

#   copie e cole este script no console do browser 
# [testes de proteção de rota via guard]

#   function test(){
#     const token_test='eyJhbGciOiJIUzI1NiJ9.eyJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6ImxvamEiLCJleHAiOjE2Nzc0Mjg2NjksImlhdCI6MTY3NzQyODY2OX0.kq4lbf4oiVHZTlmxXiHd4BHChcTeRHwQiqftuAhRXgY'
#     localStorage.setItem('access_token', token_test)
#   }
