'use strict';

/* Services */

var services = angular.module('ngdemo.services', ['ngResource',
    '$strap.directives', 'infinite-scroll', 'infiniteScroll', 'checklist-model', 'ngAutocomplete']);


services.factory('Reddit', function ($http) {
    console.log('calling services reached - ');
    var Reddit = function () {
        this.items = [];
        this.busy = false;
        this.after = 'nokia';
        console.log('calling services Reddit - ');
    };

    Reddit.prototype.nextPage = function () {
        if (this.busy) return;
        this.busy = true;
        console.log('calling services nextPage() - ');
        var url = "http://localhost:8080/rest/users/home?after=" + this.after + "&jsonp=JSON_CALLBACK";
        console.log('calling services url  - ' + url);
        $http.jsonp(url).success(function (data) {
            console.log('calling services success - ');
            var items = data.data.children;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i].data);
            }
            console.log('calling services item - ' + this.items[this.items.length - 1].id);
            this.after = "t3_" + this.items[this.items.length - 1].id;
            this.busy = false;
        }.bind(this));
    };
    console.log('calling services - ' + Reddit.length);
    return Reddit;
});


services.factory('UserFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    /*alert("I am here service");*/
    console.log("casualshirts service");
    $rootScope.$emit('LOAD');
    return  {


        postmain: $resource('/rest/users/flip', {}, {
            query: {method: 'GET', isArray: true },
            create: {method: 'POST'}
        }),
        usercreation: $resource('/user', {}, {
            query: {method: 'GET', isArray: true },
            create: {method: 'POST'}
        }),
        userquery: $resource('/user/query/:username/:password', {}, {
            query: {method: 'GET', isArray: true, params: {username: '@user', password: '@password'} },
            create: {method: 'POST'}
        }),
        home: $resource('/mobile/allmobiles', {}, {
            query: {method: 'GET', cache: true, isArray: true },
            create: {method: 'POST'}
        }),
        mobilebrands: $resource('/mobile/mobilebrands', {}, {
            query: {method: 'GET', isArray: true },
            create: {method: 'POST'}
        }),
        brandName: $resource('/mobile/mobilebrands/:brands/:color/:price', {}, {
            query: {method: 'GET', isArray: true, cache: true, params: {brands: '@brands', color: '@color', price: '@price'} },
            create: {method: 'POST'}
        }),
        casualshirts: $resource('/mobile/allmobiles', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        productdetails: $resource('/mobile/compare/:key', {}, {
            query: {method: 'GET', isArray: true, cache: true, params: {key: '@key'} },
            create: {method: 'POST'}
        }),
        allproducts: $resource('/rest/users/products/:key', {}, {
            query: {method: 'GET', isArray: true, cache: $cacheFactory, params: {key: '@key'}},
            create: {method: 'POST'}
        }),
        productnames: $resource('/rest/users/productnames', {}, {
            query: {method: 'GET', cache: true, isArray: true },
            create: {method: 'POST'}
        }),
        searchproduct1: $resource('/rest/users/searchproduct/:productname/:category', {}, {
            query: {method: 'GET', cache: true, isArray: true, params: {productname: '@productname', category: '@category'} },
            create: {method: 'POST'}
        }),
        allresults: $resource('/rest/users/cats', {}, {
            query: {method: 'GET', cache: true, params: {}, isArray: true }
            // create: {method: 'POST'}
        })};
    $rootScope.$emit('UNLOAD');
}]);


