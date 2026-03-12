<!-- (1) Abd Elhamed Khalifa Mohamed -->

<!-- **For all Project: 

i used Routes and Route Library from React to connect all components to each other .
i Used Likn From react-router-dom To Wrap My Project with it and be easy to walk in the Pages and be Faster.

 -->

<!--

1-Products.jsx:

in Products i made an array to store each product in the web with a unique ID and name to title it and price and the source of the img in image and details to describe it
and i used the functions that i have made in context/shoppingCart.jsx to to make a small crud system to it

and i used the unique id to be the parameter in the functions 
 
then i add a small css touch for the page in Product.css
 -->


<!--

2-ProductDetails.jsx:

i used here useParams From React-router-dom the get the id of the product from the url and use this id to make the structure of the page with it .
and Also i made a small css  touch  for this page in ProductsDetails.css .

 -->

<!-- 

3-Nav.jsx:

i used {useEffect and useState} so i can save data and make a small transation When user scroll down  form the middle of the page to the side .
and i also used the context to make a small counter on the basket-cart using cartItems.Length.
and add a css touch in Nav.css in this file is alot of hover effect to enhance user exp.

 -->

<!-- 

4- context/shoppingCart.jsx:
this the most important page in the project i made all the functions and i make a local storage in this context:

0- i made a local storage using JSON File so i can store and save the data that the user will make to dont make it gone when the user refresh the page or Reload it.

1-getItemQuantity: to find the Quantity of the item i bass to cart and return the Quantity or Return 0.

2- increaseCartQuntity: so i can increase the Number of item i have selected by the id 

if it null make it 1   , and if it more than 1 increase it (quantity= item.quantity+1).

3- decreaseCartQuantity : so ican decrease the number of the itemi have selected

if the quantity =1 Remove the item and if it more than 1 (quantity= item.quantity-1).

4-removeFromCart: this allows me to remove the item form the cart by its ID just if the function found the id she is Filter it.

5-in the End I Use The Provider from Context so I can Provider all the functions in the context to the all project

 -->


<!-- 

5-Cart.jsx: i used products from Product So i can have the id of the item that iwant to display in the cart . 

and i made a small expretion that i there is no items in the cart just show (Your cart is empty).

i make a variable that store the sum of the prices
{Total = sum + price * the quantity} .

also i made a small css touch in Cart.css

 -->

<!-- 

6- App.jsx: i just implement the componants with some exception like dont show the header in /Offer_Page etc.

and i add a small timer for 1.5s for LodingScreen before the main content , used Routes and ShopingCartProvider for what i have mentioned before.

 -->

 <!-- 
 7-LodingScreen.jsx: Very simple page show before the main content with atractive Css style in lodingScreen.css
  -->

<!--

  8- index.html : nothing special but in the header i put atitle of the page and i make meta tags for SEO.

and i put a small icon for the title matches with all deferent Widths .

 -->


***********************************************************************************************************************************************************


 <!-- (2) Name: Emad Aldein Abdelaty Abdelmordy
Header:
الكومبونينت دي مسؤولة عن عرض الهيدر بتاع الموقع في الصفحة من فوق  
 عشان تعرض اسم الموقع بشكل واضح.
 Golden Gym كعنوان رئيسي في الصفحة.

أنا عامل للكومبونينت دي استايل في ملف CSS
 فيه الألوان والخلفية والتأثيرات البسيطة لما الماوس يعدي عليها

Offer_Page.jsx
الكومبونينت دي مسؤولة عن عرض صفحة العروض والخصومات في الموقع
عشان المستخدم يشوف العروض الخاصة الللي بتجمع أكتر من منتج بسعر أقل
الصفحة بتعرض كل عرض على شكل كارت فيه صور المنتجات الموجودة في العرض وبينهم علامة +
وتحتهم مكتوب تفاصيل الخصم
لما المستخدم يضغط على Add to Cart
المنتجات اللي موجودة في العرض بتتضاف مباشرة في Shopping Cart
باستخدام الفانكشن المسؤولة عن زيادة المنتجات في العربية
وكمان بعد ما المنتجات تتضاف للعربية بيظهر رسالة للمستخدم يوضح له أسماء المنتجات اللي اتضافت
وعامل ليها استايل في ملف CSS خارجى offer_page.css

ShowCategories.jsx
بتعرض أقسام المنتجات الموجودة في الموقع عشان المستخدم يقدر يختار القسم اللي عايزه
الصفحة بتعرض عنوان اسمه Categories
 وتحتها قائمة الأقسام المتاحة في الموقع زي Supplements و Proteins و Vitamins
كل قسم بيكون عبارة عن لينك لما المستخدم يضغط عليه بينتقل لللصفحة الخاصة بالقسم ده عشان يشوف المنتجات اللي موجودة فيه
وعاملها استايل برضو ShowCategories .css

Proteins.jsx
دى عاملها عشان تعرض منتجات البروتين الموجودة في الموقع
بتجيب المنتجات الخاصة بقسم البروتين من قائمة المنتجات وتعرضها للمستخدم في شكل كروت
الكومبونينت كمان متوصلة بـ Shopping Cart
 عشان تقدر تدير المنتجات اللي المستخدم بيضيفها للعربية
ولو المنتج اتضاف قبل كده بيقدر يتحكم في الكمية بحيث يقدر يزود الكمية أو يقللها أو يحذف المنتج كله من العربية 
كمان كل منتج فيه زرار View Details وده بيودّي المستخدم لصفحة تفاصيل المنتج عشان يشوف معلومات أكتر عنه
وعاملها استايل في ملف css خارجى Proteins.css
ونفس الكلام عامله في Supplements و Vitamins
ومغير طبعا المنتجات من خلال IDs

Footer.jsx
بتعرض للمستخدم وسائل التواصل مع الموقع 
بيظهر عنوان بسيط بيقول Visit Our Websites
وأيقونات للسوشيال ميديا عبارة عن لينكات بتفتح مواقع التواصل
زي Facebook و X و Instagram و whatsApp
في آخر الفوتر فيه جملة All Rights Reserved 2026 ودي بتوضح إن حقوق الموقع محفوظة

 -->