services.factory('ProductFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    /*alert("I am here service");*/
    console.log("casualshirts service");
    return  {


        home: $resource('/watches/menwatches', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        watchbrands: $resource('/watches/watchbrands', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        womenwatchbrands: $resource('/rest/products/womenwatchbrands', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        brandName: $resource('/watches/filterwatches/:brands/:color/:price', {}, {
            query: {method: 'GET', isArray: true, params: {brands: '@brands', color: '@color', price: '@price'}, cache: true },
            create: {method: 'POST'}
        }),
        productdetails: $resource('/watches/compare/:key', {}, {
            query: {method: 'GET', isArray: true, params: {key: '@key'}, cache: true },
            create: {method: 'POST'}
        }),
        allresults: $resource('/rest/users/cats', {}, {
            query: {method: 'GET', params: {}, isArray: true, cache: true }
            // create: {method: 'POST'}
        })};
}]);

services.factory('LaptopFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    //alert("I am here service");
    console.log("LaptopFactory service");
    return  {


        home: $resource('/laptop/alllaptops', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        laptopbrands: $resource('/laptop/laptopbrands', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        womenwatchbrands: $resource('/rest/products/womenwatchbrands', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        brandName: $resource('/laptop/filterlaptop/:brands/:color/:price', {}, {
            query: {method: 'GET', isArray: true, params: {brands: '@brands', color: '@color', price: '@price'}, cache: true },
            create: {method: 'POST'}
        }),
        productdetails: $resource('/laptop/compare/:key', {}, {
            query: {method: 'GET', isArray: true, params: {key: '@key'}, cache: true },
            create: {method: 'POST'}
        }),
        allresults: $resource('/rest/users/cats', {}, {
            query: {method: 'GET', params: {}, isArray: true, cache: true }
            // create: {method: 'POST'}
        })};
}]);

services.factory('TVFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    //alert("I am here service");
    console.log("LaptopFactory service");
    return  {


        home: $resource('/tv/allTelevisions', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        tvbrands: $resource('/tv/tvbrands', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        womenwatchbrands: $resource('/rest/products/womenwatchbrands', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        brandName: $resource('/tv/filterTelevision/:brands/:color/:price', {}, {
            query: {method: 'GET', isArray: true, params: {brands: '@brands', color: '@color', price: '@price'}, cache: true },
            create: {method: 'POST'}
        }),
        productdetails: $resource('/tv/compare/:key', {}, {
            query: {method: 'GET', isArray: true, params: {key: '@key'}, cache: true },
            create: {method: 'POST'}
        }),
        allresults: $resource('/rest/users/cats', {}, {
            query: {method: 'GET', params: {}, isArray: true, cache: true }
            // create: {method: 'POST'}
        })};
}]);

services.factory('CameraFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    //alert("I am here service");
    console.log("CameraFactory service");
    return  {


        home: $resource('/product/allProducts/:productType', {}, {
            query: {method: 'GET', isArray: true, params: {productType: '@productType'}, cache: true },
            create: {method: 'POST'}
        }),
        productbrands: $resource('/product/brands/:productType', {}, {
            query: {method: 'GET', isArray: true, params: {productType: '@productType'}, cache: true },
            create: {method: 'POST'}
        }),
        womenwatchbrands: $resource('/rest/products/womenwatchbrands', {}, {
            query: {method: 'GET', isArray: true, cache: true },
            create: {method: 'POST'}
        }),
        brandName: $resource('/product/filterProducts/:brands/:color/:price/:productType', {}, {
            query: {method: 'GET', isArray: true, params: {brands: '@brands', color: '@color', price: '@price', productType: '@productType'}, cache: true },
            create: {method: 'POST'}
        }),
        productdetails: $resource('/product/compare/:key/:productType', {}, {
            query: {method: 'GET', isArray: true, params: {key: '@key', productType: '@productType'}, cache: true },
            create: {method: 'POST'}
        }),
        allresults: $resource('/rest/users/cats', {}, {
            query: {method: 'GET', params: {}, isArray: true, cache: true }
            // create: {method: 'POST'}
        })};
}]);

services.factory('WomenFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    //alert("I am here service");
    console.log("WomenFactory service");
    return  {

        allclothing: $resource('/women/allresults/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allcolor: $resource('/women/color/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        selectionclothing: $resource('/women/selectionclothing/:brand/:color/:price/:categoryItem/:order', {}, {
            query: {method: 'GET', isArray: true, params: {brand: '@brand', color: '@color', price: '@price', categoryItem: '@categoryItem', order: '@order'}, cache: true },
            create: {method: 'POST'}
        }),
        comapreproduct: $resource('/women/compare/:productName/:category', {}, {
            query: {method: 'GET', isArray: true, params: {productName: '@productName', category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allbrands: $resource('/women/brands/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true }
            // create: {method: 'POST'}
        })};
}]);


services.factory('ElectronicsFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    //alert("I am here service");
    console.log("ElectronicsFactory service");
    return  {

        allclothing: $resource('/elect/allresults/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allcolor: $resource('/elect/color/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        selectionclothing: $resource('/elect/selection/:brand/:color/:price/:categoryItem/:order', {}, {
            query: {method: 'GET', isArray: true, params: {brand: '@brand', color: '@color', price: '@price', categoryItem: '@categoryItem', order: '@order'}, cache: true },
            create: {method: 'POST'}
        }),
        comapreproduct: $resource('/elect/compare/:productName/:category', {}, {
            query: {method: 'GET', isArray: true, params: {productName: '@productName', category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allbrands: $resource('/elect/brands/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true }
            // create: {method: 'POST'}
        })};
}]);

services.factory('MobilesFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    //alert("I am here service");
    console.log("mobileronicsFactory service");
    return  {

        allclothing: $resource('/mobile/allresults/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allcolor: $resource('/mobile/color/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        smobileionclothing: $resource('/mobile/selection/:brand/:color/:price/:categoryItem/:order', {}, {
            query: {method: 'GET', isArray: true, params: {brand: '@brand', color: '@color', price: '@price', categoryItem: '@categoryItem', order: '@order'}, cache: true },
            create: {method: 'POST'}
        }),
        comapreproduct: $resource('/mobile/compare/:productName/:category', {}, {
            query: {method: 'GET', isArray: true, params: {productName: '@productName', category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allbrands: $resource('/mobile/brands/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true }
            // create: {method: 'POST'}
        })};
}]);


services.factory('WatchsFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    //alert("I am here service");
    console.log("WatchronicsFactory service");
    return  {

        allclothing: $resource('/Watch/allresults/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allcolor: $resource('/Watch/color/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        sWatchionclothing: $resource('/Watch/selection/:brand/:color/:price/:categoryItem/:order', {}, {
            query: {method: 'GET', isArray: true, params: {brand: '@brand', color: '@color', price: '@price', categoryItem: '@categoryItem', order: '@order'}, cache: true },
            create: {method: 'POST'}
        }),
        comapreproduct: $resource('/Watch/compare/:productName/:category', {}, {
            query: {method: 'GET', isArray: true, params: {productName: '@productName', category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allbrands: $resource('/Watch/brands/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true }
            // create: {method: 'POST'}
        })};
}]);


services.factory('MenFactory', ['$resource', '$rootScope', '$cacheFactory', function ($resource, $rootScope, $cacheFactory) {
    //alert("I am here service");
    console.log("MenFactory service");
    return  {

        allclothing: $resource('/Men/allresults/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allcolor: $resource('/Men/color/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        selectionclothing: $resource('/Men/selectionclothing/:brand/:color/:price/:categoryItem/:order', {}, {
            query: {method: 'GET', isArray: true, params: {brand: '@brand', color: '@color', price: '@price', categoryItem: '@categoryItem', order: '@order'}, cache: true },
            create: {method: 'POST'}
        }),
        comapreproduct: $resource('/Men/compare/:productName/:category', {}, {
            query: {method: 'GET', isArray: true, params: {productName: '@productName', category: '@category'}, cache: true },
            create: {method: 'POST'}
        }),
        allbrands: $resource('/Men/brands/:category', {}, {
            query: {method: 'GET', isArray: true, params: {category: '@category'}, cache: true }
            // create: {method: 'POST'}
        })};
}]);
