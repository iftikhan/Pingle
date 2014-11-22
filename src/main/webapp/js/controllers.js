'use strict';

/* Controllers */


var app = angular.module('ngdemo.controllers', ['ngResource', '$strap.directives', 'infinite-scroll',
    'infiniteScroll', 'checklist-model', 'angucomplete', 'ngAutocomplete', 'checklist-model']);


app.run(function ($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function () {
        $templateCache.removeAll();
    });
});


app.controller('DemoController', function ($scope, Reddit) {
    $scope.reddit = new Reddit();
    console.log('reddit result : ' + $scope.reddit.length);
});

app.controller('MyCtrl1', ['$scope', 'UserFactory', function ($scope, UserFactory) {
    $scope.bla = 'bla from controller';
    //$scope.home = UserFactory.home.query();


}]);

angular.module('scroll', []).directive('whenScrolled', function () {
    return function (scope, elm, attr) {
        var raw = elm[0];

        elm.bind('scroll', function () {
            if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
                scope.$apply(attr.whenScrolled);
            }
        });
    };
});


app.controller('ElectronicsCtrl', ['$scope', '$rootScope', '$location', 'ElectronicsFactory',
    function ($scope, $rootScope, $location, ElectronicsFactory) {


        $rootScope.pricecompare = {productNane: null};

        $scope.getElectronicsResult = function (category) {
            console.log("category 1 - " + category);
            $rootScope.categoryItem = category;
            console.log("$rootScope.categoryItem - " + $rootScope.categoryItem);
            $rootScope.brandList = ElectronicsFactory.allbrands.query({category: category});
            $rootScope.colorList = ElectronicsFactory.allcolor.query({category: category});
            $rootScope.electronicsList = ElectronicsFactory.allclothing.query({category: category});
            $rootScope.priceList = [
                {
                    price: "Rs. 1000 and below"
                },
                {
                    price: "Rs 1001 - 3000"
                },
                {
                    price: "Rs 3001 - 5000"
                },
                {
                    price: "Rs 5001 - 7000"
                },
                {
                    price: "Rs 7001 - 10000"
                },
                {
                    price: "Rs 10001 - 20000"
                },
                {
                    price: "Rs 20001 - 30000"
                },
                {
                    price: "Rs 30001 and above"
                }
            ];

            var pagesShown = 1;
            var pageSize = 21;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.electronicsList.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };


            $location.path('/electronics');
        }


        $rootScope.resultForSelection = function (brand, color, price, categoryItem, order) {
            console.log("brand #############- " + brand);
            console.log("color #############- " + color);
            console.log("price #############- " + price);
            console.log("categoryItem #############- " + categoryItem);
            //$rootScope.user.roles = angular.copy($rootScope.roles);
            //console.log("$scope.user.roles #############- " + $rootScope.user.roles);


            if (brand != undefined && brand.length > 0) {
                brand = brand;
            } else if (brand === undefined) {
                // alert('1');
                brand = "0";
            } else if (brand.length === 0) {
                alert('1');
                brand = "0";
            } else if (brand == null) {
                brand = "0";
            } else {
                brand = "0";
            }


            if (price != undefined  && price.length > 0) {
                price = price;
            } else if (price === undefined) {
                // alert('1');
                price = "0";
            } else if (price.length === 0) {
                // alert('1');
                price = "0";
            } else if (price == null) {
                price = "0";
            } else {
                price = "0";
            }

            if (color != undefined && color.length > 0) {
                color = color;
            } else if (color === undefined) {
                // alert('1');
                color = "0";
            }else if (color.length === 0) {
                // alert('1');
                color = "0";
            } else if (color == null) {
                color = "0";
            } else {
                color = "0";
            }

            if (order != undefined  && order.length > 0) {
                order = order;
            } else {
                order = 'asc';
            }

            $rootScope.electronicsList = ElectronicsFactory.selectionclothing.query({brand: brand, color: color, price: price, categoryItem: categoryItem, order: order});
        };

        $scope.getElectronicsResultBrands = function (category) {
            console.log("category 2 - " + category);
            $rootScope.brandList = ElectronicsFactory.allbrands.query({category: category});

            $location.path('/electronics');
        }

        $scope.getProductInfo = function (productName, categoryItem) {
            console.log("categoryItem 2 - " + categoryItem);
            $rootScope.pricecompare = ElectronicsFactory.comapreproduct.query({productName: productName, category: categoryItem});
            $rootScope.product = productName;
            $location.path('/electronics');
        }


    }]);

app.controller('MobilesCtrl', ['$scope', '$rootScope', '$location', 'MobilesFactory',
    function ($scope, $rootScope, $location, MobilesFactory) {


        $rootScope.pricecompare = {productNane: null};

        $scope.getMobilesResult = function (category) {
            console.log("category 1 - " + category);
            $rootScope.categoryItem = category;
            console.log("$rootScope.categoryItem - " + $rootScope.categoryItem);
            $rootScope.brandList = MobilesFactory.allbrands.query({category: category});
            $rootScope.colorList = MobilesFactory.allcolor.query({category: category});
            $rootScope.MobilesList = MobilesFactory.allclothing.query({category: category});
            $rootScope.priceList = [
                {
                    price: "Rs. 1000 and below"
                },
                {
                    price: "Rs 1001 - 3000"
                },
                {
                    price: "Rs 3001 - 5000"
                },
                {
                    price: "Rs 5001 - 7000"
                },
                {
                    price: "Rs 7001 - 10000"
                },
                {
                    price: "Rs 10001 - 20000"
                },
                {
                    price: "Rs 20001 - 30000"
                },
                {
                    price: "Rs 30001 and above"
                }
            ];

            var pagesShown = 1;
            var pageSize = 21;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.MobilesList.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };


            $location.path('/mobiles');
        }


        $rootScope.resultForSelection = function (brand, color, price, categoryItem, order) {
            console.log("brand #############- " + brand);
            console.log("color #############- " + color);
            console.log("price #############- " + price);
            console.log("categoryItem #############- " + categoryItem);
            //$rootScope.user.roles = angular.copy($rootScope.roles);
            //console.log("$scope.user.roles #############- " + $rootScope.user.roles);


            if (brand != undefined && brand.length > 0) {
                brand = brand;
            } else if (brand === undefined) {
                // alert('1');
                brand = "0";
            } else if (brand.length === 0) {
                alert('1');
                brand = "0";
            } else if (brand == null) {
                brand = "0";
            } else {
                brand = "0";
            }


            if (price != undefined  && price.length > 0) {
                price = price;
            } else if (price === undefined) {
                // alert('1');
                price = "0";
            } else if (price.length === 0) {
                // alert('1');
                price = "0";
            } else if (price == null) {
                price = "0";
            } else {
                price = "0";
            }

            if (color != undefined && color.length > 0) {
                color = color;
            } else if (color === undefined) {
                // alert('1');
                color = "0";
            }else if (color.length === 0) {
                // alert('1');
                color = "0";
            } else if (color == null) {
                color = "0";
            } else {
                color = "0";
            }

            if (order != undefined  && order.length > 0) {
                order = order;
            } else {
                order = 'desc';
            }

            $rootScope.MobilesList = MobilesFactory.smobileionclothing.query({brand: brand, color: color, price: price, categoryItem: categoryItem, order: order});
        };

        $scope.getMobilesResultBrands = function (category) {
            console.log("category 2 - " + category);
            $rootScope.brandList = MobilesFactory.allbrands.query({category: category});

            $location.path('/mobiles');
        }

        $scope.getProductInfo = function (productName, categoryItem) {
            console.log("categoryItem 2 - " + categoryItem);
            $rootScope.pricecompare = MobilesFactory.comapreproduct.query({productName: productName, category: categoryItem});
            $rootScope.product = productName;
            $location.path('/mobiles');
        }


    }]);



app.controller('WatchsCtrl', ['$scope', '$rootScope', '$location', 'WatchsFactory',
    function ($scope, $rootScope, $location, WatchsFactory) {


        $rootScope.pricecompare = {productName: null};

        $scope.getWatchsResult = function (category) {
            console.log("category 1 - " + category);
            $rootScope.categoryItem = category;
            console.log("$rootScope.categoryItem - " + $rootScope.categoryItem);
            $rootScope.brandList = WatchsFactory.allbrands.query({category: category});
            $rootScope.colorList = WatchsFactory.allcolor.query({category: category});
            $rootScope.WatchsList = WatchsFactory.allclothing.query({category: category});
            $rootScope.priceList = [
                {
                    price: "Rs. 1000 and below"
                },
                {
                    price: "Rs 1001 - 3000"
                },
                {
                    price: "Rs 3001 - 5000"
                },
                {
                    price: "Rs 5001 - 7000"
                },
                {
                    price: "Rs 7001 - 10000"
                },
                {
                    price: "Rs 10001 - 20000"
                },
                {
                    price: "Rs 20001 - 30000"
                },
                {
                    price: "Rs 30001 and above"
                }
            ];

            var pagesShown = 1;
            var pageSize = 21;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.WatchsList.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };


            $location.path('/Watchs');
        }


        $rootScope.resultForSelection = function (brand, color, price, categoryItem, order) {
            console.log("brand #############- " + brand);
            console.log("color #############- " + color);
            console.log("price #############- " + price);
            console.log("categoryItem #############- " + categoryItem);
            //$rootScope.user.roles = angular.copy($rootScope.roles);
            //console.log("$scope.user.roles #############- " + $rootScope.user.roles);


            if (brand != undefined && brand.length > 0) {
                brand = brand;
            } else if (brand === undefined) {
                // alert('1');
                brand = "0";
            } else if (brand.length === 0) {
                alert('1');
                brand = "0";
            } else if (brand == null) {
                brand = "0";
            } else {
                brand = "0";
            }


            if (price != undefined  && price.length > 0) {
                price = price;
            } else if (price === undefined) {
                // alert('1');
                price = "0";
            } else if (price.length === 0) {
                // alert('1');
                price = "0";
            } else if (price == null) {
                price = "0";
            } else {
                price = "0";
            }

            if (color != undefined && color.length > 0) {
                color = color;
            } else if (color === undefined) {
                // alert('1');
                color = "0";
            }else if (color.length === 0) {
                // alert('1');
                color = "0";
            } else if (color == null) {
                color = "0";
            } else {
                color = "0";
            }

            if (order != undefined  && order.length > 0) {
                order = order;
            } else {
                order = 'desc';
            }

            $rootScope.WatchsList = WatchsFactory.sWatchionclothing.query({brand: brand, color: color, price: price, categoryItem: categoryItem, order: order});
        };

        $scope.getWatchsResultBrands = function (category) {
            console.log("category 2 - " + category);
            $rootScope.brandList = WatchsFactory.allbrands.query({category: category});

            $location.path('/Watchs');
        }

        $scope.getProductInfo = function (productName, categoryItem) {
            console.log("categoryItem 2 - " + categoryItem);
            $rootScope.pricecompare = WatchsFactory.comapreproduct.query({productName: productName, category: categoryItem});
            $rootScope.product = productName;
            $location.path('/Watchs');
        }


    }]);


app.controller('WomenCtrl', ['$scope', '$rootScope', '$location', 'WomenFactory',
    function ($scope, $rootScope, $location, WomenFactory) {


        $scope.getProdName = function () {
            $rootScope.prodList = WomenFactory.allclothing.query({category: 'Dress'});
        };

        $scope.getWomenClothing = function (category) {
            console.log("category 1 - " + category);
            $rootScope.categoryItem = category;
            console.log("$rootScope.categoryItem - " + $rootScope.categoryItem);
            $rootScope.brandList = WomenFactory.allbrands.query({category: category});
            $rootScope.colorList = WomenFactory.allcolor.query({category: category});
            $rootScope.womenList = WomenFactory.allclothing.query({category: category});
            $rootScope.priceList = [
                {
                    price: "Rs. 1000 and below"
                },
                {
                    price: "Rs 1001 - 3000"
                },
                {
                    price: "Rs 3001 - 5000"
                },
                {
                    price: "Rs 5001 - 7000"
                },
                {
                    price: "Rs 7001 and above"
                }
            ];

            var pagesShown = 1;
            var pageSize = 21;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.womenList.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };


            $location.path('/womenclothing');
        }


        $rootScope.resultForSelection = function (brand, color, price, categoryItem, order) {
            console.log("brand #############- " + brand);
            console.log("color #############- " + color);
            console.log("price #############- " + price);
            console.log("categoryItem #############- " + categoryItem);
            //$rootScope.user.roles = angular.copy($rootScope.roles);
            //console.log("$scope.user.roles #############- " + $rootScope.user.roles);



            if (brand != undefined && brand.length > 0) {
                brand = brand;
            } else if (brand === undefined) {
                // alert('1');
                brand = "0";
            } else if (brand.length === 0) {
                alert('1');
                brand = "0";
            } else if (brand == null) {
                brand = "0";
            } else {
                brand = "0";
            }


            if (price != undefined  && price.length > 0) {
                price = price;
            } else if (price === undefined) {
                // alert('1');
                price = "0";
            } else if (price.length === 0) {
                // alert('1');
                price = "0";
            } else if (price == null) {
                price = "0";
            } else {
                price = "0";
            }

            if (color != undefined && color.length > 0) {
                color = color;
            } else if (color === undefined) {
                // alert('1');
                color = "0";
            }else if (color.length === 0) {
                // alert('1');
                color = "0";
            } else if (color == null) {
                color = "0";
            } else {
                color = "0";
            }

            if (order != undefined  && order.length > 0) {
                order = order;
            } else {
                order = 'asc';
            }

            $rootScope.womenList = WomenFactory.selectionclothing.query({brand: brand, color: color, price: price, categoryItem: categoryItem, order: order});
        };

        $scope.getWomenClothingBrands = function (category) {
            console.log("category 2 - " + category);
            $rootScope.brandList = WomenFactory.allbrands.query({category: category});

            $location.path('/womenclothing');
        }

        $rootScope.pricecompare = {productName: null};

        $scope.getProductInfo = function (productName, categoryItem) {
            console.log("categoryItem 2 - " + categoryItem);
            $rootScope.pricecompare = WomenFactory.comapreproduct.query({productName: productName, category: categoryItem});
            $rootScope.product = productName;
            $location.path('/womenclothing');
        }

        $scope.login = function (PUser) {

            $scope.loginstatus = UserFactory.userquery.query({username: PUser.email, pwd: PUser.password});
            $location.path('/view1');
        }

    }]);


app.controller('MenCtrl', ['$scope', '$rootScope','$q', '$location', 'MenFactory',
    function ($scope, $rootScope,$q, $location, MenFactory) {






        $scope.getMenClothing = function (category) {
            console.log("category 1 - " + category);
            $rootScope.categoryItem = category;
            console.log("$rootScope.categoryItem - " + $rootScope.categoryItem);
            $rootScope.brandList = MenFactory.allbrands.query({category: category});
            $rootScope.colorList = MenFactory.allcolor.query({category: category});
            $rootScope.MenList = MenFactory.allclothing.query({category: category});
            $rootScope.NewLsit=null;

//            $rootScope.getItemsToShow = function () {
//                var List;
//                var count;
//                var obj = $rootScope.MenList;
//
//                if (obj[0].List) {
//                    List = obj[0].List;
//                    count = obj[1].TotalResult;
//                }
//                else {
//
//                    List = obj[1].List;
//                    count = obj[0].TotalResult;
//                }
//
//                alert(count);
//            };
//  $rootScope.getItemsToShow();




            $rootScope.priceList = [
                {
                    price: "Rs. 1000 and below"
                },
                {
                    price: "Rs 1001 - 3000"
                },
                {
                    price: "Rs 3001 - 5000"
                },
                {
                    price: "Rs 5001 - 7000"
                },
                {
                    price: "Rs 7001 and above"
                }
            ];

            var pagesShown = 1;
            var pageSize = 50;
            var rowCount=1;
//rowCount:rowCount
            function doQuery(category) {
                var d = $q.defer();
                var result = MenFactory.allclothing.query({category: category}, function() {
                    d.resolve(result);
                });
                return d.promise;
            }

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {

                var List;
                var obj = $rootScope.MenList;

             //   console.log(obj);
                if (obj[0]!=undefined )
                    if(obj[0].List!=undefined)
                    List = obj[0].List;
                else
                    List = obj[1].List;
              //  console.log(List);
                if(List!= undefined)
                    return pagesShown < (List.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;


                    var List;
                    var fetchedList;
                    var obj = $rootScope.MenList;

                    if ( obj[0] != undefined)
                    if(obj[0].List != undefined)
                        List = obj[0].List;
                    else
                        List = obj[1].List;


                    if (!(pagesShown < (List.length / pageSize))) {
                        console.log("need to call DB");

                        $q.all([
                            doQuery(category)
                        ]).then(function (data1) {

                            var newlist = data1[0];


                           if(newlist.length >0) {
                               if (newlist[0] != undefined)
                                   if (newlist[0].List != undefined)
                                       fetchedList = newlist[0].List;
                                   else
                                       fetchedList = newlist[1].List;

                                   if (fetchedList.length > 0) {
                                       console.log("fetchedList:" ,fetchedList)
                                       if (newlist[0] != undefined)
                                           if ($rootScope.MenList[0].List != undefined) {
                                               $rootScope.MenList[0].List = $rootScope.MenList[0].List.concat(fetchedList);
                                               console.log( "updated records",$rootScope.MenList[0]);
                                           }
                                           else {
                                               $rootScope.MenList[1].List = $rootScope.MenList[1].List.concat(fetchedList);
                                               console.log( "updated records",$rootScope.MenList[1]);
                                           }
                                   }
                                   return true;
                               }

                        });
                    }
                return true;
            };

            $location.path('/Menclothing');
        }


        $rootScope.resultForSelection = function (brand, color, price, categoryItem, order) {
            console.log("brand #############- " + brand);
            console.log("color #############- " + color);
            console.log("price #############- " + price);
            console.log("categoryItem #############- " + categoryItem);
            //$rootScope.user.roles = angular.copy($rootScope.roles);
            //console.log("$scope.user.roles #############- " + $rootScope.user.roles);



            if (brand != undefined && brand.length > 0) {
                brand = brand;
            } else if (brand === undefined) {
                // alert('1');
                brand = "0";
            } else if (brand.length === 0) {
                alert('1');
                brand = "0";
            } else if (brand == null) {
                brand = "0";
            } else {
                brand = "0";
            }


            if (price != undefined  && price.length > 0) {
                price = price;
            } else if (price === undefined) {
                // alert('1');
                price = "0";
            } else if (price.length === 0) {
                // alert('1');
                price = "0";
            } else if (price == null) {
                price = "0";
            } else {
                price = "0";
            }

            if (color != undefined && color.length > 0) {
                color = color;
            } else if (color === undefined) {
                // alert('1');
                color = "0";
            }else if (color.length === 0) {
                // alert('1');
                color = "0";
            } else if (color == null) {
                color = "0";
            } else {
                color = "0";
            }

            if (order != undefined  && order.length > 0) {
                order = order;
            } else {
                order = 'asc';
            }

            $rootScope.MenList = MenFactory.selectionclothing.query({brand: brand, color: color, price: price, categoryItem: categoryItem, order: order});
        };

        $scope.getMenClothingBrands = function (category) {
            console.log("category 2 - " + category);
            $rootScope.brandList = MenFactory.allbrands.query({category: category});

            $location.path('/Menclothing');
        }

        $rootScope.pricecompare = {productName: null};

        $scope.getProductInfo = function (productName, categoryItem) {
            console.log("categoryItem 2 - " + categoryItem);
            $rootScope.pricecompare = MenFactory.comapreproduct.query({productName: productName, category: categoryItem});
            $rootScope.product = productName;
            $location.path('/Menclothing');
        }

        $scope.login = function (PUser) {

            $scope.loginstatus = UserFactory.userquery.query({username: PUser.email, pwd: PUser.password});
            $location.path('/view1');
        }

    }]);



app.controller('UserCtrl', ['$scope', '$rootScope', '$location', 'UserFactory', 'ProductFactory', '$q', 'Reddit', function ($scope, $rootScope, $location, UserFactory, ProductFactory, $q, Reddit) {


    $scope.registerUser = function (PUser) {
        console.log("register - " + PUser.name);
        console.log("register - " + PUser.email);
        console.log("register - " + PUser.password);
        console.log("register - " + PUser.phoneNumber);
        console.log("register - " + PUser.address);
        console.log("register - " + PUser.countryCode);
        console.log("register - " + PUser.country);
        console.log("register - " + PUser.city);

        UserFactory.usercreation.create(PUser);
        $location.path('/login');
    }

    $scope.login = function (PUser) {

        $rootScope.loginstatus = UserFactory.userquery.query({username: PUser.email, password: PUser.password});
       console.log("user" + $rootScope.loginstatus.length);
        $location.path('/view1');
    }

}]);

app.controller('MyCtrl2', ['$scope', '$rootScope', '$location', 'UserFactory', 'ProductFactory', '$q', 'Reddit', function ($scope, $rootScope, $location, UserFactory, ProductFactory, $q, Reddit) {


    $scope.items = [
        { id: 1, name: 'Books'},
        { id: 2, name: 'Mobile'}
    ];


    $scope.result1 = '';
    $scope.options1 = null;
    $scope.details1 = '';

    //$scope.home = UserFactory.home.query();


    //  $rootScope.home = angular.toJson(ProductFactory.home.query({productcategory: 'Men Casual Shirts'}));
    console.log("db controller");
    $scope.casualShirts = function () {
        console.log("casualshirts");
        $rootScope.home = ProductFactory.home.query({productcategory: 'Men Casual Shirts'});

        var pagesShown = 1;
        var pageSize = 21;

        $scope.paginationLimit = function (data) {
            //alert("34");
            return pageSize * pagesShown;
        };
        $scope.hasMoreItemsToShow = function () {
            return pagesShown < ($rootScope.home.length / pageSize);
        };
        $scope.showMoreItems = function () {
            pagesShown = pagesShown + 1;
        };
        $location.path('/view2');
    }


    $scope.menTShirts = function () {
        console.log("menTShirts");
        console.log("casualshirts");
        $rootScope.home = ProductFactory.home.query({productcategory: 'Men T-Shirts'});

        console.log("casualshirts - " + angular.toJson($rootScope.home));

        console.log("casualshirts length - " + $scope.home.length);
        $scope.$watch($rootScope.home, function (newVal) {
            //alert("Changed an input");
        }, true);
        $location.path('/view2');
    }

    $scope.womenSkirts = function () {
        console.log("womenSkirts");
        $rootScope.home = UserFactory.casualshirts.query({key: 'Women Skirts'});

        console.log("casualshirts length - " + $scope.home.length);

        $location.path('/view2');
    }

    $scope.womenWatches = function () {
        console.log("womenWatches");
        $rootScope.home = UserFactory.casualshirts.query({key: 'Women Watches'});

        console.log("casualshirts length - " + $scope.home.length);

        $location.path('/view2');
    }


    $scope.mobiles = function () {

        $rootScope.mobilebrands = UserFactory.mobilebrands.query();

        console.log("mobiles db");
        $rootScope.$on('LOAD', function () {
            $rootScope.loading = true
        });
        $rootScope.$on('UNLOAD', function () {
            $rootScope.loading = false
        });
        $rootScope.home = UserFactory.casualshirts.query({key: 'mobiles'});

        var pagesShown = 1;
        var pageSize = 21;

        $scope.paginationLimit = function (data) {
            //alert("34");
            return pageSize * pagesShown;
        };
        $scope.hasMoreItemsToShow = function () {
            return pagesShown < ($rootScope.home.length / pageSize);
        };
        $scope.showMoreItems = function () {
            pagesShown = pagesShown + 1;
        };

        console.log("mobiles length - " + $scope.home.length);


        $location.path('/view2');
    }


    $scope.divisions = UserFactory.mobilebrands.query();

    $scope.tradeshow = { };
    $scope.tradeshow.Divisions = [];

    // selected divisions
    //$scope.selection = [];

    // helper method
    $scope.selectedDivisions = function selectedDivisions() {
        return filterFilter($scope.tradeshow.Divisions, { selected: true });
    };


    $scope.colordivisions = [
        {
            color: "White"
        },
        {
            color: "Yellow"
        },
        {
            color: "Pink"
        },
        {
            color: "Black"
        },
        {
            color: "Grey"
        }
    ];


    //  var productNames = UserFactory.productnames.query();
    //  console.log('product names : - ' + productNames);
    $scope.typeahead = ["ADCOM A-430I PS Black", "ADCOM Smartphone A-350i Black", "ADCOM Smartphone A-350i White", "ADCOM Smartphone A-500 Black", "ADCOM Smartphone A-500 White", "ADCOM Thunder A-350 Black", "ADCOM Thunder A-350 White", "ADCOM Thunder A-400 Black", "ADCOM Thunder A-400 White", "ADCOM Thunder A-400i Black", "ADCOM Thunder A-400i White", "ADCOM Thunder A-430 White", "ADCOM X8 Black", "ADCOM X8 White", "ADCOM X9 Black", "ADCOM X9 Red", "Adcom X10 Black", "Adcom X10 White", "Adcom X11 Black", "Adcom X12 Black", "Adcom X14 Black", "Adcom X14 Grey", "Adcom X28 Silver", "Alcatel 890D Silver", "Alcatel One Touch J636d+ Black", "Alcatel Onetouch Idol Mini 6012D", "Alcatel Onetouch Idol X+ Bluish Black, with 16 GB", "Alcatel Onetouch Idol X+ White, with 16 GB", "Apple iPhone 4 Black, with 16 GB", "Apple iPhone 4 Black, with 8 GB", "Apple iPhone 4 White, with 16 GB", "Apple iPhone 4 White, with 8 GB", "Apple iPhone 4S Black, with 8 GB", "Apple iPhone 4S White, with 8 GB", "Apple iPhone 5C 8 GB Blue, with 8 GB", "Apple iPhone 5C 8 GB Green, with 8 GB", "Apple iPhone 5C 8 GB Pink, with 8 GB", "Apple iPhone 5C 8 GB White, with 8 GB", "Apple iPhone 5C 8 GB Yellow, with 8 GB", "Apple iPhone 5C Blue, with 16 GB", "Apple iPhone 5C Blue, with 32 GB", "Apple iPhone 5C Green, with 16 GB", "Apple iPhone 5C Green, with 32GB", "Apple iPhone 5C Pink, with 16 GB", "Apple iPhone 5C Pink, with 32GB", "Apple iPhone 5C White, with 16 GB", "Apple iPhone 5C White, with 32GB", "Apple iPhone 5C Yellow, with 16 GB", "Apple iPhone 5C Yellow, with 32GB", "Apple iPhone 5S Gold, with 16 GB", "Apple iPhone 5S Gold, with 32 GB", "Apple iPhone 5S Gold, with 64 GB", "Apple iPhone 5S Silver, with 16 GB", "Apple iPhone 5S Silver, with 32 GB", "Apple iPhone 5S Silver, with 64 GB", "Apple iPhone 5S Space Grey, with 16 GB", "Apple iPhone 5S Space Grey, with 32 GB", "Apple iPhone 5S Space Grey, with 64 GB", "Arise Bingo AX111 Black", "Arise Imperia AX282 Black", "Arise Magnet AX251 Black", "Asus Zenfone 4 A400CG Black, with 8 GB", "Asus Zenfone 4 A400CG Blue, with 8 GB", "Asus Zenfone 4 A400CG Red, with 8 GB", "Asus Zenfone 4 A400CG White, with 8 GB", "Asus Zenfone 4 A400CG Yellow, with 8 GB", "Asus Zenfone 4 A450CG Black, with 8 GB", "Asus Zenfone 4 A450CG Solar Yellow, with 8 GB", "Asus Zenfone 4 A450CG White, with 8 GB", "Asus Zenfone 6 A600CG / A601CG Black, with 16 GB", "Asus Zenfone 6 A600CG / A601CG Red, with 16 GB", "Atom Supremus White", "Atom Ultimus White", "BLU B10 BLK Black", "BLU B10 JUMBO R Black", "BLU B10 JUMBO Y Black", "BLU B10 R Black", "BLU B10 Y Black", "BLU B10+ B Blue", "BLU B10+ O Orange", "BLU B10+ R Red", "BLU B10+ Y Yellow", "BLU B23 B Black", "BLU B23 G Black", "BLU B23 R Black", "BLU B23 Y Black", "BLU B306A BLK Black", "BLU B306A W White", "BLU B307 BLK Black", "BLU B307 W White", "BLU B309A W White", "BLU B41 BLK Grey", "BLU B41 Gry Black", "BQ K12 Grey", "BQ K15 Grey", "BQ K18 Blue", "BQ K26 Green", "BQ K27 Gold", "BQ K28 White", "BQ K29 Black", "BQ K50 Grey", "BQ K80 Blue", "BQ S35 Red", "BQ S36 Black", "BQ S37 Black", "BQ S37 White", "BQ S60 Black", "BSNL-Champion Champion Apna Phone SQ241 Power Black", "BSNL-Champion Champion My Phone 51 Black", "BSNL-Champion Champion My Phone 51 White", "BSNL-Champion DM6513 White", "BSNL-Champion Myphone 41 Black", "BSNL-Champion Pro SQ181 Black", "BSNL-Champion SM3513 Black", "BSNL-Champion SQ 181 power Black", "BSNL-Champion SQ 181 power White", "BSNL-Champion SQ 241 Sleek Black", "BSNL-Champion SQ 241 Sleek White", "BSNL-Champion SQ241 SQ241 Black", "BSNL-Champion SQ281 SQ281 Black", "Belkin Skype V1000 Black", "BlackBerry 9720 Black", "BlackBerry 9720 White", "BlackBerry Bold 9790 Pink", "BlackBerry Curve 3G 9300 Pink", "BlackBerry Curve 9220 Black", "BlackBerry Q10 Black", "BlackBerry Q10 White", "BlackBerry Torch 9810 White", "BlackBerry Torch 9810 Zinc Grey", "BlackBerry Torch 9860 Shadow Grey", "BlackBerry Z10 Charcoal Black", "BlackBerry Z10 Pure White", "BlackBerry Z3 Black, with 8 GB", "BlackBerry Z30 Black", "BlackBerry Z30 White", "Blackberry Curve 9320 Black", "Byond B50 Black", "Celkon A10 3G Campus Series Black", "Celkon A107+ Smart Phone White", "Celkon A112 Signature Swift Black", "Celkon A112 White", "Celkon A119Q A 119 Q Smart Phone Black", "Celkon C349* Black", "Celkon C5 Star White", "Celkon C56 Black", "Celkon C6* Black \u0026 Red", "Celkon C605 Black", "Celkon C7045 Black", "Celkon Campus A20 White", "Celkon Campus A225 White", "Celkon Campus A35K Blue", "Celkon Campus A40 Yellow", "Celkon Campus A42 Black", "Celkon Campus A43 Black", "Celkon Campus A66 Black", "Celkon Campus A66 White", "Celkon Campus A9Dual White \u0026 Black", "Celkon Campus Mini A350 White", "Celkon Campus Series A20 Smart Phone Black", "Celkon Celkon Campus Series A 63 Smart Phone Campus Series A63 Black", "Celkon Feature Phone C297 Black", "Celkon Feature Phone C297 White", "Celkon Feature Phone C9 Jumbo White", "Celkon Millennium Q44 Black", "Celkon Millennium Q455 Black", "Celkon Millennium Q455 Blue", "Celkon Millennium Q455 White", "Celkon Millennium Q470 White", "Celkon Signature 118 HD Black", "Celkon Signature A115 White", "Celkon Signature Two A500 Black", "DOMO nTice G12 Phablet Mobile Smartphone White", "Datawind PocketSurfer3G5", "Datawind PocketSurfer5 White", "Datawind PocketSurfer5X Black", "Dell Venue V03B Black", "Devante Boss 1 Black", "Devante Boss 1 White", "Devante Boss 2 Black", "Devante Boss 2 Blue", "Devante Boss 2 White", "Devante Dynamite White", "Devante Hero 1 Subway Series S1 Black", "Devante Hero 1 Subway Series S1 White", "Devante Thunder Black", "Digimac 3X Black", "Digimac 3X White", "Digimac EXI Black", "Digimac EXI White", "Digimac Fusion Black", "Digimac Fusion White", "Digimac VIVO Black", "Digimac VIVO White", "Forme C101 Black", "Forme Coke A1 Red", "Forme D516 Black", "Forme D516 Black \u0026 Red", "Forme D516 Champagne", "Forme D555+ Grey", "Forme D555+ Red", "Forme D556 Black \u0026 Red", "Forme D815 Black", "Forme D815 Red", "Forme Discovery P9 Black", "Forme Discovery P9 Blue", "Forme Discovery P9 plus Black", "Forme Discovery P9 plus Blue", "Forme Energy D9 Black", "Forme F10 Black \u0026 Red", "Forme F8+ Silver", "Forme Fantasy F10 Black", "Forme Fantasy F10 Red", "Forme Find F105 Red", "Forme Forever F8 Red", "Forme Forever F8 Silver", "Forme Hero Blue", "Forme Honey Hero Black", "Forme Hope H1 Black", "Forme Hope H1 Blue \u0026 Black", "Forme Inspire V8 Black", "Forme Inspire V8 Brown", "Forme Inspire V8 Silver", "Forme K1 Black \u0026 Red", "Forme King K1 Red", "Forme L100 White \u0026 Silver", "Forme L600 Red", "Forme L900 Red", "Forme L900 White", "Forme L900 White \u0026 Red", "Forme Love One Black", "Forme Love One Brown", "Forme Love One Red", "Forme M20 White", "Forme M60 Pink", "Forme M600 Red", "Forme M600 White", "Forme M660 Red", "Forme M660 White", "Forme M80 Red", "Forme M90 Black", "Forme Mini 5130 Black", "Forme Onion K806 Black", "Forme Onion K806 White", "Forme P9 Plus Black", "Forme Power One A60 Black", "Forme Power Two M22 Grey", "Forme Power Two M22 Red", "Forme Queen K08-grey Grey", "Forme Queen K08-red Red", "Forme Queen K08-white White", "Forme S10 Silver \u0026 Green", "Forme Summer S700 Pink", "Forme Summer S700 Purple", "Forme Summer S700 Red", "Forme Summer S700 White", "Forme Sunny S60 Black", "Forme Sunny S60 Blue", "Forme Sunny S60 Orange", "Forme Surprise P10 Black", "Forme Surprise S10 Green", "Forme Surprise S10 Red", "Forme Surprise S11 Black", "Forme Surprise S11 Red", "Forme T4 Silver", "Forme Teddy T2 Green", "Forme Teddy T2 White", "Forme Teddy T3 Black", "Forme Teddy T3 Red", "Forme Teddy T4 Green", "Forme Teddy T4 Silver", "Forme V8 White", "Forme Venus V11 Black", "Forme Venus V11 Red", "Forme W3 Gold", "Forme Winner W3 Blue \u0026 Silver", "Forme Winner W3 Gold", "Forme Winner W3 Grey", "Funtab Phablet Fone PHA6.4 White", "Gee Pee 3dh 4430 Black", "Gionee CTRL V5 White", "Gionee E7 Mini", "Gionee Elife E3 Black", "Gionee Elife E6 Black", "Gionee Elife E7 16 GB Black, with 16 GB", "Gionee Elife E7 16 GB White, with 16 GB", "Gionee Elife E7 32 GB Black, with 32 GB", "Gionee Elife E7 32 GB White, with 32 GB", "Gionee Elife S5.5 Black", "Gionee Elife S5.5 White", "Gionee G1 Black", "Gionee Gpad G3 White", "Gionee Gpad G4 Black", "Gionee Gpad G4 White", "Gionee Long L700 Black", "Gionee Long L700 Silver", "Gionee M2 Black", "Gionee M2 White", "Gionee P2 Black", "Gionee P2S Black", "Gionee P2S White", "Gionee Pioneer P3 Black", "Gionee Pioneer P3 White", "Gionee Pioneer P4 Black", "Gionee Pioneer P4 White", "Gionee Slim S80 Black", "Gionee Slim S80 Grey", "Gionee V5 Black", "Google Nexus 4 Black", "Google Nexus 4 White, with Headphone", "Google Nexus 5 Black, with 16 GB", "Google Nexus 5 Black, with 32 GB", "Google Nexus 5 White, with 16 GB", "Google Nexus 5 White, with 32 GB", "HP Slate 6 Voice Tab", "HTC 709D Desire 700 White", "HTC A620E 8S Fiesta Red", "HTC Desire 210 Dual SIM D210h Black", "HTC Desire 210 Dual SIM D210h White", "HTC Desire 310 Dual SIM Arctic White", "HTC Desire 310 Dual SIM Matte Blue", "HTC Desire 310 Flipcovers Blue", "HTC Desire 500 Glacier Blue", "HTC Desire 500 Glossy Black", "HTC Desire 500 Passion Red", "HTC Desire 516 Dark Grey", "HTC Desire 516 Grey", "HTC Desire 516 Pearl White", "HTC Desire 516 White", "HTC Desire 600 Stealth Black", "HTC Desire 600 White", "HTC Desire 600C Black, with Dual SIM", "HTC Desire 600C White, with Dual SIM", "HTC Desire 601 Black, with Dual SIM", "HTC Desire 616 Dual Sim Dark Gray", "HTC Desire 616 Dual Sim White", "HTC Desire 700 Black", "HTC Desire 816 Dark Grey", "HTC Desire 816 White", "HTC Desire SV Stealth Black", "HTC Desire SV Yellow", "HTC Desire T329D XC Black Stone", "HTC Desire T329D XC Fabulous White", "HTC Desire T329W X Dual SIM White, with Dual SIM", "HTC E8 Dual SIM White", "HTC ONE E8 M8Sd Red", "HTC One 802d Black, with Dual SIM", "HTC One 802d Silver, with Dual SIM", "HTC One E8", "HTC One M8 Amber Gold", "HTC One M8 Glacial Silver", "HTC One M8 Gunmetal Grey", "HTC One Max Silver White", "HTC One Mini Black", "HTC One Mini Blue", "HTC One V T320 Jupitor Rock", "HTC T327W Desire U DS White", "Haier C380 Black", "Haier C380 White", "Hitech Air A1 White", "Hitech Amaze S-800 Black", "Hitech Amaze S410 White", "Hitech F2i Blue", "Hitech G11 Black", "Hitech G15 Black", "Hitech G5 Black", "Hitech H2i Red", "Hitech HT-850 Black", "Hitech HT820 Black", "Hitech HT830 Grey", "Hitech HT880 Black", "Hitech Kick 515 Black", "Hitech Micra - 110 Black", "Hitech Micra 115 Black", "Hitech Micra 120 Black", "Hitech Micra 150 Black", "Hitech Pride 302 Black \u0026 Silver", "Hitech Pride 313 Black", "Hitech Pride 325 Black", "Hitech Rocket G3i Black", "Hitech S210 Amaze Black", "Hitech S230 Amaze Black", "Hitech S3003G White", "Hitech Super X-9 Black", "Hitech Supreme F3 Black", "Hitech Tiny X-100 Black", "Hitech X-101 Black", "Hitech X10 Grey", "Hitech Xpaly 250 Black", "Hitech Xpaly G3i+ Black", "Hitech Xplay 245 Black", "Hitech Youth HT-810i Black", "Hitech kick 525 Black", "Hotpary Elegant H2 White", "Huawei Ascend G6 Black", "Huawei Ascend G610 Black", "Huawei Ascend G610 White", "Huawei Ascend G700 White", "Huawei Ascend P6 White", "Huawei Ascend Y200 Black", "Huawei Ascend Y210D Black", "Huawei Ascend Y220 Black", "Huawei Ascend Y600", "Huawei G730 Black", "Huawei G730 White", "Huawei Honor 3C White", "Huawei Honor 3X White", "Huawei Y320 Black", "Huawei Y511 Black", "Huawei Y600 Black \u0026 Blue", "ICE D3 Xphone Limited Edition Pearl White", "ICE Xphone Xphone Pearl White", "Icon G8 Dual SIM Qwerty Mobile Black", "Icon G9 Dual SIM Qwerty Mobile Black", "Intex AQUA Marvel + Aqua Marvel + Grey", "Intex AQUA Marvel + Aqua Marvel + White", "Intex Alpha Black", "Intex Alpha Mobile Black \u0026 Red", "Intex Aqua 3 G Black", "Intex Aqua 3G Black", "Intex Aqua 3G White", "Intex Aqua Curve Black", "Intex Aqua Curve Red", "Intex Aqua HD Aqua HD White", "Intex Aqua I 5 HD Black", "Intex Aqua I15 White", "Intex Aqua I5 HD Black", "Intex Aqua I5 HD White", "Intex Aqua N-2 Black", "Intex Aqua N15 Black", "Intex Aqua N15 Blue", "Intex Aqua N15 White", "Intex Aqua N17 Black", "Intex Aqua N2 White", "Intex Aqua N4 Black", "Intex Aqua N8 White", "Intex Aqua Octa Black", "Intex Aqua Octa White", "Intex Aqua Qwerty Blue", "Intex Aqua Qwerty White", "Intex Aqua Style Black", "Intex Aqua Style Black \u0026 Silver", "Intex Aqua Style Pro Black", "Intex Aqua Style Pro Grey", "Intex Aqua Style White \u0026 Silver", "Intex Aqua Swadesh White Black", "Intex Aqua T3 Black \u0026 Blue", "Intex Aqua T3 Grey", "Intex Aqua T3 White \u0026 Silver", "Intex Aqua T4 Black", "Intex Aqua T4 Blue", "Intex Aqua Trendy White", "Intex Aqua Y 2 Black", "Intex Aqua Y2 White", "Intex Aqua i 5 mini White", "Intex Aqua i14 Blue", "Intex Aqua i15 Black", "Intex Aqua i15 Blue", "Intex Aqua i3 Black", "Intex Aqua i3 Blue", "Intex Aqua i5 Black", "Intex Aqua i5 Mini Black", "Intex Aura NX Black", "Intex Bravo 2.6 Grey", "Intex Cloud X11 White", "Intex Cloud X12 Black", "Intex Cloud X2 Cloud X2 White", "Intex Cloud X3 Plus Black", "Intex Cloud X3 Plus White", "Intex Cloud X5 Black", "Intex Cloud X5 White", "Intex Cloud Y1 Black", "Intex Cloud Y1 White", "Intex Cloud Y12 White", "Intex Cloud Y13 White", "Intex Cloud Y17 White", "Intex Cloud Y4 Black", "Intex Cloud Y7 Black", "Intex Cloud Y7 White", "Intex Cloud Z5 Black", "Intex Focus V Silver", "Intex Focus-v Grey", "Intex Force Black \u0026 Grey", "Intex Force Black \u0026 Red", "Intex Force White \u0026 Grey", "Intex GC5050 Blue", "Intex GC5050 Red", "Intex GC5050 Silver", "Intex Gsm Hero Silver", "Intex Hero Black", "Intex IN 2010 NANO2", "Intex Jazz Grey", "Intex Jszz Black", "Intex Kobra Silver", "Intex Kobra White", "Intex Mega 10 Black", "Intex Nano 2 Black \u0026 Red", "Intex Nano 2 Blue", "Intex Nano 2S Black", "Intex Nano Star Black", "Intex Nano Star Black \u0026 Red", "Intex Neo-Vi Black \u0026 Red", "Intex Neo-vi Plus Red", "Intex Nova Black", "Intex Nova Silver", "Intex Nova White", "Intex Plasma Black", "Intex Plasma White", "Intex Platinum 201 Black", "Intex Platinum 201 Mobile Silver", "Intex Platinum 201 White", "Intex Platinum A6 Black \u0026 Silver", "Intex Platinum A6 White", "Intex Platinum Matrix Black", "Intex Platinum Matrix White", "Intex Pride Black", "Intex Rock Star Black \u0026 Grey", "Intex Shine 1800 Black", "Intex Shine 1800 Blue", "Intex Shine 1800 Red", "Intex Slimzz Black", "Intex Slimzz Silver", "Intex Star One Black", "Intex Turbo N Grey", "Intex Yuvi LX Black", "Intex Yuvi Pro Grey", "JIVI Dual Sim/Dual Standby Gsm + Cdma GC 1209 Black and White", "Jivi C3i Black", "Jivi CG1335 Black", "Jivi JV C300 CDMA Mobile Black", "Jivi JV21 Black", "Jivi JV21 White", "Jivi Jv X3i Black", "Jivi Slim X48 Black", "Jivi X390 Black", "Jivi X426 Black", "Jivi X480 Black", "Jivi X660 Black", "Josh A2700 Black", "Josh A2700 Blue", "Josh A2700 White", "Josh A999 White", "Josh Feather Black", "Josh JB 63+ Red", "Josh JB 63+ White", "Josh JB007 Silver", "Josh JB007-S Brown", "Josh JM 2800 Black", "Josh JM 2800 Golden", "Josh JM2400 Black", "Josh JM2400-R Red", "Josh Thunder Grey", "Karbonn A1 Plus Super White", "Karbonn A1+ Duple Black", "Karbonn A1+ Duple White", "Karbonn A101 Black", "Karbonn A11+ Black", "Karbonn A119 Black", "Karbonn A119 White", "Karbonn A15 Plus Black", "Karbonn A19 Black Silver", "Karbonn A19 White Silver", "Karbonn A21+ Black", "Karbonn A21+ White", "Karbonn A25 Plus White", "Karbonn A35 Black Silver", "Karbonn A35 White and Silver", "Karbonn A51 Black", "Karbonn A51 White", "Karbonn A6 Black White", "Karbonn A90 Black \u0026 Silver", "Karbonn A90 White Silver", "Karbonn A90S Black", "Karbonn A91 White", "Karbonn A93 Black", "Karbonn A93 White", "Karbonn A99 Black", "Karbonn A99 Star Black \u0026 White", "Karbonn A99 White", "Karbonn A99i Black", "Karbonn A99i White", "Karbonn Flair K102+ Gold White", "Karbonn Jumbo K9 Black \u0026 Red", "Karbonn K-Phone 1 Black Blue", "Karbonn K-Phone 1 Black Brown", "Karbonn K-Phone 1 White Silver", "Karbonn K101* Black \u0026 Red", "Karbonn K105s Black \u0026 Red", "Karbonn K112 Black", "Karbonn K39 Black \u0026 Grey", "Karbonn K39 Black \u0026 Red", "Karbonn K52 Groovster Black \u0026 Silver", "Karbonn K57 Black", "Karbonn K57 Silver", "Karbonn K62+ White", "Karbonn K63+ Black", "Karbonn K63+ Silver", "Karbonn K9 Plus Black", "Karbonn K9 Plus White Silver", "Karbonn KC540 White", "Karbonn KT 52 Black", "Karbonn KT 52 White", "Karbonn Karbonn The Legend Phone Beauty At Its Best Black Black", "Karbonn Kochadaiiyaan The Legend 2.4 Black \u0026 Red", "Karbonn Kochadaiiyaan The Legend A36 Black \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A36 White \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A6 Plus Black \u0026 White", "Karbonn Kochadaiiyaan The Legend S5i White", "Karbonn Opium N7 Black", "Karbonn Opium N9 Black", "Karbonn Opium N9 White", "Karbonn SPY K595 Black", "Karbonn SPY K595 Grey", "Karbonn Smart A1* Black", "Karbonn Smart A10 Black", "Karbonn Smart A10 White", "Karbonn Smart A11 Star Black", "Karbonn Smart A11 Star White", "Karbonn Smart A111 White", "Karbonn Smart A12 Star Black \u0026 Silver", "Karbonn Smart A12 Star White \u0026 Gold", "Karbonn Smart A26 Metallic Black", "Karbonn Smart A26 White Silver", "Karbonn Smart A29 Black", "Karbonn Smart A29 White", "Karbonn Smart A4+ Black", "Karbonn Smart A4+ White", "Karbonn Smart A5* Black", "Karbonn Smart A50s Black", "Karbonn Smart A50s White", "Karbonn Smart A51 Lite White", "Karbonn Smart A51+ Black", "Karbonn Smart A51+ White", "Karbonn Smart A52 Black Silver", "Karbonn Smart A52 Plus Black \u0026 Gold", "Karbonn Smart A52 Plus White \u0026 Silver", "Karbonn Smart A52 White Silver", "Karbonn Smart A5i Black", "Karbonn Smart A5i White", "Karbonn Smart A92 Black Silver", "Karbonn Smart A92 White Silver", "Karbonn Sound Wave K451+ Black", "Karbonn Sound Wave K451+ Champ Gold", "Karbonn Sound Wave K451+ Silver", "Karbonn The Star K61 Black", "Karbonn Titanium Hexa", "Karbonn Titanium K900 Black", "Karbonn Titanium Octane Black", "Karbonn Titanium Octane Red", "Karbonn Titanium Octane White", "Karbonn Titanium S1 Plus Black", "Karbonn Titanium S1 Plus Orange", "Karbonn Titanium S1 Plus White", "Karbonn Titanium S19 White", "Karbonn Titanium S2 Plus Black", "Karbonn Titanium S3 Black", "Karbonn Titanium S3 White", "Karbonn Titanium S4 Black", "Karbonn Titanium S4 White", "Karbonn Titanium S5 Plus Deep Blue", "Karbonn Titanium S5 Plus Pearl White", "Karbonn Titanium S5i Dark Blue", "Karbonn Titanium S7 Black", "Karbonn Titanium S9 Lite Black", "Karbonn Titanium S9 Lite White", "Karbonn Titanium S9 Pearl White", "Karbonn Titanium S99 Black", "Karbonn Titanium S99 White", "Karbonn Titanium X White", "Kingbell Basic M24 Black", "Kingbell Basic M3 Pink", "LG A390 Silver", "LG Cookie Smart T 375 Black", "LG Cookie Snap GM360i with 2 GB Memory Card", "LG D686 Gold", "LG E420 Black", "LG E612 Black", "LG G Pro 2 D838 Titan", "LG G Pro 2 D838 White", "LG G Pro E988 Black", "LG G Pro Lite D686 Black", "LG G Pro Lite D686 Black Gold", "LG G Pro Lite D686 White", "LG G-Flex Titan Silver", "LG G2 32 GB Black, with 32 GB", "LG G2 32 GB Gold", "LG G2 32 GB White, with 32 GB", "LG G2 Black", "LG G2 Black Gold, with 16gb", "LG G2 D802T Black", "LG G2 D802T Gold", "LG G2 D802T White", "LG G2 White", "LG G3 D855 Black Gold, with 32 GB", "LG G3 D855 Gold", "LG G3 D855 Titan Titan", "LG G3 D855 Titan Titan, with 32 GB", "LG G3 D855 White", "LG L4 II Dual E445 Black", "LG L4 II Dual E445 White", "LG L60 Dual White", "LG L60 X-147 Black", "LG L70 Black", "LG L70 Dual", "LG L70 White", "LG L80 Black", "LG L80 Dual Black", "LG L80 Dual White", "LG L80 White", "LG L90 Black", "LG L90 Dual", "LG L90 White", "LG Optimus 3D Max P725 Black", "LG Optimus 4X HD P880 White", "LG Optimus Black P970 Black Titan", "LG Optimus G E975 Blue", "LG Optimus GT540", "LG Optimus Hub E510 Black", "LG Optimus L3 Dual E405 Black", "LG Optimus L3 Dual E405 White", "LG Optimus L3 II E425 Black", "LG Optimus L3 II E425 White", "LG Optimus L3 II E435 Black", "LG Optimus L3 II E435 White", "LG Optimus L5 Dual E615 Black", "LG Optimus L5 Dual E615 White", "LG Optimus L5 II Dual E455 Black", "LG Optimus L5 II Dual E455 White", "LG Optimus L5 II E450 Black", "LG Optimus L5 II E450 White", "LG Optimus L7 II P715 Black", "LG Optimus L7 II P715 White", "LG Optimus L7 P705 Black", "LG Optimus L9 P765 Black", "LG Optimus Net Dual Sim P698 Titanium", "LG Optimus Pro C660 Black", "LG Optimus Sol E730 Black", "LG Optimus VU P895 Black", "LG Optimus VU P895 White", "LG P520 Black, with 2 GB Micro SD Card", "LG T500 Black", "LG T515 Wine Red", "LG T585 Black", "LG T585 White", "Lava ARC 11i Black", "Lava ARC Lite Black \u0026 Red", "Lava Arc 111 Black \u0026 Yellow", "Lava Arc 111 Grey \u0026 Green", "Lava Arc 12i Black", "Lava Arc 12i Grey", "Lava Arc 1star Black \u0026 Red", "Lava Arc 22 Black", "Lava Arc 22 Yellow", "Lava C11 Grey", "Lava CG141 Black", "Lava Discover 128 Star White", "Lava Discover 135 White", "Lava Discover 136S Champagne", "Lava Discover Neo Black", "Lava Discover Neo Grey", "Lava Iris 300 Style Dark Blue", "Lava Iris 310 Style Brown", "Lava Iris 349i Black", "Lava Iris 350M Grey", "Lava Iris 354 White", "Lava Iris 354e White", "Lava Iris 360 Music Black", "Lava Iris 3G 412 Grey", "Lava Iris 402 Grey", "Lava Iris 402 White", "Lava Iris 402+ Ivory White", "Lava Iris 402e Grey", "Lava Iris 404e Black", "Lava Iris 405+ Black", "Lava Iris 405+ White", "Lava Iris 406Q Black", "Lava Iris 406Q White", "Lava Iris 408e Frosted Silver", "Lava Iris 415 Black", "Lava Iris 450 Color Plus Black \u0026 Blue", "Lava Iris 450 Color Plus White \u0026 Blue", "Lava Iris 450 White \u0026 Blue", "Lava Iris 456 Black", "Lava Iris 458q Grey", "Lava Iris 504Q+ Gray", "Lava Iris 504Q+ White", "Lava Iris 550Q Black", "Lava Iris Pro 20 Metal Blue", "Lava Iris Pro 30 Grey", "Lava Iris X1 with 4 GB ROM Black", "Lava Iris X1 with 4 GB ROM White", "Lava Iris X1 with 8 GB ROM Black, with 8 GB ROM", "Lava Iris X1 with 8 GB ROM White, with 8 GB ROM", "Lava KKT 27i Blue", "Lava KKT 27i Grey", "Lava KKT 27i Silver", "Lava KKT 27s Grey", "Lava KKT 34i Black \u0026 Silver", "Lava KKT 34star Black \u0026 Red", "Lava KKT 40 Mini Blue", "Lava KKT 42 Black", "Lava KKT Uno Grey", "Lava Magnum X604 White", "Lava Spark 10 Black \u0026 Red", "Lava Spark 245e Black \u0026 Grey", "Lemon B149 Black", "Lemon B159 Multimedia Big Battery Black", "Lemon B169 Multimedia Big Battery Grey", "Lemon B229 Multimedia Big Battery Black", "Lemon B319I Multimedia Big Battery Black", "Lemon B579 Multimedia Big Battery with Box Speaker Black", "Lenovo A269i Black", "Lenovo A369i Black", "Lenovo A390 Black", "Lenovo A390 White", "Lenovo A516 Grey", "Lenovo A516 White", "Lenovo A526 Aurora Blue", "Lenovo A680 Black", "Lenovo A680 White", "Lenovo A800 Black", "Lenovo A850 Black", "Lenovo A850 White", "Lenovo A859 White", "Lenovo IdeaPhone S890 White", "Lenovo Ideaphone A706 Black", "Lenovo Ideaphone A706 White", "Lenovo Ideaphone S920 8 GB White, with 8 GB", "Lenovo K860 Black", "Lenovo K900 Steel Grey", "Lenovo P780 Deep Black", "Lenovo P780 Deep Black, with 8 GB", "Lenovo Reliance CDMA GSM 2 SIM Android SmartPhone A600E Black", "Lenovo S650 Silver", "Lenovo S660 Titanium", "Lenovo S720 White", "Lenovo S820 Red", "Lenovo S820 Red, with 8 GB", "Lenovo S850", "Lenovo S860 Titanium", "Lenovo S880 White", "Lenovo S920 Blue", "Lenovo S920 White", "Lenovo S930 Silver", "Lenovo Vibe X Silver", "Lenovo Vibe Z K910 Silver", "Lenovo Vibe Z K910 Titanium", "MTS Blaze 4", "MTS Blaze 4.5", "MTS Blaze 5.0 White", "MTS Dual CG 131", "MTS Dual CG 141", "MTS Rockstar M131", "MTS Rockstar M141 Red", "Magicon Senior Duo White", "Maxx AX3 Black", "Maxx AX8 Black", "Maxx GenxDroid7 - AX352 Black", "Maxx GenxDroid7 - AX407 Black", "Maxx MSD7 Smarty Black", "Maxx MX426 - Supremo Red", "Maxx Note I AX8 Black", "Maxx Race AX8 Black", "Maxx Race AX9Z White", "Maxx Zippy MT616 Coffee", "Micromax A069 Grey", "Micromax A069 White", "Micromax A069 Yellow", "Micromax A091 C Engage Grey", "Micromax A093 White \u0026 Gold", "Micromax Aisha A52 White", "Micromax Bling 3 A86 White", "Micromax Bolt A068 Blue", "Micromax Bolt A068 White", "Micromax Bolt A075 Blue", "Micromax Bolt A089 Black", "Micromax Bolt A089 White", "Micromax Bolt A24 Champange", "Micromax Bolt A36 Black", "Micromax Bolt A37 Black", "Micromax Bolt A37B Black", "Micromax Bolt A46 Black", "Micromax Bolt A47 Black", "Micromax Bolt A58 Black", "Micromax Bolt A58 Red", "Micromax Bolt A59 Grey", "Micromax Bolt A61 Grey", "Micromax Bolt A62 Black", "Micromax Bolt A62 White", "Micromax Bolt A66 Black", "Micromax Bolt A67 Black", "Micromax Bolt A67 White", "Micromax Bolt A69", "Micromax Bolt A71 Black", "Micromax Bolt A71 White", "Micromax Bolt GC232 Black \u0026 Silver", "Micromax Bolt X101 White", "Micromax Bolt X287 Grey", "Micromax C210 White", "Micromax CDMA C200 Black \u0026 White", "Micromax CG666 Black \u0026 Grey", "Micromax CG666 White", "Micromax Canvas 2 Colors A120 with 4 GB ROM Grey", "Micromax Canvas 2 Colors A120 with 4 GB ROM White", "Micromax Canvas 2 Colors A120 with 8 GB ROM Grey", "Micromax Canvas 2.2 A114 Black", "Micromax Canvas 2.2 A114 White", "Micromax Canvas 4 A210 Grey", "Micromax Canvas Blaze HD EG116 Black", "Micromax Canvas Blaze MT500", "Micromax Canvas Doodle 2 A240 Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM White", "Micromax Canvas Doodle 3 A102 with 512 MB RAM Blue", "Micromax Canvas Doodle 3 A102 with 512 MB RAM White", "Micromax Canvas Doodle A111 White", "Micromax Canvas Duet AE90 Black", "Micromax Canvas Ego A113 Grey", "Micromax Canvas Elanza 2 A121 Black", "Micromax Canvas Elanza A93 Black Silver", "Micromax Canvas Elanza A93 Blue \u0026 Grey", "Micromax Canvas Elanza A93 Coffee", "Micromax Canvas Entice A105 Grey", "Micromax Canvas Fire A093 Black \u0026 Gold", "Micromax Canvas Fire A104 Black Gold", "Micromax Canvas Fun A63 Blue", "Micromax Canvas Fun A63 Yellow", "Micromax Canvas Fun A76 Black", "Micromax Canvas Gold A300 Black Gold", "Micromax Canvas Gold A300 White Gold", "Micromax Canvas HD Plus A190 Black", "Micromax Canvas Juice A177 Black", "Micromax Canvas Juice A77 White", "Micromax Canvas Knight A350 Black", "Micromax Canvas Knight A350 Black \u0026 Gold", "Micromax Canvas Knight A350 White \u0026 Gold", "Micromax Canvas Knight Cameo A290 White \u0026 Gold", "Micromax Canvas L A108 Blue", "Micromax Canvas Magnus A117 Blue", "Micromax Canvas Music A88 Black", "Micromax Canvas Music A88 White", "Micromax Canvas Power A96 Black", "Micromax Canvas Turbo A250 White", "Micromax Canvas Turbo Mini A200 Black", "Micromax Canvas Turbo Mini A200 White", "Micromax Canvas Win W121", "Micromax Canvas XL A119 White", "Micromax Canvas XL2 A109 White", "Micromax EG111 Black", "Micromax Fire 2 A104 White", "Micromax GC222 Black", "Micromax GC222 White", "Micromax GC666 Black \u0026 Grey", "Micromax Knight Cameo A290 White", "Micromax MAd A94 Grey", "Micromax Ninja A91 Black", "Micromax Rockstar C192 Black", "Micromax Smarty 3.0 A30 Black", "Micromax Smarty 4.3 A65 White", "Micromax Unite 2 A106 with 4 GB ROM Green", "Micromax Unite 2 A106 with 4 GB ROM Grey", "Micromax Unite 2 A106 with 4 GB ROM Red", "Micromax Unite 2 A106 with 4 GB ROM White", "Micromax Unite 2 A106 with 8 GB ROM Grey, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM Red, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM White, with 8 GB ROM", "Micromax Unite A092 Black", "Micromax Unite A092 Grey", "Micromax Unite A092 Red", "Micromax Unite A092 White", "Micromax Unite A092 Yellow", "Micromax X084 Black \u0026 Red", "Micromax X084 White Silver", "Micromax X085 Black \u0026 Red", "Micromax X086 White", "Micromax X088 Black \u0026 Red", "Micromax X088 Black \u0026 Silver", "Micromax X089 Black", "Micromax X096 Black", "Micromax X096 White", "Micromax X097 Black", "Micromax X098 Grey", "Micromax X098 Red", "Micromax X101i White", "Micromax X101i Yellow", "Micromax X103i White", "Micromax X103i Yellow", "Micromax X247 Black", "Micromax X249 Black", "Micromax X251 Grey", "Micromax X253 Black", "Micromax X254 Grey", "Micromax X258 Black", "Micromax X267 Black", "Micromax X267 White", "Micromax X279i Grey", "Micromax X281 Grey", "Micromax X282 Grey", "Micromax X325 Grey", "Micromax X328 Grey", "Micromax X329 Black", "Micromax X337 Grey", "Micromax X351 Black Silver", "Micromax X367 Grey", "Micromax X44 Pearl White", "Micromax X455i White", "Micromax X55 Coffee", "Moto E Black", "Moto E White", "Moto X 16 GB Bamboo", "Moto X 16 GB Black", "Moto X 16 GB Red", "Moto X 16 GB Teak", "Moto X 16 GB Walnut", "Moto X 16 GB White", "Mtech A6 Infinity Black", "Mtech A6 Infinity White", "Mtech Fusion Black", "Mtech Fusion Blue", "Mtech G 14 Black", "Mtech G22 Black", "Mtech G22 White", "Mtech G4 Black", "Mtech Jazz Black", "Mtech Jazz White", "Mtech L6 Black", "Mtech L6 Blue", "Mtech L6 Brown", "Mtech Lotus Black", "Mtech Opal 3G Black \u0026 White", "Mtech Pride Blue", "Mtech Pride Red", "Mtech Rock Black", "Mtech Sharp Black", "Mtech Sharp Cyan", "Mtech Sharp Golden", "Mtech Spark Black", "Mtech Spark Black \u0026 White", "Mtech Spark Blue", "Mtech Touch Opal PRO Grey", "Mtech Touch Opal PRO White", "Mtech V22 Black", "Mtech V22 White", "Nokia 105 Black", "Nokia 105 Cyan", "Nokia 106 Black", "Nokia 106 Red", "Nokia 106 White", "Nokia 107 Black", "Nokia 107 Red", "Nokia 107 White", "Nokia 108 Black", "Nokia 108 Cyan", "Nokia 108 Red", "Nokia 108 White", "Nokia 108 Yellow", "Nokia 112 Red", "Nokia 112 White", "Nokia 114 Black", "Nokia 114 Cyan", "Nokia 206 Black, with Dual SIM", "Nokia 206 Cyan, with Dual SIM", "Nokia 206 White, with Dual SIM", "Nokia 208DS Black, with Dual SIM", "Nokia 208DS Red, with Dual SIM", "Nokia 220 Black", "Nokia 220 Red", "Nokia 220 White", "Nokia 220 Yellow", "Nokia 225 Black", "Nokia 225 Bright Red", "Nokia 225 Bright Yellow", "Nokia 225 White", "Nokia 301 Black", "Nokia 301 White", "Nokia 515 Black", "Nokia 515 White", "Nokia Asha 210 Black", "Nokia Asha 210 Cyan", "Nokia Asha 210 Yellow", "Nokia Asha 230 Black", "Nokia Asha 230 Bright Red", "Nokia Asha 230 White", "Nokia Asha 305 Dark Grey", "Nokia Asha 305 Mid Blue", "Nokia Asha 305 Silver White", "Nokia Asha 308 Golden Light", "Nokia Asha 310 White", "Nokia Asha 311 Dark Grey", "Nokia Asha 311 Sand White", "Nokia Asha 500 Black", "Nokia Asha 500 Bright Red", "Nokia Asha 500 White", "Nokia Asha 500 Yellow", "Nokia Asha 501 Black", "Nokia Asha 501 Bright Red", "Nokia Asha 501 White", "Nokia Asha 501 Yellow", "Nokia Asha 502 Black", "Nokia Asha 502 Bright Red", "Nokia Asha 502 White", "Nokia Asha 502 Yellow", "Nokia Asha 503 Black", "Nokia Asha 503 Bright Red", "Nokia Asha 503 White", "Nokia Asha 503 Yellow", "Nokia Lumia 1320 Black", "Nokia Lumia 1320 Orange", "Nokia Lumia 1320 White", "Nokia Lumia 1320 Yellow", "Nokia Lumia 1520 Black", "Nokia Lumia 1520 Red", "Nokia Lumia 1520 White", "Nokia Lumia 1520 Yellow", "Nokia Lumia 520 Black", "Nokia Lumia 520 Cyan", "Nokia Lumia 520 Red", "Nokia Lumia 520 White", "Nokia Lumia 520 Yellow", "Nokia Lumia 525 Black", "Nokia Lumia 525 Orange", "Nokia Lumia 525 White", "Nokia Lumia 525 Yellow", "Nokia Lumia 530 Dual SIM Bright Orange", "Nokia Lumia 530 Dual SIM Dark Grey", "Nokia Lumia 530 Dual SIM White", "Nokia Lumia 610 Cyan", "Nokia Lumia 610 White", "Nokia Lumia 620 Black", "Nokia Lumia 620 White", "Nokia Lumia 620 Yellow", "Nokia Lumia 625 Black", "Nokia Lumia 625 Green", "Nokia Lumia 625 Orange", "Nokia Lumia 625 White", "Nokia Lumia 625 Yellow", "Nokia Lumia 630 Dual SIM Black", "Nokia Lumia 630 Dual SIM Bright Green", "Nokia Lumia 630 Dual SIM Bright Orange", "Nokia Lumia 630 Dual SIM Bright Yellow", "Nokia Lumia 630 Dual SIM White", "Nokia Lumia 630 Single SIM Black", "Nokia Lumia 630 Single SIM Bright Green", "Nokia Lumia 630 Single SIM Bright Orange", "Nokia Lumia 630 Single SIM Bright Yellow", "Nokia Lumia 630 Single SIM White", "Nokia Lumia 920 White", "Nokia Lumia 925 Black", "Nokia Lumia 925 Grey", "Nokia Lumia 925 White", "Nokia X Black", "Nokia X Bright Green", "Nokia X Bright Red", "Nokia X Cyan", "Nokia X White", "Nokia X Yellow", "Nokia X+ Black", "Nokia X+ Bright Green", "Nokia X+ Yellow", "Nokia XL Black", "Nokia XL Bright Green", "Nokia XL Bright Orange", "Nokia XL Bright Yellow", "Nokia XL Cyan", "Nokia XL White", "Nuclear SX 5.3i Smartphone Black", "OPPO Find 5 Mini R827 Black", "OPPO Find 5 Mini R827 White", "OPPO Find 7 X9076 Black", "OPPO Find 7 X9076 White", "OPPO Find 7a X9006 Black", "OPPO Find 7a X9006 White", "OPPO Joy R1001 Black", "OPPO Joy R1001 White", "OPPO N1 Mini Lemon", "OPPO N1 Mini Mint", "OPPO N1 Mini White", "OPPO N1 White", "OPPO Neo 3 R831K Grey", "OPPO Neo 3 R831K White", "OPPO R1 829 Black", "OPPO R1 829 White", "OPPO Yoyo R2001 Black", "OPPO Yoyo R2001 White", "Olive V-C2130 Black", "Onida G Series G180 Black", "Onida G Series G181 Black \u0026 Red", "Onida G007S Black", "Onida G182 Black", "Onida G183 Black \u0026 Red", "Onida G183 Multicolor", "Onida G242 Black \u0026 Red", "Onida G640A Grey \u0026 Silver", "Onida i011 Black", "Onida i011 White", "Onida i099 Black", "Onida i666 W4413 White", "Onida i666 White", "Onida i777 W4213 White", "Panasonic Eluga A White", "Panasonic Eluga U Black", "Panasonic Eluga U White", "Panasonic GD 28 Black", "Panasonic GD21 Grey", "Panasonic GD31 Black", "Panasonic GD31 White", "Panasonic P11 with Changeable Back Covers", "Panasonic P31 Midnight Blue", "Panasonic P31 Pure White", "Panasonic P41 Black", "Panasonic P51 Black", "Panasonic P51 White", "Panasonic P61 Black", "Panasonic P61 White", "Panasonic P81 Black", "Panasonic T11 White", "Panasonic T21", "Panasonic T31 Black", "Panasonic T31 White", "Panasonic T41 Black", "Panasonic T41 White", "Rage Ace_Black Red", "Rage Ace_Blue Black", "Rage Ace_Green Black", "Rage Ace_White White", "Rage Duke_Green Green", "Rage Glory_Black Silver", "Rage Hero Black \u0026 Grey", "Rage Hero Black \u0026 Red", "Rage Hero White \u0026 Blue", "Rage Magic-50 Black", "Rage Magic-50 White", "Rage Minni_White White", "Rage OPS 35g Blue", "Rage OPS 60dn White", "Rage OPS 80 White", "Rage OPS 80d Black", "Rage OPS 80d White", "Rage OPS 80q Black", "Rage Ps16 Black \u0026 Silver", "Rage Ps16 White \u0026 Silver", "Rage Ps20 White \u0026 Red", "Rage Silk_Blue Black", "Rage Silk_Golden Black", "Rage Storm_Blue Blue", "Rage Storm_White White", "Rage Ultra Black", "Rage Vega White", "Salora SM204 Red", "Salora SM508 Blue \u0026 Black", "Salora SM601 Black \u0026 Gold", "Samsung E2252 Metallic Silver", "Samsung E2252 Pure White", "Samsung G350 White", "Samsung GT 1200 R/I/M", "Samsung Galaxy Ace NXT-G313H White", "Samsung Galaxy Core 2 SM-G355H Black", "Samsung Galaxy Core 2 SM-G355H White", "Samsung Galaxy Core I8262 Chic White", "Samsung Galaxy Golden I9230 Champagne Gold", "Samsung Galaxy Grand 2 Black", "Samsung Galaxy Grand 2 White", "Samsung Galaxy Grand Duos I9082 Elegant White, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Duos I9082 Metallic Blue, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Neo GT-I9060 Midnight Black", "Samsung Galaxy Grand Neo GT-I9060 White", "Samsung Galaxy Mega 5.8 I9152 White", "Samsung Galaxy Note 2 N7100 Marble White", "Samsung Galaxy Note 2 N7100 Titanium Grey", "Samsung Galaxy Note 3 N9000 Blush Pink", "Samsung Galaxy Note 3 N9000 Classic White", "Samsung Galaxy Note 3 N9000 Jet Black", "Samsung Galaxy Note 3 Neo Black", "Samsung Galaxy Note 3 Neo White", "Samsung Galaxy S Duos 2 S7582 Black", "Samsung Galaxy S Duos 2 S7582 Pure White", "Samsung Galaxy S3 Marble White, with 16GB", "Samsung Galaxy S3 Neo GT-I9300I Blue", "Samsung Galaxy S3 Neo GT-I9300I Marble White", "Samsung Galaxy S4 I9500 Black Mist", "Samsung Galaxy S4 I9500 Deep Black", "Samsung Galaxy S4 I9500 White Frost", "Samsung Galaxy S4 Mini I9192 Black Mist", "Samsung Galaxy S4 Mini I9192 White Frost", "Samsung Galaxy S4 Zoom SM-C1010 White", "Samsung Galaxy S5 Charcoal Black", "Samsung Galaxy S5 Copper Gold", "Samsung Galaxy S5 Electric Blue", "Samsung Galaxy S5 Shimmery White", "Samsung Galaxy Star Pro S7262 Midnight Black", "Samsung Galaxy Star Pro S7262 White", "Samsung Galaxy Star S5282 Ceramic White", "Samsung Galaxy Star S5282 Noble Black", "Samsung Galaxy Star S5282 Silver", "Samsung Galaxy Trend S7392 Ceramic White, with 4 GB", "Samsung Galaxy Trend S7392 Midnight Black", "Samsung Galaxy Y S5360 Pure White", "Samsung Guru 1200 Black", "Samsung Guru 1200 Indigo Blue", "Samsung Guru 1200 White", "Samsung Guru E1207T Black", "Samsung I8552 - Galaxy Grand Quattro Ceramic White", "Samsung I8552 - Galaxy Grand Quattro Titan Gray", "Samsung Keystone 2 E1207Y Black", "Samsung Metro DUOS C3322 Deep Black", "Samsung Omnia M S7530 Deep Gray", "Samsung S6812 - Galaxy Fame Metallic Blue", "Samsung S7262 Wine Red", "Sansui SA40 Black", "Sansui SA50 Plus Grey", "Simmtronics Xpad M1 Black", "Simmtronics Xpad Q1 Black", "Simmtronics Xpad Q4", "Simmtronics Xpad Q4 Black", "Simmtronics Xpad Q5 Black", "Sony Xperia C Black", "Sony Xperia C Purple", "Sony Xperia C White", "Sony Xperia C3 Black", "Sony Xperia C3 White", "Sony Xperia E Black", "Sony Xperia E Dual Champagne", "Sony Xperia E White", "Sony Xperia E1 Black", "Sony Xperia E1 Dual Black", "Sony Xperia E1 Dual Purple", "Sony Xperia E1 Dual White", "Sony Xperia E1 Purple", "Sony Xperia E1 White", "Sony Xperia Go Warm Yellow", "Sony Xperia L Rose Red", "Sony Xperia L Starry Black", "Sony Xperia M Black", "Sony Xperia M Dual Black", "Sony Xperia M Dual Purple", "Sony Xperia M Dual White", "Sony Xperia M Purple", "Sony Xperia M White", "Sony Xperia M2 Dual Black", "Sony Xperia M2 Dual Purple", "Sony Xperia M2 Dual White", "Sony Xperia Miro Black", "Sony Xperia Miro White with Silver Strip", "Sony Xperia Neo L Glossy Black", "Sony Xperia P Black", "Sony Xperia P Red", "Sony Xperia P Silver", "Sony Xperia SP Black", "Sony Xperia SP Red", "Sony Xperia SP White", "Sony Xperia T2 Ultra Black", "Sony Xperia T2 Ultra Purple", "Sony Xperia T2 Ultra White", "Sony Xperia T3 Black", "Sony Xperia T3 Purple", "Sony Xperia T3 White", "Sony Xperia Tipo Classic White", "Sony Xperia Tipo Dual Classic Silver", "Sony Xperia Z Black", "Sony Xperia Z Purple", "Sony Xperia Z Ultra Black", "Sony Xperia Z Ultra Purple", "Sony Xperia Z Ultra White", "Sony Xperia Z White", "Sony Xperia Z1 Black", "Sony Xperia Z1 Compact Black", "Sony Xperia Z1 Compact Lime", "Sony Xperia Z1 Compact Pink", "Sony Xperia Z1 Compact White", "Sony Xperia Z1 Purple", "Sony Xperia Z1 White", "Sony Xperia Z2 Black", "Sony Xperia Z2 Purple", "Sony Xperia Z2 White", "Sony Xperia ZR White", "Spice Boss Champion 2 M-5008 Black", "Spice Boss Chocolate M-5373 Black", "Spice Boss Delite M-5162 White", "Spice Boss Link M-5621 Black", "Spice Boss M-5470 Grey", "Spice Boss Slender 2 M-5404 White", "Spice Boss Slender M-5371", "Spice Boss Trendy 4 M-5004 Black", "Spice Boss Trendy 5 M-5032 White", "Spice Boss Trio M-5025 Black", "Spice Buddy N-300 Midnight Black", "Spice Coolpad 2 Mi-496 White", "Spice Flo Rainbow M-6111", "Spice Flo Sleek M-5915", "Spice M-5415 Black", "Spice Smart Flo Edge Mi-349 White", "Spice Smart Flo Mettle 3.5X Mi-356 White", "Spice Smart Flo Mettle 4X Mi-426 White", "Spice Smart Flo Mettle 5X Mi-504 Black", "Spice Smart Flo Mettle 5X Mi-504 White", "Spice Smart Flo Pace 3 Mi-502n White", "Spice Smart Flo Pace Mi-422 White", "Spice Smart Flo Poise Mi-451", "Spice Stellar 360", "Spice Stellar 361 Black", "Spice Stellar 361 White", "Spice Stellar 445 Black", "Spice Stellar 497 White", "Spice Stellar 506 Titanium Grey", "Spice Stellar 509", "Spice Stellar 520 Red", "Spice Stellar 520 Yellow", "Spice Stellar Glamor Mi-436", "Spice Stellar Glide Mi-438 Silver", "Spice Stellar Horizon Pro Mi-505 White", "Spice Stellar Mettle Icon Mi-506 Silver", "Spice Stellar Nhance 2 Mi-437", "Spice Stellar Pinnacle Pro Mi-535 Brown", "Spice Stellar Virtuoso Pro Mi-491 Black", "Spice Steller Virtuoso Pro+ Mi-492 White", "Swingtel Mini SX3 White", "Swingtel SW27 Black", "Swingtel SW27 White", "Swingtel SW30 Black", "Swingtel SW30 Silver", "Swingtel SW30 White", "Swingtel SW50+ Black", "Swingtel SW50+ Red", "Swingtel Superb White", "Swingtel Tigertab White, Red, Grey", "Swipe Fablet F2 White", "Swipe Konnect 5.0 Black", "Swipe Konnect 5.0 White", "Swipe Sense Black", "Swipe Sonic Black", "TVC Android 2.2 Smartphone Black", "Trio T2020L Black \u0026 Blue", "Trio T2020L Black \u0026 Grey", "Trio T2020L White \u0026 Blue", "Trio T2020XL Black \u0026 Blue", "Trio T2020XL Black \u0026 Gold", "Trio T2020XL Black White", "Trio T2424 Black \u0026 Green", "Trio T2424 Black \u0026 Red", "Trio T2424 White \u0026 Blue", "Trio T2424XL Black \u0026 Blue", "Trio T2424n Black \u0026 Blue", "Trio T2424n Black White", "Trio T2626 Black", "Trio T2626 White \u0026 Blue", "Trio T2626 White \u0026 Yellow", "Trio T2828 Black \u0026 Grey", "Trio T2828 Black White", "V3 Bizz GQ225 Grey", "Videocon A 54 White", "Videocon A 55q HD Black", "Videocon A15 Black", "Videocon A15 White Chrome", "Videocon A16 Black", "Videocon A16 White", "Videocon A42 Black", "Videocon A48 White", "Videocon A52 White", "Videocon A53 White Chrome", "Videocon A55 HD Black \u0026 Silver", "Videocon A55HD White", "Videocon Dost V1539 N Black Silver", "Videocon Dost V1615 Black", "Videocon Dost V1615 Silver", "Videocon V1508 Black", "Videocon V1544 Black \u0026 Silver", "Videocon vphone Gold", "Videocon vphone White", "Vox Kick 5 Black", "Vox Kick 5 White", "Vox V-3100 Black", "Vox V-3100 White", "Wham W20i Black", "Wham W24i Black", "Wham W26i Black", "Wynncom W101 Black", "Wynncom WYNNW412 Black", "XElectron AN1 Black", "XElectron BluEye Black", "XElectron M007 Black", "XElectron M998 Black", "XElectron N100 Black", "XElectron X1 White", "XElectron X1Black Black", "XOLO 8X-1000 Black", "XOLO A500 Club Black", "XOLO A500 Club White", "XOLO A500S Black", "XOLO A500S IPS Black", "XOLO A500S IPS Green", "XOLO A500S IPS Red", "XOLO A500S White", "XOLO A500s Lite Black", "XOLO A500s Lite White", "XOLO A550S IPS Black", "XOLO A600 Black", "XOLO A600 Blue", "XOLO A600 White", "XOLO A600 Yellow", "XOLO A700S Black", "XOLO LT900 Black", "XOLO Opus 2 Q1000 Black", "XOLO Play 6X-1000 Black", "XOLO Play 6X-1000 White", "XOLO Play Black", "XOLO Q1000 Black", "XOLO Q1000 Opus Black", "XOLO Q1000 Opus White", "XOLO Q1000 White", "XOLO Q1000S Black", "XOLO Q1000S Plus Black", "XOLO Q1010 White", "XOLO Q1010i Black", "XOLO Q1010i Coffee Brown", "XOLO Q1010i White", "XOLO Q1011 Black", "XOLO Q1011 White", "XOLO Q1100 Black", "XOLO Q1200 Black", "XOLO Q1200 White", "XOLO Q2000 White", "XOLO Q2000L White", "XOLO Q2500 Black", "XOLO Q3000 Black", "XOLO Q3000 White", "XOLO Q500S IPS Black", "XOLO Q500S IPS Green", "XOLO Q500S IPS Red", "XOLO Q600 White", "XOLO Q600S Black", "XOLO Q600S White", "XOLO Q700S Gold", "XOLO Q700S Plus Gold", "XOLO Q700S Silver", "XOLO Q700i Black", "XOLO Q900 White", "XOLO Q900S Black", "XOLO Q900T", "XOLO Win Q900s Black", "XOLO X1000 Black", "Y King Y 10 Black", "Y King Y 10 White", "Y King Y 20 Black", "Y King Y 30 Black", "Y King Y 30 White", "ZTE Blade C V807 Black", "ZTE Blade L V887", "ZTE Grand X Quad Lite Blue", "ZTE Grand X Quad Lite White", "ZTE Reliance d286 Black", "ZTE Reliance d286 White", "ZTE S183Reliance CDMA Only Black", "Zen 303 Power Black", "Zen 306 Ultrafone 306 Play Black \u0026 Red", "Zen 701 Amaze 701 Full Hd Black", "Zen P36 Black", "Zen U 504 B Black", "Zen U 504 W White", "Zen Ultrafone 502qHD Black", "Zook Boss Black", "Zook Brave Brown", "Zook Brilliant Grey", "Zook IMAX Blue", "Zook Iconic Black", "Zook Iconic Gold", "Zook Ideal Black", "Zook Ideal Gold", "Zook Keypad Sliver", "Zook Keypad White", "Zync Cloud Z401", "Zync X108 White", "Zync X207 Black", "iBall 4PIPS Gem Black", "iBall Andi 3.5 Classique With 1.3 Ghz Processor White", "iBall Andi 4.5 2G Grey", "iBall Andi 4.5 2G Ripple White", "iBall Andi 4.5 3G Ripple White", "iBall Andi 4.5 3G Wine \u0026 Gunmetal", "iBall Andi 4.5D Royale", "iBall Andi 4.7G Cobalt", "iBall Andi 5-M8 Black", "iBall Andi 5.5N2 Quadro", "iBall Andi 5K Sparkle White White", "iBall Andi 5K Sparkle Wine Special Wine", "iBall Andi 5T Cobalt 2", "iBall Andi Uddaan", "iBall Andi3.5kke Genius Black", "iBall Andi3.5kke Genius White", "iBall Andi3.5kke Winner Black", "iBall Andi3.5kke Winner White", "iBall Andi4 B2 Black", "iBall Andi4 Gem Black", "iBall Andi4 Gem White", "iBall Andi4 Velvet Black", "iBall Andi4 Velvet White", "iBall Andi4.5P Glitter White", "iBall Andi4.5P Glitter Yellow", "iBall Andi4.5Q White", "iBall Andi4.5d Royale White", "iBall Andi5-E7 Grey", "iBall IPS Tiger Andi4 Royal Blue", "iBall Iball Vogue 2.8A Slim Bar Design White White", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Black", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Yellow", "iBall King1.8D White", "iBall Senior Aasaan2 White", "iBall Shaan Fab2.4V8 Black \u0026 Blue", "iBall Shaan Fab2.4V8 Black \u0026 Yellow", "iBall Vogue 1.8-KK18 Black", "iBall Vogue 1.8-KK7 Yellow", "iBall Vogue 2.4 kk1 Grey", "iBall Vogue2.4e Black", "iBall iBall Andi 3.5kke Glory Special Wine", "iBall iBall Vogue 2.8A Slim Bar Design Grey Grey"]

    $scope.pricedivisions = [
        {
            price: "Rs. 2000 and below"
        },
        {
            price: "Rs 2001 - 5000"
        },
        {
            price: "Rs 5001 - 10000"
        },
        {
            price: "Rs 10001 - 18000"
        },
        {
            price: "Rs 18001 - 25000"
        },
        {
            price: "Rs 25001 - 35000"
        },
        {
            price: "Rs 35001 and above"
        }
    ];


    // watch divisions for changes
    $scope.$watch('divisions|filter:{selected:true}', function (nv) {
        $scope.tradeshow.Divisions = nv.map(function (division) {
            //alert(division.brand);
            console.log({name: division.brand});
            return {name: division.brand};
        });

        var display = 0;
        if (angular.toJson($scope.tradeshow.Divisions).length > 0 && angular.toJson($scope.colortradeshow.colorDivisions).length > 0
            && angular.toJson($scope.pricetradeshow.priceDivisions).length > 0) {
            //show brand, color and price
            display = 1;
        } else if (angular.toJson($scope.tradeshow.Divisions).length > 0 && angular.toJson($scope.colortradeshow.colorDivisions).length > 0
            && angular.toJson($scope.pricetradeshow.priceDivisions).length < 0) {
            //show only brand and color
            display = 2;
        } else if (angular.toJson($scope.tradeshow.Divisions).length > 0 && angular.toJson($scope.colortradeshow.colorDivisions).length < 0
            && angular.toJson($scope.pricetradeshow.priceDivisions).length < 0) {
            //show only brand
            display = 3;
        } else if (angular.toJson($scope.tradeshow.Divisions).length < 0 && angular.toJson($scope.colortradeshow.colorDivisions).length > 0
            && angular.toJson($scope.pricetradeshow.priceDivisions).length > 0) {
            //show only color and price
            display = 4;
        } else if (angular.toJson($scope.tradeshow.Divisions).length < 0 && angular.toJson($scope.colortradeshow.colorDivisions).length > 0
            && angular.toJson($scope.pricetradeshow.priceDivisions).length < 0) {
            //show only color
            display = 5;
        } else if (angular.toJson($scope.tradeshow.Divisions).length < 0 && angular.toJson($scope.colortradeshow.colorDivisions).length < 0
            && angular.toJson($scope.pricetradeshow.priceDivisions).length < 0) {
            //show all
            display = 6;
        } else if (angular.toJson($scope.tradeshow.Divisions).length < 0 && angular.toJson($scope.colortradeshow.colorDivisions).length < 0
            && angular.toJson($scope.pricetradeshow.priceDivisions).length > 0) {
            //show price
            display = 7;
        }

        switch (display) {
            case 1:
                $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colortradeshow.colorDivisions), price: angular.toJson($scope.pricetradeshow.priceDivisions)});
                break;
            case 2:
                $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colortradeshow.colorDivisions), price: angular.toJson($scope.priceDivisions)});
                break;
            case 3:
                $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colorDivisions), price: angular.toJson($scope.priceDivisions)});
                break;
            case 4:
                $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colortradeshow.colorDivisions), price: angular.toJson($scope.pricetradeshow.priceDivisions)});
                break;
            case 5:
                $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colortradeshow.colorDivisions), price: angular.toJson($scope.pricetradeshow.priceDivisions)});
                break;
            case 6:
                // $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colorDivisions), price: angular.toJson($scope.priceDivisions)});
                break;
            case 7:
                $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colorDivisions), price: angular.toJson($scope.pricetradeshow.priceDivisions)});
                break;
            default:
                break;
        }


        /*

         if (angular.toJson($scope.tradeshow.Divisions).length> 0  && angular.toJson($scope.colortradeshow.colorDivisions).length > 0 && angular.toJson($scope.pricetradeshow.priceDivisions).length > 0) {
         $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colortradeshow.colorDivisions)
         , price: angular.toJson($scope.pricetradeshow.priceDivisions)});
         } else if (angular.toJson($scope.tradeshow.Divisions).length> 0 && ($scope.colortradeshow.colorDivisions).length < 0
         && angular.toJson($scope.pricetradeshow.priceDivisions).length > 0) {
         $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colorDivisions)
         , price: angular.toJson($scope.pricetradeshow.priceDivisions)});
         } else if (angular.toJson($scope.tradeshow.Divisions).length> 0 && angular.toJson($scope.pricetradeshow.priceDivisions).length < 0 && ($scope.colortradeshow.colorDivisions).length > 0) {
         $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colortradeshow.colorDivisions)
         , price: angular.toJson($scope.priceDivisions)});
         } else if (angular.toJson($scope.tradeshow.Divisions).length> 0 && ($scope.colortradeshow.colorDivisions).length < 0 && angular.toJson($scope.pricetradeshow.priceDivisions).length < 0) {
         $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colorDivisions)
         , price: angular.toJson($scope.priceDivisions)});
         }*/

        console.log("tradeshow" + angular.toJson($scope.tradeshow.Divisions));
        //$location.path('/view2');
    }, true);


    $scope.colortradeshow = { };
    $scope.colortradeshow.colorDivisions = [];


    // selected divisions
    //$scope.selection = [];

    // helper method
    $scope.selectedColorDivisions = function selectedColorDivisions() {
        return filterFilter($scope.colortradeshow.colorDivisions, { selected: true });
    };


    // watch divisions for changes
    $scope.$watch('colordivisions|filter:{selected:true}', function (nv1) {
        $scope.colortradeshow.colorDivisions = nv1.map(function (colordivision) {
            //alert(division.brand);
            console.log({color: colordivision.color});
            return {color: colordivision.color};
        });
        $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colortradeshow.colorDivisions), price: angular.toJson($scope.pricetradeshow.priceDivisions)});
        console.log("colortradeshow" + angular.toJson($scope.colortradeshow.colorDivisions));
        //  $location.path('/view2');
    }, true);


    $scope.pricetradeshow = { };
    $scope.pricetradeshow.priceDivisions = [];


    // selected divisions
    //$scope.selection = [];

    // helper method
    $scope.selectedPriceDivisions = function selectedPriceDivisions() {
        return filterFilter($scope.pricetradeshow.priceDivisions, { selected: true });
    };

    // helper method
    $scope.selectedPriceDivisionswatch = function selectedPriceDivisionswatch() {
        return filterFilter($scope.pricetradeshowwatch.priceDivisionswatch, { selected: true });
    };

    // watch divisions for changes
    $scope.$watch('pricedivisions|filter:{selected:true}', function (nv2) {
        $scope.pricetradeshow.priceDivisions = nv2.map(function (pricedivision) {
            //alert(division.brand);
            console.log({price: pricedivision.price});
            return {price: pricedivision.price};
        });
        $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: angular.toJson($scope.colortradeshow.colorDivisions), price: angular.toJson($scope.pricetradeshow.priceDivisions)});
        console.log("pricetradeshow" + angular.toJson($scope.pricetradeshow.priceDivisions));
        // $location.path('/view2');
    }, true);


    $scope.getColorPhone = function (Brand) {

        console.log("color value returned - " + Brand.color);
        $rootScope.home = UserFactory.brandName.query({brands: angular.toJson($scope.tradeshow.Divisions), color: Brand.color});
        $scope.Brand = {color: "All"};
        // $location.path('/view2');
    }


    $scope.getMobileInfo = function (productName, category) {
        console.log("What has come dear - ? " + productName + " - and what about category - " + category);

        if (category != 'undefined') {
            $rootScope.home = UserFactory.searchproduct1.query({productname: productName, category: category});
        }


        //   $location.path('/view2');
    }

    $scope.getMobileBrandData = function (brand) {
        console.log("value returned - " + brand);
        alert(" brand value" + brand);
    }

    $scope.getProductInfo = function (product) {
        console.log("getProductInfo - " + product.productName);
        //$rootScope.productInfo = UserFactory.productdetails.query({key: product.productName});

        $rootScope.pricecompare = {productName: ""};
        $rootScope.pricecompare = UserFactory.productdetails.query({key: product.productName});
        console.log("price compare - " + $rootScope.pricecompare.length);

        $rootScope.productInfo = product;
        $rootScope.image = product.productImage;
        console.log("productInfo length - " + product.productImage);
        console.log("productInfo length - " + $rootScope.image);
        console.log("productInfo length - " + $scope.productInfo.productName);

        $scope.$watch($rootScope.productInfo, function (newVal) {
            //alert("Changed an input");
        }, true);

        $scope.$watch($rootScope.pricecompare, function (newVal) {
            //alert("Changed an input");
        }, true);

        //  $location.path('/view2');
    }

}]);


app.controller('watchesCtrl', ['$scope', '$rootScope', '$location', 'UserFactory', 'ProductFactory', '$q',
    function ($scope, $rootScope, $location, UserFactory, ProductFactory, $q) {


        $scope.start = function () {
            alert("came here");

        };

        $scope.items = [
            { id: 1, name: 'Books'},
            { id: 2, name: 'Mobile'}
        ];


        $scope.menWatches = function () {
            console.log("menWatches");

            $rootScope.watchlist = ProductFactory.home.query();

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.watchlist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.watchlist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/watches');
        }


        $scope.womenWatches = function () {
            console.log("womenWatches");
            console.log("menWatches");
            $rootScope.watchlist = ProductFactory.home.query({productcategory: 'Women Watches'});

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.watchlist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.watchlist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/watches');
        }


        $scope.watchesdivisions = ProductFactory.watchbrands.query();


        $rootScope.roles = [
            'guest',
            'user',
            'customer',
            'admin'
        ];
        $rootScope.user = {
            roles: ['user']
        };
        $rootScope.checkAll = function () {
            $rootScope.user.roles = angular.copy($rootScope.roles);
            console.log("$scope.user.roles #############- " + $rootScope.user.roles);
        };
        $rootScope.uncheckAll = function () {
            $rootScope.user.roles = [];
            console.log("$scope.user.roles #############- " + $rootScope.user.roles);
        };
        $rootScope.checkFirst = function () {
            $rootScope.user.roles.splice(0, $rootScope.user.roles.length);
            $rootScope.user.roles.push('guest');
            console.log("$scope.user.roles #############- " + $rootScope.user.roles);
        }

        $rootScope.selectedColor = function (user) {
            console.log("es #############- " + user);
            //$rootScope.user.roles = angular.copy($rootScope.roles);
            //console.log("$scope.user.roles #############- " + $rootScope.user.roles);
        };

        $rootScope.selectedRadio = function (color) {
            console.log("color #############- " + color);
            //$rootScope.user.roles = angular.copy($rootScope.roles);
            //console.log("$scope.user.roles #############- " + $rootScope.user.roles);
        };


        console.log("$scope.user.roles #############- " + $scope.user.roles);

        $scope.watchtradeshow = { };
        $scope.watchtradeshow.watchDivisions = [];

        // selected divisions
        //$scope.selection = [];

        // helper method
        $scope.selectedDivisionswatch = function selectedDivisionswatch() {
            return filterFilter($scope.watchtradeshow.watchDivisions, { selected: true });
        };


        $scope.colordivisionswatch = [
            {
                color: "White"
            },
            {
                color: "Yellow"
            },
            {
                color: "Pink"
            },
            {
                color: "Black"
            },
            {
                color: "Grey"
            }
        ];


        $scope.typeahead = ["ADCOM A-430I PS Black", "ADCOM Smartphone A-350i Black", "ADCOM Smartphone A-350i White", "ADCOM Smartphone A-500 Black", "ADCOM Smartphone A-500 White", "ADCOM Thunder A-350 Black", "ADCOM Thunder A-350 White", "ADCOM Thunder A-400 Black", "ADCOM Thunder A-400 White", "ADCOM Thunder A-400i Black", "ADCOM Thunder A-400i White", "ADCOM Thunder A-430 White", "ADCOM X8 Black", "ADCOM X8 White", "ADCOM X9 Black", "ADCOM X9 Red", "Adcom X10 Black", "Adcom X10 White", "Adcom X11 Black", "Adcom X12 Black", "Adcom X14 Black", "Adcom X14 Grey", "Adcom X28 Silver", "Alcatel 890D Silver", "Alcatel One Touch J636d+ Black", "Alcatel Onetouch Idol Mini 6012D", "Alcatel Onetouch Idol X+ Bluish Black, with 16 GB", "Alcatel Onetouch Idol X+ White, with 16 GB", "Apple iPhone 4 Black, with 16 GB", "Apple iPhone 4 Black, with 8 GB", "Apple iPhone 4 White, with 16 GB", "Apple iPhone 4 White, with 8 GB", "Apple iPhone 4S Black, with 8 GB", "Apple iPhone 4S White, with 8 GB", "Apple iPhone 5C 8 GB Blue, with 8 GB", "Apple iPhone 5C 8 GB Green, with 8 GB", "Apple iPhone 5C 8 GB Pink, with 8 GB", "Apple iPhone 5C 8 GB White, with 8 GB", "Apple iPhone 5C 8 GB Yellow, with 8 GB", "Apple iPhone 5C Blue, with 16 GB", "Apple iPhone 5C Blue, with 32 GB", "Apple iPhone 5C Green, with 16 GB", "Apple iPhone 5C Green, with 32GB", "Apple iPhone 5C Pink, with 16 GB", "Apple iPhone 5C Pink, with 32GB", "Apple iPhone 5C White, with 16 GB", "Apple iPhone 5C White, with 32GB", "Apple iPhone 5C Yellow, with 16 GB", "Apple iPhone 5C Yellow, with 32GB", "Apple iPhone 5S Gold, with 16 GB", "Apple iPhone 5S Gold, with 32 GB", "Apple iPhone 5S Gold, with 64 GB", "Apple iPhone 5S Silver, with 16 GB", "Apple iPhone 5S Silver, with 32 GB", "Apple iPhone 5S Silver, with 64 GB", "Apple iPhone 5S Space Grey, with 16 GB", "Apple iPhone 5S Space Grey, with 32 GB", "Apple iPhone 5S Space Grey, with 64 GB", "Arise Bingo AX111 Black", "Arise Imperia AX282 Black", "Arise Magnet AX251 Black", "Asus Zenfone 4 A400CG Black, with 8 GB", "Asus Zenfone 4 A400CG Blue, with 8 GB", "Asus Zenfone 4 A400CG Red, with 8 GB", "Asus Zenfone 4 A400CG White, with 8 GB", "Asus Zenfone 4 A400CG Yellow, with 8 GB", "Asus Zenfone 4 A450CG Black, with 8 GB", "Asus Zenfone 4 A450CG Solar Yellow, with 8 GB", "Asus Zenfone 4 A450CG White, with 8 GB", "Asus Zenfone 6 A600CG / A601CG Black, with 16 GB", "Asus Zenfone 6 A600CG / A601CG Red, with 16 GB", "Atom Supremus White", "Atom Ultimus White", "BLU B10 BLK Black", "BLU B10 JUMBO R Black", "BLU B10 JUMBO Y Black", "BLU B10 R Black", "BLU B10 Y Black", "BLU B10+ B Blue", "BLU B10+ O Orange", "BLU B10+ R Red", "BLU B10+ Y Yellow", "BLU B23 B Black", "BLU B23 G Black", "BLU B23 R Black", "BLU B23 Y Black", "BLU B306A BLK Black", "BLU B306A W White", "BLU B307 BLK Black", "BLU B307 W White", "BLU B309A W White", "BLU B41 BLK Grey", "BLU B41 Gry Black", "BQ K12 Grey", "BQ K15 Grey", "BQ K18 Blue", "BQ K26 Green", "BQ K27 Gold", "BQ K28 White", "BQ K29 Black", "BQ K50 Grey", "BQ K80 Blue", "BQ S35 Red", "BQ S36 Black", "BQ S37 Black", "BQ S37 White", "BQ S60 Black", "BSNL-Champion Champion Apna Phone SQ241 Power Black", "BSNL-Champion Champion My Phone 51 Black", "BSNL-Champion Champion My Phone 51 White", "BSNL-Champion DM6513 White", "BSNL-Champion Myphone 41 Black", "BSNL-Champion Pro SQ181 Black", "BSNL-Champion SM3513 Black", "BSNL-Champion SQ 181 power Black", "BSNL-Champion SQ 181 power White", "BSNL-Champion SQ 241 Sleek Black", "BSNL-Champion SQ 241 Sleek White", "BSNL-Champion SQ241 SQ241 Black", "BSNL-Champion SQ281 SQ281 Black", "Belkin Skype V1000 Black", "BlackBerry 9720 Black", "BlackBerry 9720 White", "BlackBerry Bold 9790 Pink", "BlackBerry Curve 3G 9300 Pink", "BlackBerry Curve 9220 Black", "BlackBerry Q10 Black", "BlackBerry Q10 White", "BlackBerry Torch 9810 White", "BlackBerry Torch 9810 Zinc Grey", "BlackBerry Torch 9860 Shadow Grey", "BlackBerry Z10 Charcoal Black", "BlackBerry Z10 Pure White", "BlackBerry Z3 Black, with 8 GB", "BlackBerry Z30 Black", "BlackBerry Z30 White", "Blackberry Curve 9320 Black", "Byond B50 Black", "Celkon A10 3G Campus Series Black", "Celkon A107+ Smart Phone White", "Celkon A112 Signature Swift Black", "Celkon A112 White", "Celkon A119Q A 119 Q Smart Phone Black", "Celkon C349* Black", "Celkon C5 Star White", "Celkon C56 Black", "Celkon C6* Black \u0026 Red", "Celkon C605 Black", "Celkon C7045 Black", "Celkon Campus A20 White", "Celkon Campus A225 White", "Celkon Campus A35K Blue", "Celkon Campus A40 Yellow", "Celkon Campus A42 Black", "Celkon Campus A43 Black", "Celkon Campus A66 Black", "Celkon Campus A66 White", "Celkon Campus A9Dual White \u0026 Black", "Celkon Campus Mini A350 White", "Celkon Campus Series A20 Smart Phone Black", "Celkon Celkon Campus Series A 63 Smart Phone Campus Series A63 Black", "Celkon Feature Phone C297 Black", "Celkon Feature Phone C297 White", "Celkon Feature Phone C9 Jumbo White", "Celkon Millennium Q44 Black", "Celkon Millennium Q455 Black", "Celkon Millennium Q455 Blue", "Celkon Millennium Q455 White", "Celkon Millennium Q470 White", "Celkon Signature 118 HD Black", "Celkon Signature A115 White", "Celkon Signature Two A500 Black", "DOMO nTice G12 Phablet Mobile Smartphone White", "Datawind PocketSurfer3G5", "Datawind PocketSurfer5 White", "Datawind PocketSurfer5X Black", "Dell Venue V03B Black", "Devante Boss 1 Black", "Devante Boss 1 White", "Devante Boss 2 Black", "Devante Boss 2 Blue", "Devante Boss 2 White", "Devante Dynamite White", "Devante Hero 1 Subway Series S1 Black", "Devante Hero 1 Subway Series S1 White", "Devante Thunder Black", "Digimac 3X Black", "Digimac 3X White", "Digimac EXI Black", "Digimac EXI White", "Digimac Fusion Black", "Digimac Fusion White", "Digimac VIVO Black", "Digimac VIVO White", "Forme C101 Black", "Forme Coke A1 Red", "Forme D516 Black", "Forme D516 Black \u0026 Red", "Forme D516 Champagne", "Forme D555+ Grey", "Forme D555+ Red", "Forme D556 Black \u0026 Red", "Forme D815 Black", "Forme D815 Red", "Forme Discovery P9 Black", "Forme Discovery P9 Blue", "Forme Discovery P9 plus Black", "Forme Discovery P9 plus Blue", "Forme Energy D9 Black", "Forme F10 Black \u0026 Red", "Forme F8+ Silver", "Forme Fantasy F10 Black", "Forme Fantasy F10 Red", "Forme Find F105 Red", "Forme Forever F8 Red", "Forme Forever F8 Silver", "Forme Hero Blue", "Forme Honey Hero Black", "Forme Hope H1 Black", "Forme Hope H1 Blue \u0026 Black", "Forme Inspire V8 Black", "Forme Inspire V8 Brown", "Forme Inspire V8 Silver", "Forme K1 Black \u0026 Red", "Forme King K1 Red", "Forme L100 White \u0026 Silver", "Forme L600 Red", "Forme L900 Red", "Forme L900 White", "Forme L900 White \u0026 Red", "Forme Love One Black", "Forme Love One Brown", "Forme Love One Red", "Forme M20 White", "Forme M60 Pink", "Forme M600 Red", "Forme M600 White", "Forme M660 Red", "Forme M660 White", "Forme M80 Red", "Forme M90 Black", "Forme Mini 5130 Black", "Forme Onion K806 Black", "Forme Onion K806 White", "Forme P9 Plus Black", "Forme Power One A60 Black", "Forme Power Two M22 Grey", "Forme Power Two M22 Red", "Forme Queen K08-grey Grey", "Forme Queen K08-red Red", "Forme Queen K08-white White", "Forme S10 Silver \u0026 Green", "Forme Summer S700 Pink", "Forme Summer S700 Purple", "Forme Summer S700 Red", "Forme Summer S700 White", "Forme Sunny S60 Black", "Forme Sunny S60 Blue", "Forme Sunny S60 Orange", "Forme Surprise P10 Black", "Forme Surprise S10 Green", "Forme Surprise S10 Red", "Forme Surprise S11 Black", "Forme Surprise S11 Red", "Forme T4 Silver", "Forme Teddy T2 Green", "Forme Teddy T2 White", "Forme Teddy T3 Black", "Forme Teddy T3 Red", "Forme Teddy T4 Green", "Forme Teddy T4 Silver", "Forme V8 White", "Forme Venus V11 Black", "Forme Venus V11 Red", "Forme W3 Gold", "Forme Winner W3 Blue \u0026 Silver", "Forme Winner W3 Gold", "Forme Winner W3 Grey", "Funtab Phablet Fone PHA6.4 White", "Gee Pee 3dh 4430 Black", "Gionee CTRL V5 White", "Gionee E7 Mini", "Gionee Elife E3 Black", "Gionee Elife E6 Black", "Gionee Elife E7 16 GB Black, with 16 GB", "Gionee Elife E7 16 GB White, with 16 GB", "Gionee Elife E7 32 GB Black, with 32 GB", "Gionee Elife E7 32 GB White, with 32 GB", "Gionee Elife S5.5 Black", "Gionee Elife S5.5 White", "Gionee G1 Black", "Gionee Gpad G3 White", "Gionee Gpad G4 Black", "Gionee Gpad G4 White", "Gionee Long L700 Black", "Gionee Long L700 Silver", "Gionee M2 Black", "Gionee M2 White", "Gionee P2 Black", "Gionee P2S Black", "Gionee P2S White", "Gionee Pioneer P3 Black", "Gionee Pioneer P3 White", "Gionee Pioneer P4 Black", "Gionee Pioneer P4 White", "Gionee Slim S80 Black", "Gionee Slim S80 Grey", "Gionee V5 Black", "Google Nexus 4 Black", "Google Nexus 4 White, with Headphone", "Google Nexus 5 Black, with 16 GB", "Google Nexus 5 Black, with 32 GB", "Google Nexus 5 White, with 16 GB", "Google Nexus 5 White, with 32 GB", "HP Slate 6 Voice Tab", "HTC 709D Desire 700 White", "HTC A620E 8S Fiesta Red", "HTC Desire 210 Dual SIM D210h Black", "HTC Desire 210 Dual SIM D210h White", "HTC Desire 310 Dual SIM Arctic White", "HTC Desire 310 Dual SIM Matte Blue", "HTC Desire 310 Flipcovers Blue", "HTC Desire 500 Glacier Blue", "HTC Desire 500 Glossy Black", "HTC Desire 500 Passion Red", "HTC Desire 516 Dark Grey", "HTC Desire 516 Grey", "HTC Desire 516 Pearl White", "HTC Desire 516 White", "HTC Desire 600 Stealth Black", "HTC Desire 600 White", "HTC Desire 600C Black, with Dual SIM", "HTC Desire 600C White, with Dual SIM", "HTC Desire 601 Black, with Dual SIM", "HTC Desire 616 Dual Sim Dark Gray", "HTC Desire 616 Dual Sim White", "HTC Desire 700 Black", "HTC Desire 816 Dark Grey", "HTC Desire 816 White", "HTC Desire SV Stealth Black", "HTC Desire SV Yellow", "HTC Desire T329D XC Black Stone", "HTC Desire T329D XC Fabulous White", "HTC Desire T329W X Dual SIM White, with Dual SIM", "HTC E8 Dual SIM White", "HTC ONE E8 M8Sd Red", "HTC One 802d Black, with Dual SIM", "HTC One 802d Silver, with Dual SIM", "HTC One E8", "HTC One M8 Amber Gold", "HTC One M8 Glacial Silver", "HTC One M8 Gunmetal Grey", "HTC One Max Silver White", "HTC One Mini Black", "HTC One Mini Blue", "HTC One V T320 Jupitor Rock", "HTC T327W Desire U DS White", "Haier C380 Black", "Haier C380 White", "Hitech Air A1 White", "Hitech Amaze S-800 Black", "Hitech Amaze S410 White", "Hitech F2i Blue", "Hitech G11 Black", "Hitech G15 Black", "Hitech G5 Black", "Hitech H2i Red", "Hitech HT-850 Black", "Hitech HT820 Black", "Hitech HT830 Grey", "Hitech HT880 Black", "Hitech Kick 515 Black", "Hitech Micra - 110 Black", "Hitech Micra 115 Black", "Hitech Micra 120 Black", "Hitech Micra 150 Black", "Hitech Pride 302 Black \u0026 Silver", "Hitech Pride 313 Black", "Hitech Pride 325 Black", "Hitech Rocket G3i Black", "Hitech S210 Amaze Black", "Hitech S230 Amaze Black", "Hitech S3003G White", "Hitech Super X-9 Black", "Hitech Supreme F3 Black", "Hitech Tiny X-100 Black", "Hitech X-101 Black", "Hitech X10 Grey", "Hitech Xpaly 250 Black", "Hitech Xpaly G3i+ Black", "Hitech Xplay 245 Black", "Hitech Youth HT-810i Black", "Hitech kick 525 Black", "Hotpary Elegant H2 White", "Huawei Ascend G6 Black", "Huawei Ascend G610 Black", "Huawei Ascend G610 White", "Huawei Ascend G700 White", "Huawei Ascend P6 White", "Huawei Ascend Y200 Black", "Huawei Ascend Y210D Black", "Huawei Ascend Y220 Black", "Huawei Ascend Y600", "Huawei G730 Black", "Huawei G730 White", "Huawei Honor 3C White", "Huawei Honor 3X White", "Huawei Y320 Black", "Huawei Y511 Black", "Huawei Y600 Black \u0026 Blue", "ICE D3 Xphone Limited Edition Pearl White", "ICE Xphone Xphone Pearl White", "Icon G8 Dual SIM Qwerty Mobile Black", "Icon G9 Dual SIM Qwerty Mobile Black", "Intex AQUA Marvel + Aqua Marvel + Grey", "Intex AQUA Marvel + Aqua Marvel + White", "Intex Alpha Black", "Intex Alpha Mobile Black \u0026 Red", "Intex Aqua 3 G Black", "Intex Aqua 3G Black", "Intex Aqua 3G White", "Intex Aqua Curve Black", "Intex Aqua Curve Red", "Intex Aqua HD Aqua HD White", "Intex Aqua I 5 HD Black", "Intex Aqua I15 White", "Intex Aqua I5 HD Black", "Intex Aqua I5 HD White", "Intex Aqua N-2 Black", "Intex Aqua N15 Black", "Intex Aqua N15 Blue", "Intex Aqua N15 White", "Intex Aqua N17 Black", "Intex Aqua N2 White", "Intex Aqua N4 Black", "Intex Aqua N8 White", "Intex Aqua Octa Black", "Intex Aqua Octa White", "Intex Aqua Qwerty Blue", "Intex Aqua Qwerty White", "Intex Aqua Style Black", "Intex Aqua Style Black \u0026 Silver", "Intex Aqua Style Pro Black", "Intex Aqua Style Pro Grey", "Intex Aqua Style White \u0026 Silver", "Intex Aqua Swadesh White Black", "Intex Aqua T3 Black \u0026 Blue", "Intex Aqua T3 Grey", "Intex Aqua T3 White \u0026 Silver", "Intex Aqua T4 Black", "Intex Aqua T4 Blue", "Intex Aqua Trendy White", "Intex Aqua Y 2 Black", "Intex Aqua Y2 White", "Intex Aqua i 5 mini White", "Intex Aqua i14 Blue", "Intex Aqua i15 Black", "Intex Aqua i15 Blue", "Intex Aqua i3 Black", "Intex Aqua i3 Blue", "Intex Aqua i5 Black", "Intex Aqua i5 Mini Black", "Intex Aura NX Black", "Intex Bravo 2.6 Grey", "Intex Cloud X11 White", "Intex Cloud X12 Black", "Intex Cloud X2 Cloud X2 White", "Intex Cloud X3 Plus Black", "Intex Cloud X3 Plus White", "Intex Cloud X5 Black", "Intex Cloud X5 White", "Intex Cloud Y1 Black", "Intex Cloud Y1 White", "Intex Cloud Y12 White", "Intex Cloud Y13 White", "Intex Cloud Y17 White", "Intex Cloud Y4 Black", "Intex Cloud Y7 Black", "Intex Cloud Y7 White", "Intex Cloud Z5 Black", "Intex Focus V Silver", "Intex Focus-v Grey", "Intex Force Black \u0026 Grey", "Intex Force Black \u0026 Red", "Intex Force White \u0026 Grey", "Intex GC5050 Blue", "Intex GC5050 Red", "Intex GC5050 Silver", "Intex Gsm Hero Silver", "Intex Hero Black", "Intex IN 2010 NANO2", "Intex Jazz Grey", "Intex Jszz Black", "Intex Kobra Silver", "Intex Kobra White", "Intex Mega 10 Black", "Intex Nano 2 Black \u0026 Red", "Intex Nano 2 Blue", "Intex Nano 2S Black", "Intex Nano Star Black", "Intex Nano Star Black \u0026 Red", "Intex Neo-Vi Black \u0026 Red", "Intex Neo-vi Plus Red", "Intex Nova Black", "Intex Nova Silver", "Intex Nova White", "Intex Plasma Black", "Intex Plasma White", "Intex Platinum 201 Black", "Intex Platinum 201 Mobile Silver", "Intex Platinum 201 White", "Intex Platinum A6 Black \u0026 Silver", "Intex Platinum A6 White", "Intex Platinum Matrix Black", "Intex Platinum Matrix White", "Intex Pride Black", "Intex Rock Star Black \u0026 Grey", "Intex Shine 1800 Black", "Intex Shine 1800 Blue", "Intex Shine 1800 Red", "Intex Slimzz Black", "Intex Slimzz Silver", "Intex Star One Black", "Intex Turbo N Grey", "Intex Yuvi LX Black", "Intex Yuvi Pro Grey", "JIVI Dual Sim/Dual Standby Gsm + Cdma GC 1209 Black and White", "Jivi C3i Black", "Jivi CG1335 Black", "Jivi JV C300 CDMA Mobile Black", "Jivi JV21 Black", "Jivi JV21 White", "Jivi Jv X3i Black", "Jivi Slim X48 Black", "Jivi X390 Black", "Jivi X426 Black", "Jivi X480 Black", "Jivi X660 Black", "Josh A2700 Black", "Josh A2700 Blue", "Josh A2700 White", "Josh A999 White", "Josh Feather Black", "Josh JB 63+ Red", "Josh JB 63+ White", "Josh JB007 Silver", "Josh JB007-S Brown", "Josh JM 2800 Black", "Josh JM 2800 Golden", "Josh JM2400 Black", "Josh JM2400-R Red", "Josh Thunder Grey", "Karbonn A1 Plus Super White", "Karbonn A1+ Duple Black", "Karbonn A1+ Duple White", "Karbonn A101 Black", "Karbonn A11+ Black", "Karbonn A119 Black", "Karbonn A119 White", "Karbonn A15 Plus Black", "Karbonn A19 Black Silver", "Karbonn A19 White Silver", "Karbonn A21+ Black", "Karbonn A21+ White", "Karbonn A25 Plus White", "Karbonn A35 Black Silver", "Karbonn A35 White and Silver", "Karbonn A51 Black", "Karbonn A51 White", "Karbonn A6 Black White", "Karbonn A90 Black \u0026 Silver", "Karbonn A90 White Silver", "Karbonn A90S Black", "Karbonn A91 White", "Karbonn A93 Black", "Karbonn A93 White", "Karbonn A99 Black", "Karbonn A99 Star Black \u0026 White", "Karbonn A99 White", "Karbonn A99i Black", "Karbonn A99i White", "Karbonn Flair K102+ Gold White", "Karbonn Jumbo K9 Black \u0026 Red", "Karbonn K-Phone 1 Black Blue", "Karbonn K-Phone 1 Black Brown", "Karbonn K-Phone 1 White Silver", "Karbonn K101* Black \u0026 Red", "Karbonn K105s Black \u0026 Red", "Karbonn K112 Black", "Karbonn K39 Black \u0026 Grey", "Karbonn K39 Black \u0026 Red", "Karbonn K52 Groovster Black \u0026 Silver", "Karbonn K57 Black", "Karbonn K57 Silver", "Karbonn K62+ White", "Karbonn K63+ Black", "Karbonn K63+ Silver", "Karbonn K9 Plus Black", "Karbonn K9 Plus White Silver", "Karbonn KC540 White", "Karbonn KT 52 Black", "Karbonn KT 52 White", "Karbonn Karbonn The Legend Phone Beauty At Its Best Black Black", "Karbonn Kochadaiiyaan The Legend 2.4 Black \u0026 Red", "Karbonn Kochadaiiyaan The Legend A36 Black \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A36 White \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A6 Plus Black \u0026 White", "Karbonn Kochadaiiyaan The Legend S5i White", "Karbonn Opium N7 Black", "Karbonn Opium N9 Black", "Karbonn Opium N9 White", "Karbonn SPY K595 Black", "Karbonn SPY K595 Grey", "Karbonn Smart A1* Black", "Karbonn Smart A10 Black", "Karbonn Smart A10 White", "Karbonn Smart A11 Star Black", "Karbonn Smart A11 Star White", "Karbonn Smart A111 White", "Karbonn Smart A12 Star Black \u0026 Silver", "Karbonn Smart A12 Star White \u0026 Gold", "Karbonn Smart A26 Metallic Black", "Karbonn Smart A26 White Silver", "Karbonn Smart A29 Black", "Karbonn Smart A29 White", "Karbonn Smart A4+ Black", "Karbonn Smart A4+ White", "Karbonn Smart A5* Black", "Karbonn Smart A50s Black", "Karbonn Smart A50s White", "Karbonn Smart A51 Lite White", "Karbonn Smart A51+ Black", "Karbonn Smart A51+ White", "Karbonn Smart A52 Black Silver", "Karbonn Smart A52 Plus Black \u0026 Gold", "Karbonn Smart A52 Plus White \u0026 Silver", "Karbonn Smart A52 White Silver", "Karbonn Smart A5i Black", "Karbonn Smart A5i White", "Karbonn Smart A92 Black Silver", "Karbonn Smart A92 White Silver", "Karbonn Sound Wave K451+ Black", "Karbonn Sound Wave K451+ Champ Gold", "Karbonn Sound Wave K451+ Silver", "Karbonn The Star K61 Black", "Karbonn Titanium Hexa", "Karbonn Titanium K900 Black", "Karbonn Titanium Octane Black", "Karbonn Titanium Octane Red", "Karbonn Titanium Octane White", "Karbonn Titanium S1 Plus Black", "Karbonn Titanium S1 Plus Orange", "Karbonn Titanium S1 Plus White", "Karbonn Titanium S19 White", "Karbonn Titanium S2 Plus Black", "Karbonn Titanium S3 Black", "Karbonn Titanium S3 White", "Karbonn Titanium S4 Black", "Karbonn Titanium S4 White", "Karbonn Titanium S5 Plus Deep Blue", "Karbonn Titanium S5 Plus Pearl White", "Karbonn Titanium S5i Dark Blue", "Karbonn Titanium S7 Black", "Karbonn Titanium S9 Lite Black", "Karbonn Titanium S9 Lite White", "Karbonn Titanium S9 Pearl White", "Karbonn Titanium S99 Black", "Karbonn Titanium S99 White", "Karbonn Titanium X White", "Kingbell Basic M24 Black", "Kingbell Basic M3 Pink", "LG A390 Silver", "LG Cookie Smart T 375 Black", "LG Cookie Snap GM360i with 2 GB Memory Card", "LG D686 Gold", "LG E420 Black", "LG E612 Black", "LG G Pro 2 D838 Titan", "LG G Pro 2 D838 White", "LG G Pro E988 Black", "LG G Pro Lite D686 Black", "LG G Pro Lite D686 Black Gold", "LG G Pro Lite D686 White", "LG G-Flex Titan Silver", "LG G2 32 GB Black, with 32 GB", "LG G2 32 GB Gold", "LG G2 32 GB White, with 32 GB", "LG G2 Black", "LG G2 Black Gold, with 16gb", "LG G2 D802T Black", "LG G2 D802T Gold", "LG G2 D802T White", "LG G2 White", "LG G3 D855 Black Gold, with 32 GB", "LG G3 D855 Gold", "LG G3 D855 Titan Titan", "LG G3 D855 Titan Titan, with 32 GB", "LG G3 D855 White", "LG L4 II Dual E445 Black", "LG L4 II Dual E445 White", "LG L60 Dual White", "LG L60 X-147 Black", "LG L70 Black", "LG L70 Dual", "LG L70 White", "LG L80 Black", "LG L80 Dual Black", "LG L80 Dual White", "LG L80 White", "LG L90 Black", "LG L90 Dual", "LG L90 White", "LG Optimus 3D Max P725 Black", "LG Optimus 4X HD P880 White", "LG Optimus Black P970 Black Titan", "LG Optimus G E975 Blue", "LG Optimus GT540", "LG Optimus Hub E510 Black", "LG Optimus L3 Dual E405 Black", "LG Optimus L3 Dual E405 White", "LG Optimus L3 II E425 Black", "LG Optimus L3 II E425 White", "LG Optimus L3 II E435 Black", "LG Optimus L3 II E435 White", "LG Optimus L5 Dual E615 Black", "LG Optimus L5 Dual E615 White", "LG Optimus L5 II Dual E455 Black", "LG Optimus L5 II Dual E455 White", "LG Optimus L5 II E450 Black", "LG Optimus L5 II E450 White", "LG Optimus L7 II P715 Black", "LG Optimus L7 II P715 White", "LG Optimus L7 P705 Black", "LG Optimus L9 P765 Black", "LG Optimus Net Dual Sim P698 Titanium", "LG Optimus Pro C660 Black", "LG Optimus Sol E730 Black", "LG Optimus VU P895 Black", "LG Optimus VU P895 White", "LG P520 Black, with 2 GB Micro SD Card", "LG T500 Black", "LG T515 Wine Red", "LG T585 Black", "LG T585 White", "Lava ARC 11i Black", "Lava ARC Lite Black \u0026 Red", "Lava Arc 111 Black \u0026 Yellow", "Lava Arc 111 Grey \u0026 Green", "Lava Arc 12i Black", "Lava Arc 12i Grey", "Lava Arc 1star Black \u0026 Red", "Lava Arc 22 Black", "Lava Arc 22 Yellow", "Lava C11 Grey", "Lava CG141 Black", "Lava Discover 128 Star White", "Lava Discover 135 White", "Lava Discover 136S Champagne", "Lava Discover Neo Black", "Lava Discover Neo Grey", "Lava Iris 300 Style Dark Blue", "Lava Iris 310 Style Brown", "Lava Iris 349i Black", "Lava Iris 350M Grey", "Lava Iris 354 White", "Lava Iris 354e White", "Lava Iris 360 Music Black", "Lava Iris 3G 412 Grey", "Lava Iris 402 Grey", "Lava Iris 402 White", "Lava Iris 402+ Ivory White", "Lava Iris 402e Grey", "Lava Iris 404e Black", "Lava Iris 405+ Black", "Lava Iris 405+ White", "Lava Iris 406Q Black", "Lava Iris 406Q White", "Lava Iris 408e Frosted Silver", "Lava Iris 415 Black", "Lava Iris 450 Color Plus Black \u0026 Blue", "Lava Iris 450 Color Plus White \u0026 Blue", "Lava Iris 450 White \u0026 Blue", "Lava Iris 456 Black", "Lava Iris 458q Grey", "Lava Iris 504Q+ Gray", "Lava Iris 504Q+ White", "Lava Iris 550Q Black", "Lava Iris Pro 20 Metal Blue", "Lava Iris Pro 30 Grey", "Lava Iris X1 with 4 GB ROM Black", "Lava Iris X1 with 4 GB ROM White", "Lava Iris X1 with 8 GB ROM Black, with 8 GB ROM", "Lava Iris X1 with 8 GB ROM White, with 8 GB ROM", "Lava KKT 27i Blue", "Lava KKT 27i Grey", "Lava KKT 27i Silver", "Lava KKT 27s Grey", "Lava KKT 34i Black \u0026 Silver", "Lava KKT 34star Black \u0026 Red", "Lava KKT 40 Mini Blue", "Lava KKT 42 Black", "Lava KKT Uno Grey", "Lava Magnum X604 White", "Lava Spark 10 Black \u0026 Red", "Lava Spark 245e Black \u0026 Grey", "Lemon B149 Black", "Lemon B159 Multimedia Big Battery Black", "Lemon B169 Multimedia Big Battery Grey", "Lemon B229 Multimedia Big Battery Black", "Lemon B319I Multimedia Big Battery Black", "Lemon B579 Multimedia Big Battery with Box Speaker Black", "Lenovo A269i Black", "Lenovo A369i Black", "Lenovo A390 Black", "Lenovo A390 White", "Lenovo A516 Grey", "Lenovo A516 White", "Lenovo A526 Aurora Blue", "Lenovo A680 Black", "Lenovo A680 White", "Lenovo A800 Black", "Lenovo A850 Black", "Lenovo A850 White", "Lenovo A859 White", "Lenovo IdeaPhone S890 White", "Lenovo Ideaphone A706 Black", "Lenovo Ideaphone A706 White", "Lenovo Ideaphone S920 8 GB White, with 8 GB", "Lenovo K860 Black", "Lenovo K900 Steel Grey", "Lenovo P780 Deep Black", "Lenovo P780 Deep Black, with 8 GB", "Lenovo Reliance CDMA GSM 2 SIM Android SmartPhone A600E Black", "Lenovo S650 Silver", "Lenovo S660 Titanium", "Lenovo S720 White", "Lenovo S820 Red", "Lenovo S820 Red, with 8 GB", "Lenovo S850", "Lenovo S860 Titanium", "Lenovo S880 White", "Lenovo S920 Blue", "Lenovo S920 White", "Lenovo S930 Silver", "Lenovo Vibe X Silver", "Lenovo Vibe Z K910 Silver", "Lenovo Vibe Z K910 Titanium", "MTS Blaze 4", "MTS Blaze 4.5", "MTS Blaze 5.0 White", "MTS Dual CG 131", "MTS Dual CG 141", "MTS Rockstar M131", "MTS Rockstar M141 Red", "Magicon Senior Duo White", "Maxx AX3 Black", "Maxx AX8 Black", "Maxx GenxDroid7 - AX352 Black", "Maxx GenxDroid7 - AX407 Black", "Maxx MSD7 Smarty Black", "Maxx MX426 - Supremo Red", "Maxx Note I AX8 Black", "Maxx Race AX8 Black", "Maxx Race AX9Z White", "Maxx Zippy MT616 Coffee", "Micromax A069 Grey", "Micromax A069 White", "Micromax A069 Yellow", "Micromax A091 C Engage Grey", "Micromax A093 White \u0026 Gold", "Micromax Aisha A52 White", "Micromax Bling 3 A86 White", "Micromax Bolt A068 Blue", "Micromax Bolt A068 White", "Micromax Bolt A075 Blue", "Micromax Bolt A089 Black", "Micromax Bolt A089 White", "Micromax Bolt A24 Champange", "Micromax Bolt A36 Black", "Micromax Bolt A37 Black", "Micromax Bolt A37B Black", "Micromax Bolt A46 Black", "Micromax Bolt A47 Black", "Micromax Bolt A58 Black", "Micromax Bolt A58 Red", "Micromax Bolt A59 Grey", "Micromax Bolt A61 Grey", "Micromax Bolt A62 Black", "Micromax Bolt A62 White", "Micromax Bolt A66 Black", "Micromax Bolt A67 Black", "Micromax Bolt A67 White", "Micromax Bolt A69", "Micromax Bolt A71 Black", "Micromax Bolt A71 White", "Micromax Bolt GC232 Black \u0026 Silver", "Micromax Bolt X101 White", "Micromax Bolt X287 Grey", "Micromax C210 White", "Micromax CDMA C200 Black \u0026 White", "Micromax CG666 Black \u0026 Grey", "Micromax CG666 White", "Micromax Canvas 2 Colors A120 with 4 GB ROM Grey", "Micromax Canvas 2 Colors A120 with 4 GB ROM White", "Micromax Canvas 2 Colors A120 with 8 GB ROM Grey", "Micromax Canvas 2.2 A114 Black", "Micromax Canvas 2.2 A114 White", "Micromax Canvas 4 A210 Grey", "Micromax Canvas Blaze HD EG116 Black", "Micromax Canvas Blaze MT500", "Micromax Canvas Doodle 2 A240 Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM White", "Micromax Canvas Doodle 3 A102 with 512 MB RAM Blue", "Micromax Canvas Doodle 3 A102 with 512 MB RAM White", "Micromax Canvas Doodle A111 White", "Micromax Canvas Duet AE90 Black", "Micromax Canvas Ego A113 Grey", "Micromax Canvas Elanza 2 A121 Black", "Micromax Canvas Elanza A93 Black Silver", "Micromax Canvas Elanza A93 Blue \u0026 Grey", "Micromax Canvas Elanza A93 Coffee", "Micromax Canvas Entice A105 Grey", "Micromax Canvas Fire A093 Black \u0026 Gold", "Micromax Canvas Fire A104 Black Gold", "Micromax Canvas Fun A63 Blue", "Micromax Canvas Fun A63 Yellow", "Micromax Canvas Fun A76 Black", "Micromax Canvas Gold A300 Black Gold", "Micromax Canvas Gold A300 White Gold", "Micromax Canvas HD Plus A190 Black", "Micromax Canvas Juice A177 Black", "Micromax Canvas Juice A77 White", "Micromax Canvas Knight A350 Black", "Micromax Canvas Knight A350 Black \u0026 Gold", "Micromax Canvas Knight A350 White \u0026 Gold", "Micromax Canvas Knight Cameo A290 White \u0026 Gold", "Micromax Canvas L A108 Blue", "Micromax Canvas Magnus A117 Blue", "Micromax Canvas Music A88 Black", "Micromax Canvas Music A88 White", "Micromax Canvas Power A96 Black", "Micromax Canvas Turbo A250 White", "Micromax Canvas Turbo Mini A200 Black", "Micromax Canvas Turbo Mini A200 White", "Micromax Canvas Win W121", "Micromax Canvas XL A119 White", "Micromax Canvas XL2 A109 White", "Micromax EG111 Black", "Micromax Fire 2 A104 White", "Micromax GC222 Black", "Micromax GC222 White", "Micromax GC666 Black \u0026 Grey", "Micromax Knight Cameo A290 White", "Micromax MAd A94 Grey", "Micromax Ninja A91 Black", "Micromax Rockstar C192 Black", "Micromax Smarty 3.0 A30 Black", "Micromax Smarty 4.3 A65 White", "Micromax Unite 2 A106 with 4 GB ROM Green", "Micromax Unite 2 A106 with 4 GB ROM Grey", "Micromax Unite 2 A106 with 4 GB ROM Red", "Micromax Unite 2 A106 with 4 GB ROM White", "Micromax Unite 2 A106 with 8 GB ROM Grey, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM Red, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM White, with 8 GB ROM", "Micromax Unite A092 Black", "Micromax Unite A092 Grey", "Micromax Unite A092 Red", "Micromax Unite A092 White", "Micromax Unite A092 Yellow", "Micromax X084 Black \u0026 Red", "Micromax X084 White Silver", "Micromax X085 Black \u0026 Red", "Micromax X086 White", "Micromax X088 Black \u0026 Red", "Micromax X088 Black \u0026 Silver", "Micromax X089 Black", "Micromax X096 Black", "Micromax X096 White", "Micromax X097 Black", "Micromax X098 Grey", "Micromax X098 Red", "Micromax X101i White", "Micromax X101i Yellow", "Micromax X103i White", "Micromax X103i Yellow", "Micromax X247 Black", "Micromax X249 Black", "Micromax X251 Grey", "Micromax X253 Black", "Micromax X254 Grey", "Micromax X258 Black", "Micromax X267 Black", "Micromax X267 White", "Micromax X279i Grey", "Micromax X281 Grey", "Micromax X282 Grey", "Micromax X325 Grey", "Micromax X328 Grey", "Micromax X329 Black", "Micromax X337 Grey", "Micromax X351 Black Silver", "Micromax X367 Grey", "Micromax X44 Pearl White", "Micromax X455i White", "Micromax X55 Coffee", "Moto E Black", "Moto E White", "Moto X 16 GB Bamboo", "Moto X 16 GB Black", "Moto X 16 GB Red", "Moto X 16 GB Teak", "Moto X 16 GB Walnut", "Moto X 16 GB White", "Mtech A6 Infinity Black", "Mtech A6 Infinity White", "Mtech Fusion Black", "Mtech Fusion Blue", "Mtech G 14 Black", "Mtech G22 Black", "Mtech G22 White", "Mtech G4 Black", "Mtech Jazz Black", "Mtech Jazz White", "Mtech L6 Black", "Mtech L6 Blue", "Mtech L6 Brown", "Mtech Lotus Black", "Mtech Opal 3G Black \u0026 White", "Mtech Pride Blue", "Mtech Pride Red", "Mtech Rock Black", "Mtech Sharp Black", "Mtech Sharp Cyan", "Mtech Sharp Golden", "Mtech Spark Black", "Mtech Spark Black \u0026 White", "Mtech Spark Blue", "Mtech Touch Opal PRO Grey", "Mtech Touch Opal PRO White", "Mtech V22 Black", "Mtech V22 White", "Nokia 105 Black", "Nokia 105 Cyan", "Nokia 106 Black", "Nokia 106 Red", "Nokia 106 White", "Nokia 107 Black", "Nokia 107 Red", "Nokia 107 White", "Nokia 108 Black", "Nokia 108 Cyan", "Nokia 108 Red", "Nokia 108 White", "Nokia 108 Yellow", "Nokia 112 Red", "Nokia 112 White", "Nokia 114 Black", "Nokia 114 Cyan", "Nokia 206 Black, with Dual SIM", "Nokia 206 Cyan, with Dual SIM", "Nokia 206 White, with Dual SIM", "Nokia 208DS Black, with Dual SIM", "Nokia 208DS Red, with Dual SIM", "Nokia 220 Black", "Nokia 220 Red", "Nokia 220 White", "Nokia 220 Yellow", "Nokia 225 Black", "Nokia 225 Bright Red", "Nokia 225 Bright Yellow", "Nokia 225 White", "Nokia 301 Black", "Nokia 301 White", "Nokia 515 Black", "Nokia 515 White", "Nokia Asha 210 Black", "Nokia Asha 210 Cyan", "Nokia Asha 210 Yellow", "Nokia Asha 230 Black", "Nokia Asha 230 Bright Red", "Nokia Asha 230 White", "Nokia Asha 305 Dark Grey", "Nokia Asha 305 Mid Blue", "Nokia Asha 305 Silver White", "Nokia Asha 308 Golden Light", "Nokia Asha 310 White", "Nokia Asha 311 Dark Grey", "Nokia Asha 311 Sand White", "Nokia Asha 500 Black", "Nokia Asha 500 Bright Red", "Nokia Asha 500 White", "Nokia Asha 500 Yellow", "Nokia Asha 501 Black", "Nokia Asha 501 Bright Red", "Nokia Asha 501 White", "Nokia Asha 501 Yellow", "Nokia Asha 502 Black", "Nokia Asha 502 Bright Red", "Nokia Asha 502 White", "Nokia Asha 502 Yellow", "Nokia Asha 503 Black", "Nokia Asha 503 Bright Red", "Nokia Asha 503 White", "Nokia Asha 503 Yellow", "Nokia Lumia 1320 Black", "Nokia Lumia 1320 Orange", "Nokia Lumia 1320 White", "Nokia Lumia 1320 Yellow", "Nokia Lumia 1520 Black", "Nokia Lumia 1520 Red", "Nokia Lumia 1520 White", "Nokia Lumia 1520 Yellow", "Nokia Lumia 520 Black", "Nokia Lumia 520 Cyan", "Nokia Lumia 520 Red", "Nokia Lumia 520 White", "Nokia Lumia 520 Yellow", "Nokia Lumia 525 Black", "Nokia Lumia 525 Orange", "Nokia Lumia 525 White", "Nokia Lumia 525 Yellow", "Nokia Lumia 530 Dual SIM Bright Orange", "Nokia Lumia 530 Dual SIM Dark Grey", "Nokia Lumia 530 Dual SIM White", "Nokia Lumia 610 Cyan", "Nokia Lumia 610 White", "Nokia Lumia 620 Black", "Nokia Lumia 620 White", "Nokia Lumia 620 Yellow", "Nokia Lumia 625 Black", "Nokia Lumia 625 Green", "Nokia Lumia 625 Orange", "Nokia Lumia 625 White", "Nokia Lumia 625 Yellow", "Nokia Lumia 630 Dual SIM Black", "Nokia Lumia 630 Dual SIM Bright Green", "Nokia Lumia 630 Dual SIM Bright Orange", "Nokia Lumia 630 Dual SIM Bright Yellow", "Nokia Lumia 630 Dual SIM White", "Nokia Lumia 630 Single SIM Black", "Nokia Lumia 630 Single SIM Bright Green", "Nokia Lumia 630 Single SIM Bright Orange", "Nokia Lumia 630 Single SIM Bright Yellow", "Nokia Lumia 630 Single SIM White", "Nokia Lumia 920 White", "Nokia Lumia 925 Black", "Nokia Lumia 925 Grey", "Nokia Lumia 925 White", "Nokia X Black", "Nokia X Bright Green", "Nokia X Bright Red", "Nokia X Cyan", "Nokia X White", "Nokia X Yellow", "Nokia X+ Black", "Nokia X+ Bright Green", "Nokia X+ Yellow", "Nokia XL Black", "Nokia XL Bright Green", "Nokia XL Bright Orange", "Nokia XL Bright Yellow", "Nokia XL Cyan", "Nokia XL White", "Nuclear SX 5.3i Smartphone Black", "OPPO Find 5 Mini R827 Black", "OPPO Find 5 Mini R827 White", "OPPO Find 7 X9076 Black", "OPPO Find 7 X9076 White", "OPPO Find 7a X9006 Black", "OPPO Find 7a X9006 White", "OPPO Joy R1001 Black", "OPPO Joy R1001 White", "OPPO N1 Mini Lemon", "OPPO N1 Mini Mint", "OPPO N1 Mini White", "OPPO N1 White", "OPPO Neo 3 R831K Grey", "OPPO Neo 3 R831K White", "OPPO R1 829 Black", "OPPO R1 829 White", "OPPO Yoyo R2001 Black", "OPPO Yoyo R2001 White", "Olive V-C2130 Black", "Onida G Series G180 Black", "Onida G Series G181 Black \u0026 Red", "Onida G007S Black", "Onida G182 Black", "Onida G183 Black \u0026 Red", "Onida G183 Multicolor", "Onida G242 Black \u0026 Red", "Onida G640A Grey \u0026 Silver", "Onida i011 Black", "Onida i011 White", "Onida i099 Black", "Onida i666 W4413 White", "Onida i666 White", "Onida i777 W4213 White", "Panasonic Eluga A White", "Panasonic Eluga U Black", "Panasonic Eluga U White", "Panasonic GD 28 Black", "Panasonic GD21 Grey", "Panasonic GD31 Black", "Panasonic GD31 White", "Panasonic P11 with Changeable Back Covers", "Panasonic P31 Midnight Blue", "Panasonic P31 Pure White", "Panasonic P41 Black", "Panasonic P51 Black", "Panasonic P51 White", "Panasonic P61 Black", "Panasonic P61 White", "Panasonic P81 Black", "Panasonic T11 White", "Panasonic T21", "Panasonic T31 Black", "Panasonic T31 White", "Panasonic T41 Black", "Panasonic T41 White", "Rage Ace_Black Red", "Rage Ace_Blue Black", "Rage Ace_Green Black", "Rage Ace_White White", "Rage Duke_Green Green", "Rage Glory_Black Silver", "Rage Hero Black \u0026 Grey", "Rage Hero Black \u0026 Red", "Rage Hero White \u0026 Blue", "Rage Magic-50 Black", "Rage Magic-50 White", "Rage Minni_White White", "Rage OPS 35g Blue", "Rage OPS 60dn White", "Rage OPS 80 White", "Rage OPS 80d Black", "Rage OPS 80d White", "Rage OPS 80q Black", "Rage Ps16 Black \u0026 Silver", "Rage Ps16 White \u0026 Silver", "Rage Ps20 White \u0026 Red", "Rage Silk_Blue Black", "Rage Silk_Golden Black", "Rage Storm_Blue Blue", "Rage Storm_White White", "Rage Ultra Black", "Rage Vega White", "Salora SM204 Red", "Salora SM508 Blue \u0026 Black", "Salora SM601 Black \u0026 Gold", "Samsung E2252 Metallic Silver", "Samsung E2252 Pure White", "Samsung G350 White", "Samsung GT 1200 R/I/M", "Samsung Galaxy Ace NXT-G313H White", "Samsung Galaxy Core 2 SM-G355H Black", "Samsung Galaxy Core 2 SM-G355H White", "Samsung Galaxy Core I8262 Chic White", "Samsung Galaxy Golden I9230 Champagne Gold", "Samsung Galaxy Grand 2 Black", "Samsung Galaxy Grand 2 White", "Samsung Galaxy Grand Duos I9082 Elegant White, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Duos I9082 Metallic Blue, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Neo GT-I9060 Midnight Black", "Samsung Galaxy Grand Neo GT-I9060 White", "Samsung Galaxy Mega 5.8 I9152 White", "Samsung Galaxy Note 2 N7100 Marble White", "Samsung Galaxy Note 2 N7100 Titanium Grey", "Samsung Galaxy Note 3 N9000 Blush Pink", "Samsung Galaxy Note 3 N9000 Classic White", "Samsung Galaxy Note 3 N9000 Jet Black", "Samsung Galaxy Note 3 Neo Black", "Samsung Galaxy Note 3 Neo White", "Samsung Galaxy S Duos 2 S7582 Black", "Samsung Galaxy S Duos 2 S7582 Pure White", "Samsung Galaxy S3 Marble White, with 16GB", "Samsung Galaxy S3 Neo GT-I9300I Blue", "Samsung Galaxy S3 Neo GT-I9300I Marble White", "Samsung Galaxy S4 I9500 Black Mist", "Samsung Galaxy S4 I9500 Deep Black", "Samsung Galaxy S4 I9500 White Frost", "Samsung Galaxy S4 Mini I9192 Black Mist", "Samsung Galaxy S4 Mini I9192 White Frost", "Samsung Galaxy S4 Zoom SM-C1010 White", "Samsung Galaxy S5 Charcoal Black", "Samsung Galaxy S5 Copper Gold", "Samsung Galaxy S5 Electric Blue", "Samsung Galaxy S5 Shimmery White", "Samsung Galaxy Star Pro S7262 Midnight Black", "Samsung Galaxy Star Pro S7262 White", "Samsung Galaxy Star S5282 Ceramic White", "Samsung Galaxy Star S5282 Noble Black", "Samsung Galaxy Star S5282 Silver", "Samsung Galaxy Trend S7392 Ceramic White, with 4 GB", "Samsung Galaxy Trend S7392 Midnight Black", "Samsung Galaxy Y S5360 Pure White", "Samsung Guru 1200 Black", "Samsung Guru 1200 Indigo Blue", "Samsung Guru 1200 White", "Samsung Guru E1207T Black", "Samsung I8552 - Galaxy Grand Quattro Ceramic White", "Samsung I8552 - Galaxy Grand Quattro Titan Gray", "Samsung Keystone 2 E1207Y Black", "Samsung Metro DUOS C3322 Deep Black", "Samsung Omnia M S7530 Deep Gray", "Samsung S6812 - Galaxy Fame Metallic Blue", "Samsung S7262 Wine Red", "Sansui SA40 Black", "Sansui SA50 Plus Grey", "Simmtronics Xpad M1 Black", "Simmtronics Xpad Q1 Black", "Simmtronics Xpad Q4", "Simmtronics Xpad Q4 Black", "Simmtronics Xpad Q5 Black", "Sony Xperia C Black", "Sony Xperia C Purple", "Sony Xperia C White", "Sony Xperia C3 Black", "Sony Xperia C3 White", "Sony Xperia E Black", "Sony Xperia E Dual Champagne", "Sony Xperia E White", "Sony Xperia E1 Black", "Sony Xperia E1 Dual Black", "Sony Xperia E1 Dual Purple", "Sony Xperia E1 Dual White", "Sony Xperia E1 Purple", "Sony Xperia E1 White", "Sony Xperia Go Warm Yellow", "Sony Xperia L Rose Red", "Sony Xperia L Starry Black", "Sony Xperia M Black", "Sony Xperia M Dual Black", "Sony Xperia M Dual Purple", "Sony Xperia M Dual White", "Sony Xperia M Purple", "Sony Xperia M White", "Sony Xperia M2 Dual Black", "Sony Xperia M2 Dual Purple", "Sony Xperia M2 Dual White", "Sony Xperia Miro Black", "Sony Xperia Miro White with Silver Strip", "Sony Xperia Neo L Glossy Black", "Sony Xperia P Black", "Sony Xperia P Red", "Sony Xperia P Silver", "Sony Xperia SP Black", "Sony Xperia SP Red", "Sony Xperia SP White", "Sony Xperia T2 Ultra Black", "Sony Xperia T2 Ultra Purple", "Sony Xperia T2 Ultra White", "Sony Xperia T3 Black", "Sony Xperia T3 Purple", "Sony Xperia T3 White", "Sony Xperia Tipo Classic White", "Sony Xperia Tipo Dual Classic Silver", "Sony Xperia Z Black", "Sony Xperia Z Purple", "Sony Xperia Z Ultra Black", "Sony Xperia Z Ultra Purple", "Sony Xperia Z Ultra White", "Sony Xperia Z White", "Sony Xperia Z1 Black", "Sony Xperia Z1 Compact Black", "Sony Xperia Z1 Compact Lime", "Sony Xperia Z1 Compact Pink", "Sony Xperia Z1 Compact White", "Sony Xperia Z1 Purple", "Sony Xperia Z1 White", "Sony Xperia Z2 Black", "Sony Xperia Z2 Purple", "Sony Xperia Z2 White", "Sony Xperia ZR White", "Spice Boss Champion 2 M-5008 Black", "Spice Boss Chocolate M-5373 Black", "Spice Boss Delite M-5162 White", "Spice Boss Link M-5621 Black", "Spice Boss M-5470 Grey", "Spice Boss Slender 2 M-5404 White", "Spice Boss Slender M-5371", "Spice Boss Trendy 4 M-5004 Black", "Spice Boss Trendy 5 M-5032 White", "Spice Boss Trio M-5025 Black", "Spice Buddy N-300 Midnight Black", "Spice Coolpad 2 Mi-496 White", "Spice Flo Rainbow M-6111", "Spice Flo Sleek M-5915", "Spice M-5415 Black", "Spice Smart Flo Edge Mi-349 White", "Spice Smart Flo Mettle 3.5X Mi-356 White", "Spice Smart Flo Mettle 4X Mi-426 White", "Spice Smart Flo Mettle 5X Mi-504 Black", "Spice Smart Flo Mettle 5X Mi-504 White", "Spice Smart Flo Pace 3 Mi-502n White", "Spice Smart Flo Pace Mi-422 White", "Spice Smart Flo Poise Mi-451", "Spice Stellar 360", "Spice Stellar 361 Black", "Spice Stellar 361 White", "Spice Stellar 445 Black", "Spice Stellar 497 White", "Spice Stellar 506 Titanium Grey", "Spice Stellar 509", "Spice Stellar 520 Red", "Spice Stellar 520 Yellow", "Spice Stellar Glamor Mi-436", "Spice Stellar Glide Mi-438 Silver", "Spice Stellar Horizon Pro Mi-505 White", "Spice Stellar Mettle Icon Mi-506 Silver", "Spice Stellar Nhance 2 Mi-437", "Spice Stellar Pinnacle Pro Mi-535 Brown", "Spice Stellar Virtuoso Pro Mi-491 Black", "Spice Steller Virtuoso Pro+ Mi-492 White", "Swingtel Mini SX3 White", "Swingtel SW27 Black", "Swingtel SW27 White", "Swingtel SW30 Black", "Swingtel SW30 Silver", "Swingtel SW30 White", "Swingtel SW50+ Black", "Swingtel SW50+ Red", "Swingtel Superb White", "Swingtel Tigertab White, Red, Grey", "Swipe Fablet F2 White", "Swipe Konnect 5.0 Black", "Swipe Konnect 5.0 White", "Swipe Sense Black", "Swipe Sonic Black", "TVC Android 2.2 Smartphone Black", "Trio T2020L Black \u0026 Blue", "Trio T2020L Black \u0026 Grey", "Trio T2020L White \u0026 Blue", "Trio T2020XL Black \u0026 Blue", "Trio T2020XL Black \u0026 Gold", "Trio T2020XL Black White", "Trio T2424 Black \u0026 Green", "Trio T2424 Black \u0026 Red", "Trio T2424 White \u0026 Blue", "Trio T2424XL Black \u0026 Blue", "Trio T2424n Black \u0026 Blue", "Trio T2424n Black White", "Trio T2626 Black", "Trio T2626 White \u0026 Blue", "Trio T2626 White \u0026 Yellow", "Trio T2828 Black \u0026 Grey", "Trio T2828 Black White", "V3 Bizz GQ225 Grey", "Videocon A 54 White", "Videocon A 55q HD Black", "Videocon A15 Black", "Videocon A15 White Chrome", "Videocon A16 Black", "Videocon A16 White", "Videocon A42 Black", "Videocon A48 White", "Videocon A52 White", "Videocon A53 White Chrome", "Videocon A55 HD Black \u0026 Silver", "Videocon A55HD White", "Videocon Dost V1539 N Black Silver", "Videocon Dost V1615 Black", "Videocon Dost V1615 Silver", "Videocon V1508 Black", "Videocon V1544 Black \u0026 Silver", "Videocon vphone Gold", "Videocon vphone White", "Vox Kick 5 Black", "Vox Kick 5 White", "Vox V-3100 Black", "Vox V-3100 White", "Wham W20i Black", "Wham W24i Black", "Wham W26i Black", "Wynncom W101 Black", "Wynncom WYNNW412 Black", "XElectron AN1 Black", "XElectron BluEye Black", "XElectron M007 Black", "XElectron M998 Black", "XElectron N100 Black", "XElectron X1 White", "XElectron X1Black Black", "XOLO 8X-1000 Black", "XOLO A500 Club Black", "XOLO A500 Club White", "XOLO A500S Black", "XOLO A500S IPS Black", "XOLO A500S IPS Green", "XOLO A500S IPS Red", "XOLO A500S White", "XOLO A500s Lite Black", "XOLO A500s Lite White", "XOLO A550S IPS Black", "XOLO A600 Black", "XOLO A600 Blue", "XOLO A600 White", "XOLO A600 Yellow", "XOLO A700S Black", "XOLO LT900 Black", "XOLO Opus 2 Q1000 Black", "XOLO Play 6X-1000 Black", "XOLO Play 6X-1000 White", "XOLO Play Black", "XOLO Q1000 Black", "XOLO Q1000 Opus Black", "XOLO Q1000 Opus White", "XOLO Q1000 White", "XOLO Q1000S Black", "XOLO Q1000S Plus Black", "XOLO Q1010 White", "XOLO Q1010i Black", "XOLO Q1010i Coffee Brown", "XOLO Q1010i White", "XOLO Q1011 Black", "XOLO Q1011 White", "XOLO Q1100 Black", "XOLO Q1200 Black", "XOLO Q1200 White", "XOLO Q2000 White", "XOLO Q2000L White", "XOLO Q2500 Black", "XOLO Q3000 Black", "XOLO Q3000 White", "XOLO Q500S IPS Black", "XOLO Q500S IPS Green", "XOLO Q500S IPS Red", "XOLO Q600 White", "XOLO Q600S Black", "XOLO Q600S White", "XOLO Q700S Gold", "XOLO Q700S Plus Gold", "XOLO Q700S Silver", "XOLO Q700i Black", "XOLO Q900 White", "XOLO Q900S Black", "XOLO Q900T", "XOLO Win Q900s Black", "XOLO X1000 Black", "Y King Y 10 Black", "Y King Y 10 White", "Y King Y 20 Black", "Y King Y 30 Black", "Y King Y 30 White", "ZTE Blade C V807 Black", "ZTE Blade L V887", "ZTE Grand X Quad Lite Blue", "ZTE Grand X Quad Lite White", "ZTE Reliance d286 Black", "ZTE Reliance d286 White", "ZTE S183Reliance CDMA Only Black", "Zen 303 Power Black", "Zen 306 Ultrafone 306 Play Black \u0026 Red", "Zen 701 Amaze 701 Full Hd Black", "Zen P36 Black", "Zen U 504 B Black", "Zen U 504 W White", "Zen Ultrafone 502qHD Black", "Zook Boss Black", "Zook Brave Brown", "Zook Brilliant Grey", "Zook IMAX Blue", "Zook Iconic Black", "Zook Iconic Gold", "Zook Ideal Black", "Zook Ideal Gold", "Zook Keypad Sliver", "Zook Keypad White", "Zync Cloud Z401", "Zync X108 White", "Zync X207 Black", "iBall 4PIPS Gem Black", "iBall Andi 3.5 Classique With 1.3 Ghz Processor White", "iBall Andi 4.5 2G Grey", "iBall Andi 4.5 2G Ripple White", "iBall Andi 4.5 3G Ripple White", "iBall Andi 4.5 3G Wine \u0026 Gunmetal", "iBall Andi 4.5D Royale", "iBall Andi 4.7G Cobalt", "iBall Andi 5-M8 Black", "iBall Andi 5.5N2 Quadro", "iBall Andi 5K Sparkle White White", "iBall Andi 5K Sparkle Wine Special Wine", "iBall Andi 5T Cobalt 2", "iBall Andi Uddaan", "iBall Andi3.5kke Genius Black", "iBall Andi3.5kke Genius White", "iBall Andi3.5kke Winner Black", "iBall Andi3.5kke Winner White", "iBall Andi4 B2 Black", "iBall Andi4 Gem Black", "iBall Andi4 Gem White", "iBall Andi4 Velvet Black", "iBall Andi4 Velvet White", "iBall Andi4.5P Glitter White", "iBall Andi4.5P Glitter Yellow", "iBall Andi4.5Q White", "iBall Andi4.5d Royale White", "iBall Andi5-E7 Grey", "iBall IPS Tiger Andi4 Royal Blue", "iBall Iball Vogue 2.8A Slim Bar Design White White", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Black", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Yellow", "iBall King1.8D White", "iBall Senior Aasaan2 White", "iBall Shaan Fab2.4V8 Black \u0026 Blue", "iBall Shaan Fab2.4V8 Black \u0026 Yellow", "iBall Vogue 1.8-KK18 Black", "iBall Vogue 1.8-KK7 Yellow", "iBall Vogue 2.4 kk1 Grey", "iBall Vogue2.4e Black", "iBall iBall Andi 3.5kke Glory Special Wine", "iBall iBall Vogue 2.8A Slim Bar Design Grey Grey"]


        $scope.pricedivisionswatch = [
            {
                price: "Rs. 2000 and below"
            },
            {
                price: "Rs 2001 - 5000"
            },
            {
                price: "Rs 5001 - 10000"
            },
            {
                price: "Rs 10001 - 18000"
            },
            {
                price: "Rs 18001 - 25000"
            },
            {
                price: "Rs 25001 - 35000"
            },
            {
                price: "Rs 35001 and above"
            }
        ];


        // watch divisions for changes
        $scope.$watch('watchesdivisions|filter:{selected:true}', function (nv) {
            $scope.watchtradeshow.watchDivisions = nv.map(function (division) {
                //alert(division.brand);
                console.log({name: division.brand});
                return {name: division.brand};
            });

            var display = 0;
            if (angular.toJson($scope.watchtradeshow.watchDivisions).length > 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length > 0
                && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length > 0) {
                //show brand, color and price
                display = 1;
            } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length > 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length > 0
                && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length < 0) {
                //show only brand and color
                display = 2;
            } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length > 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length < 0
                && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length < 0) {
                //show only brand
                display = 3;
            } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length < 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length > 0
                && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length > 0) {
                //show only color and price
                display = 4;
            } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length < 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length > 0
                && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length < 0) {
                //show only color
                display = 5;
            } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length < 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length < 0
                && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length < 0) {
                //show none
                display = 6;
            } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length < 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length < 0
                && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length > 0) {
                //show price
                display = 7;
            }

            switch (display) {
                case 1:
                    $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                        color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                    break;
                case 2:
                    $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                        color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.priceDivisionswatch)});
                    break;
                case 3:
                    $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                        color: angular.toJson($scope.colorDivisionswatch), price: angular.toJson($scope.priceDivisionswatch)});
                    break;
                case 4:
                    $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                        color: angular.toJson($scope.colortradeshowwatch.colorDivisions), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                    break;
                case 5:
                    $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                        color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.priceDivisionswatch)});
                    break;
                case 6:
                    //  $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                    //    color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                    break;
                case 7:
                    $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                        color: angular.toJson($scope.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                    break;
                default:
                    break;
            }


            console.log("tradeshowwatch" + angular.toJson($scope.watchtradeshow.watchDivisions));
            //$location.path('/view2');
        }, true);


        $scope.colortradeshowwatch = { };
        $scope.colortradeshowwatch.colorDivisionswatch = [];


        // helper method
        $scope.selectedColorDivisionswatch = function selectedColorDivisionswatch() {
            return filterFilter($scope.colortradeshowwatch.colorDivisionswatch, { selected: true });
        };

        // watch divisions for changes
        $scope.$watch('colordivisionswatch|filter:{selected:true}', function (nv1) {
            $scope.colortradeshowwatch.colorDivisionswatch = nv1.map(function (colordivisionwatch) {
                //alert(division.brand);
                console.log({color: colordivisionwatch.color});
                return {color: colordivisionwatch.color};
            });
            $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
            console.log("colortradeshowwatch" + angular.toJson($scope.colortradeshowwatch.colorDivisionswatch));
            //  $location.path('/view2');
        }, true);


        $scope.pricetradeshowwatch = { };
        $scope.pricetradeshowwatch.priceDivisionswatch = [];


        // helper method
        $scope.selectedPriceDivisionswatch = function selectedPriceDivisionswatch() {
            return filterFilter($scope.pricetradeshowwatch.priceDivisionswatch, { selected: true });
        };


        // watch divisions for changes
        $scope.$watch('pricedivisionswatch|filter:{selected:true}', function (nv2) {
            $scope.pricetradeshowwatch.priceDivisionswatch = nv2.map(function (pricedivisionwatch) {
                //alert(division.brand);
                console.log({price: pricedivisionwatch.price});
                return {price: pricedivisionwatch.price};
            });
            $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
            console.log("pricetradeshowwatch" + angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch));
            // $location.path('/view2');
        }, true);


        $scope.getWatchInfo = function (product) {
            console.log("getProductInfo - " + product.productName);
            //$rootScope.productInfo = UserFactory.productdetails.query({key: product.productName});

            $rootScope.pricecompare = {productName: ""};
            $rootScope.pricecompare = ProductFactory.productdetails.query({key: product.productName});
            console.log("price compare - " + $rootScope.pricecompare.length);

            $rootScope.productInfo = product;
            $rootScope.image = product.productImage;
            console.log("productInfo length - " + product.productImage);
            console.log("productInfo length - " + $rootScope.image);
            console.log("productInfo length - " + $scope.productInfo.productName);

            $scope.$watch($rootScope.productInfo, function (newVal) {
                //alert("Changed an input");
            }, true);

            $scope.$watch($rootScope.pricecompare, function (newVal) {
                //alert("Changed an input");
            }, true);

            //  $location.path('/view2');
        }


    }]);


app.controller('watchesWomenCtrl', ['$scope', '$rootScope', '$location', 'UserFactory', 'ProductFactory', '$q', function ($scope, $rootScope, $location, UserFactory, ProductFactory, $q) {


    $scope.items = [
        { id: 1, name: 'Books'},
        { id: 2, name: 'Mobile'}
    ];


    $scope.menWatches = function () {
        console.log("menWatches");
        $rootScope.loading = true;
        $rootScope.watchlist = ProductFactory.home.query({productcategory: 'Men Watches'});
        $rootScope.loading = false;
        var pagesShown = 1;
        var pageSize = 30;

        $scope.paginationLimit = function (data) {
            //alert("34");
            return pageSize * pagesShown;
        };
        $scope.hasMoreItemsToShow = function () {
            return pagesShown < ($rootScope.watchlist.length / pageSize);
        };
        $scope.showMoreItems = function () {
            pagesShown = pagesShown + 1;
        };

        $scope.$watch($rootScope.watchlist, function (newVal) {
            //alert("Changed an input");
        }, true);

        $location.path('/watches');
    }


    $scope.womenWatches = function () {
        console.log("womenWatches");

        $rootScope.watchlist = ProductFactory.home.query({productcategory: 'Women Watches'});

        var pagesShown = 1;
        var pageSize = 30;

        $scope.paginationLimit = function (data) {
            //alert("34");
            return pageSize * pagesShown;
        };
        $scope.hasMoreItemsToShow = function () {
            return pagesShown < ($rootScope.watchlist.length / pageSize);
        };
        $scope.showMoreItems = function () {
            pagesShown = pagesShown + 1;
        };

        $scope.$watch($rootScope.watchlist, function (newVal) {
            //alert("Changed an input");
        }, true);

        $location.path('/watches');
    }


    $scope.watchesdivisions = ProductFactory.womenwatchbrands.query();

    $scope.watchtradeshow = { };
    $scope.watchtradeshow.watchDivisions = [];

    // selected divisions
    //$scope.selection = [];

    // helper method
    $scope.selectedDivisionswatch = function selectedDivisionswatch() {
        return filterFilter($scope.watchtradeshow.watchDivisions, { selected: true });
    };


    $scope.colordivisionswatch = [
        {
            color: "White"
        },
        {
            color: "Yellow"
        },
        {
            color: "Pink"
        },
        {
            color: "Black"
        },
        {
            color: "Grey"
        }
    ];


    $scope.typeahead = ["ADCOM A-430I PS Black", "ADCOM Smartphone A-350i Black", "ADCOM Smartphone A-350i White", "ADCOM Smartphone A-500 Black", "ADCOM Smartphone A-500 White", "ADCOM Thunder A-350 Black", "ADCOM Thunder A-350 White", "ADCOM Thunder A-400 Black", "ADCOM Thunder A-400 White", "ADCOM Thunder A-400i Black", "ADCOM Thunder A-400i White", "ADCOM Thunder A-430 White", "ADCOM X8 Black", "ADCOM X8 White", "ADCOM X9 Black", "ADCOM X9 Red", "Adcom X10 Black", "Adcom X10 White", "Adcom X11 Black", "Adcom X12 Black", "Adcom X14 Black", "Adcom X14 Grey", "Adcom X28 Silver", "Alcatel 890D Silver", "Alcatel One Touch J636d+ Black", "Alcatel Onetouch Idol Mini 6012D", "Alcatel Onetouch Idol X+ Bluish Black, with 16 GB", "Alcatel Onetouch Idol X+ White, with 16 GB", "Apple iPhone 4 Black, with 16 GB", "Apple iPhone 4 Black, with 8 GB", "Apple iPhone 4 White, with 16 GB", "Apple iPhone 4 White, with 8 GB", "Apple iPhone 4S Black, with 8 GB", "Apple iPhone 4S White, with 8 GB", "Apple iPhone 5C 8 GB Blue, with 8 GB", "Apple iPhone 5C 8 GB Green, with 8 GB", "Apple iPhone 5C 8 GB Pink, with 8 GB", "Apple iPhone 5C 8 GB White, with 8 GB", "Apple iPhone 5C 8 GB Yellow, with 8 GB", "Apple iPhone 5C Blue, with 16 GB", "Apple iPhone 5C Blue, with 32 GB", "Apple iPhone 5C Green, with 16 GB", "Apple iPhone 5C Green, with 32GB", "Apple iPhone 5C Pink, with 16 GB", "Apple iPhone 5C Pink, with 32GB", "Apple iPhone 5C White, with 16 GB", "Apple iPhone 5C White, with 32GB", "Apple iPhone 5C Yellow, with 16 GB", "Apple iPhone 5C Yellow, with 32GB", "Apple iPhone 5S Gold, with 16 GB", "Apple iPhone 5S Gold, with 32 GB", "Apple iPhone 5S Gold, with 64 GB", "Apple iPhone 5S Silver, with 16 GB", "Apple iPhone 5S Silver, with 32 GB", "Apple iPhone 5S Silver, with 64 GB", "Apple iPhone 5S Space Grey, with 16 GB", "Apple iPhone 5S Space Grey, with 32 GB", "Apple iPhone 5S Space Grey, with 64 GB", "Arise Bingo AX111 Black", "Arise Imperia AX282 Black", "Arise Magnet AX251 Black", "Asus Zenfone 4 A400CG Black, with 8 GB", "Asus Zenfone 4 A400CG Blue, with 8 GB", "Asus Zenfone 4 A400CG Red, with 8 GB", "Asus Zenfone 4 A400CG White, with 8 GB", "Asus Zenfone 4 A400CG Yellow, with 8 GB", "Asus Zenfone 4 A450CG Black, with 8 GB", "Asus Zenfone 4 A450CG Solar Yellow, with 8 GB", "Asus Zenfone 4 A450CG White, with 8 GB", "Asus Zenfone 6 A600CG / A601CG Black, with 16 GB", "Asus Zenfone 6 A600CG / A601CG Red, with 16 GB", "Atom Supremus White", "Atom Ultimus White", "BLU B10 BLK Black", "BLU B10 JUMBO R Black", "BLU B10 JUMBO Y Black", "BLU B10 R Black", "BLU B10 Y Black", "BLU B10+ B Blue", "BLU B10+ O Orange", "BLU B10+ R Red", "BLU B10+ Y Yellow", "BLU B23 B Black", "BLU B23 G Black", "BLU B23 R Black", "BLU B23 Y Black", "BLU B306A BLK Black", "BLU B306A W White", "BLU B307 BLK Black", "BLU B307 W White", "BLU B309A W White", "BLU B41 BLK Grey", "BLU B41 Gry Black", "BQ K12 Grey", "BQ K15 Grey", "BQ K18 Blue", "BQ K26 Green", "BQ K27 Gold", "BQ K28 White", "BQ K29 Black", "BQ K50 Grey", "BQ K80 Blue", "BQ S35 Red", "BQ S36 Black", "BQ S37 Black", "BQ S37 White", "BQ S60 Black", "BSNL-Champion Champion Apna Phone SQ241 Power Black", "BSNL-Champion Champion My Phone 51 Black", "BSNL-Champion Champion My Phone 51 White", "BSNL-Champion DM6513 White", "BSNL-Champion Myphone 41 Black", "BSNL-Champion Pro SQ181 Black", "BSNL-Champion SM3513 Black", "BSNL-Champion SQ 181 power Black", "BSNL-Champion SQ 181 power White", "BSNL-Champion SQ 241 Sleek Black", "BSNL-Champion SQ 241 Sleek White", "BSNL-Champion SQ241 SQ241 Black", "BSNL-Champion SQ281 SQ281 Black", "Belkin Skype V1000 Black", "BlackBerry 9720 Black", "BlackBerry 9720 White", "BlackBerry Bold 9790 Pink", "BlackBerry Curve 3G 9300 Pink", "BlackBerry Curve 9220 Black", "BlackBerry Q10 Black", "BlackBerry Q10 White", "BlackBerry Torch 9810 White", "BlackBerry Torch 9810 Zinc Grey", "BlackBerry Torch 9860 Shadow Grey", "BlackBerry Z10 Charcoal Black", "BlackBerry Z10 Pure White", "BlackBerry Z3 Black, with 8 GB", "BlackBerry Z30 Black", "BlackBerry Z30 White", "Blackberry Curve 9320 Black", "Byond B50 Black", "Celkon A10 3G Campus Series Black", "Celkon A107+ Smart Phone White", "Celkon A112 Signature Swift Black", "Celkon A112 White", "Celkon A119Q A 119 Q Smart Phone Black", "Celkon C349* Black", "Celkon C5 Star White", "Celkon C56 Black", "Celkon C6* Black \u0026 Red", "Celkon C605 Black", "Celkon C7045 Black", "Celkon Campus A20 White", "Celkon Campus A225 White", "Celkon Campus A35K Blue", "Celkon Campus A40 Yellow", "Celkon Campus A42 Black", "Celkon Campus A43 Black", "Celkon Campus A66 Black", "Celkon Campus A66 White", "Celkon Campus A9Dual White \u0026 Black", "Celkon Campus Mini A350 White", "Celkon Campus Series A20 Smart Phone Black", "Celkon Celkon Campus Series A 63 Smart Phone Campus Series A63 Black", "Celkon Feature Phone C297 Black", "Celkon Feature Phone C297 White", "Celkon Feature Phone C9 Jumbo White", "Celkon Millennium Q44 Black", "Celkon Millennium Q455 Black", "Celkon Millennium Q455 Blue", "Celkon Millennium Q455 White", "Celkon Millennium Q470 White", "Celkon Signature 118 HD Black", "Celkon Signature A115 White", "Celkon Signature Two A500 Black", "DOMO nTice G12 Phablet Mobile Smartphone White", "Datawind PocketSurfer3G5", "Datawind PocketSurfer5 White", "Datawind PocketSurfer5X Black", "Dell Venue V03B Black", "Devante Boss 1 Black", "Devante Boss 1 White", "Devante Boss 2 Black", "Devante Boss 2 Blue", "Devante Boss 2 White", "Devante Dynamite White", "Devante Hero 1 Subway Series S1 Black", "Devante Hero 1 Subway Series S1 White", "Devante Thunder Black", "Digimac 3X Black", "Digimac 3X White", "Digimac EXI Black", "Digimac EXI White", "Digimac Fusion Black", "Digimac Fusion White", "Digimac VIVO Black", "Digimac VIVO White", "Forme C101 Black", "Forme Coke A1 Red", "Forme D516 Black", "Forme D516 Black \u0026 Red", "Forme D516 Champagne", "Forme D555+ Grey", "Forme D555+ Red", "Forme D556 Black \u0026 Red", "Forme D815 Black", "Forme D815 Red", "Forme Discovery P9 Black", "Forme Discovery P9 Blue", "Forme Discovery P9 plus Black", "Forme Discovery P9 plus Blue", "Forme Energy D9 Black", "Forme F10 Black \u0026 Red", "Forme F8+ Silver", "Forme Fantasy F10 Black", "Forme Fantasy F10 Red", "Forme Find F105 Red", "Forme Forever F8 Red", "Forme Forever F8 Silver", "Forme Hero Blue", "Forme Honey Hero Black", "Forme Hope H1 Black", "Forme Hope H1 Blue \u0026 Black", "Forme Inspire V8 Black", "Forme Inspire V8 Brown", "Forme Inspire V8 Silver", "Forme K1 Black \u0026 Red", "Forme King K1 Red", "Forme L100 White \u0026 Silver", "Forme L600 Red", "Forme L900 Red", "Forme L900 White", "Forme L900 White \u0026 Red", "Forme Love One Black", "Forme Love One Brown", "Forme Love One Red", "Forme M20 White", "Forme M60 Pink", "Forme M600 Red", "Forme M600 White", "Forme M660 Red", "Forme M660 White", "Forme M80 Red", "Forme M90 Black", "Forme Mini 5130 Black", "Forme Onion K806 Black", "Forme Onion K806 White", "Forme P9 Plus Black", "Forme Power One A60 Black", "Forme Power Two M22 Grey", "Forme Power Two M22 Red", "Forme Queen K08-grey Grey", "Forme Queen K08-red Red", "Forme Queen K08-white White", "Forme S10 Silver \u0026 Green", "Forme Summer S700 Pink", "Forme Summer S700 Purple", "Forme Summer S700 Red", "Forme Summer S700 White", "Forme Sunny S60 Black", "Forme Sunny S60 Blue", "Forme Sunny S60 Orange", "Forme Surprise P10 Black", "Forme Surprise S10 Green", "Forme Surprise S10 Red", "Forme Surprise S11 Black", "Forme Surprise S11 Red", "Forme T4 Silver", "Forme Teddy T2 Green", "Forme Teddy T2 White", "Forme Teddy T3 Black", "Forme Teddy T3 Red", "Forme Teddy T4 Green", "Forme Teddy T4 Silver", "Forme V8 White", "Forme Venus V11 Black", "Forme Venus V11 Red", "Forme W3 Gold", "Forme Winner W3 Blue \u0026 Silver", "Forme Winner W3 Gold", "Forme Winner W3 Grey", "Funtab Phablet Fone PHA6.4 White", "Gee Pee 3dh 4430 Black", "Gionee CTRL V5 White", "Gionee E7 Mini", "Gionee Elife E3 Black", "Gionee Elife E6 Black", "Gionee Elife E7 16 GB Black, with 16 GB", "Gionee Elife E7 16 GB White, with 16 GB", "Gionee Elife E7 32 GB Black, with 32 GB", "Gionee Elife E7 32 GB White, with 32 GB", "Gionee Elife S5.5 Black", "Gionee Elife S5.5 White", "Gionee G1 Black", "Gionee Gpad G3 White", "Gionee Gpad G4 Black", "Gionee Gpad G4 White", "Gionee Long L700 Black", "Gionee Long L700 Silver", "Gionee M2 Black", "Gionee M2 White", "Gionee P2 Black", "Gionee P2S Black", "Gionee P2S White", "Gionee Pioneer P3 Black", "Gionee Pioneer P3 White", "Gionee Pioneer P4 Black", "Gionee Pioneer P4 White", "Gionee Slim S80 Black", "Gionee Slim S80 Grey", "Gionee V5 Black", "Google Nexus 4 Black", "Google Nexus 4 White, with Headphone", "Google Nexus 5 Black, with 16 GB", "Google Nexus 5 Black, with 32 GB", "Google Nexus 5 White, with 16 GB", "Google Nexus 5 White, with 32 GB", "HP Slate 6 Voice Tab", "HTC 709D Desire 700 White", "HTC A620E 8S Fiesta Red", "HTC Desire 210 Dual SIM D210h Black", "HTC Desire 210 Dual SIM D210h White", "HTC Desire 310 Dual SIM Arctic White", "HTC Desire 310 Dual SIM Matte Blue", "HTC Desire 310 Flipcovers Blue", "HTC Desire 500 Glacier Blue", "HTC Desire 500 Glossy Black", "HTC Desire 500 Passion Red", "HTC Desire 516 Dark Grey", "HTC Desire 516 Grey", "HTC Desire 516 Pearl White", "HTC Desire 516 White", "HTC Desire 600 Stealth Black", "HTC Desire 600 White", "HTC Desire 600C Black, with Dual SIM", "HTC Desire 600C White, with Dual SIM", "HTC Desire 601 Black, with Dual SIM", "HTC Desire 616 Dual Sim Dark Gray", "HTC Desire 616 Dual Sim White", "HTC Desire 700 Black", "HTC Desire 816 Dark Grey", "HTC Desire 816 White", "HTC Desire SV Stealth Black", "HTC Desire SV Yellow", "HTC Desire T329D XC Black Stone", "HTC Desire T329D XC Fabulous White", "HTC Desire T329W X Dual SIM White, with Dual SIM", "HTC E8 Dual SIM White", "HTC ONE E8 M8Sd Red", "HTC One 802d Black, with Dual SIM", "HTC One 802d Silver, with Dual SIM", "HTC One E8", "HTC One M8 Amber Gold", "HTC One M8 Glacial Silver", "HTC One M8 Gunmetal Grey", "HTC One Max Silver White", "HTC One Mini Black", "HTC One Mini Blue", "HTC One V T320 Jupitor Rock", "HTC T327W Desire U DS White", "Haier C380 Black", "Haier C380 White", "Hitech Air A1 White", "Hitech Amaze S-800 Black", "Hitech Amaze S410 White", "Hitech F2i Blue", "Hitech G11 Black", "Hitech G15 Black", "Hitech G5 Black", "Hitech H2i Red", "Hitech HT-850 Black", "Hitech HT820 Black", "Hitech HT830 Grey", "Hitech HT880 Black", "Hitech Kick 515 Black", "Hitech Micra - 110 Black", "Hitech Micra 115 Black", "Hitech Micra 120 Black", "Hitech Micra 150 Black", "Hitech Pride 302 Black \u0026 Silver", "Hitech Pride 313 Black", "Hitech Pride 325 Black", "Hitech Rocket G3i Black", "Hitech S210 Amaze Black", "Hitech S230 Amaze Black", "Hitech S3003G White", "Hitech Super X-9 Black", "Hitech Supreme F3 Black", "Hitech Tiny X-100 Black", "Hitech X-101 Black", "Hitech X10 Grey", "Hitech Xpaly 250 Black", "Hitech Xpaly G3i+ Black", "Hitech Xplay 245 Black", "Hitech Youth HT-810i Black", "Hitech kick 525 Black", "Hotpary Elegant H2 White", "Huawei Ascend G6 Black", "Huawei Ascend G610 Black", "Huawei Ascend G610 White", "Huawei Ascend G700 White", "Huawei Ascend P6 White", "Huawei Ascend Y200 Black", "Huawei Ascend Y210D Black", "Huawei Ascend Y220 Black", "Huawei Ascend Y600", "Huawei G730 Black", "Huawei G730 White", "Huawei Honor 3C White", "Huawei Honor 3X White", "Huawei Y320 Black", "Huawei Y511 Black", "Huawei Y600 Black \u0026 Blue", "ICE D3 Xphone Limited Edition Pearl White", "ICE Xphone Xphone Pearl White", "Icon G8 Dual SIM Qwerty Mobile Black", "Icon G9 Dual SIM Qwerty Mobile Black", "Intex AQUA Marvel + Aqua Marvel + Grey", "Intex AQUA Marvel + Aqua Marvel + White", "Intex Alpha Black", "Intex Alpha Mobile Black \u0026 Red", "Intex Aqua 3 G Black", "Intex Aqua 3G Black", "Intex Aqua 3G White", "Intex Aqua Curve Black", "Intex Aqua Curve Red", "Intex Aqua HD Aqua HD White", "Intex Aqua I 5 HD Black", "Intex Aqua I15 White", "Intex Aqua I5 HD Black", "Intex Aqua I5 HD White", "Intex Aqua N-2 Black", "Intex Aqua N15 Black", "Intex Aqua N15 Blue", "Intex Aqua N15 White", "Intex Aqua N17 Black", "Intex Aqua N2 White", "Intex Aqua N4 Black", "Intex Aqua N8 White", "Intex Aqua Octa Black", "Intex Aqua Octa White", "Intex Aqua Qwerty Blue", "Intex Aqua Qwerty White", "Intex Aqua Style Black", "Intex Aqua Style Black \u0026 Silver", "Intex Aqua Style Pro Black", "Intex Aqua Style Pro Grey", "Intex Aqua Style White \u0026 Silver", "Intex Aqua Swadesh White Black", "Intex Aqua T3 Black \u0026 Blue", "Intex Aqua T3 Grey", "Intex Aqua T3 White \u0026 Silver", "Intex Aqua T4 Black", "Intex Aqua T4 Blue", "Intex Aqua Trendy White", "Intex Aqua Y 2 Black", "Intex Aqua Y2 White", "Intex Aqua i 5 mini White", "Intex Aqua i14 Blue", "Intex Aqua i15 Black", "Intex Aqua i15 Blue", "Intex Aqua i3 Black", "Intex Aqua i3 Blue", "Intex Aqua i5 Black", "Intex Aqua i5 Mini Black", "Intex Aura NX Black", "Intex Bravo 2.6 Grey", "Intex Cloud X11 White", "Intex Cloud X12 Black", "Intex Cloud X2 Cloud X2 White", "Intex Cloud X3 Plus Black", "Intex Cloud X3 Plus White", "Intex Cloud X5 Black", "Intex Cloud X5 White", "Intex Cloud Y1 Black", "Intex Cloud Y1 White", "Intex Cloud Y12 White", "Intex Cloud Y13 White", "Intex Cloud Y17 White", "Intex Cloud Y4 Black", "Intex Cloud Y7 Black", "Intex Cloud Y7 White", "Intex Cloud Z5 Black", "Intex Focus V Silver", "Intex Focus-v Grey", "Intex Force Black \u0026 Grey", "Intex Force Black \u0026 Red", "Intex Force White \u0026 Grey", "Intex GC5050 Blue", "Intex GC5050 Red", "Intex GC5050 Silver", "Intex Gsm Hero Silver", "Intex Hero Black", "Intex IN 2010 NANO2", "Intex Jazz Grey", "Intex Jszz Black", "Intex Kobra Silver", "Intex Kobra White", "Intex Mega 10 Black", "Intex Nano 2 Black \u0026 Red", "Intex Nano 2 Blue", "Intex Nano 2S Black", "Intex Nano Star Black", "Intex Nano Star Black \u0026 Red", "Intex Neo-Vi Black \u0026 Red", "Intex Neo-vi Plus Red", "Intex Nova Black", "Intex Nova Silver", "Intex Nova White", "Intex Plasma Black", "Intex Plasma White", "Intex Platinum 201 Black", "Intex Platinum 201 Mobile Silver", "Intex Platinum 201 White", "Intex Platinum A6 Black \u0026 Silver", "Intex Platinum A6 White", "Intex Platinum Matrix Black", "Intex Platinum Matrix White", "Intex Pride Black", "Intex Rock Star Black \u0026 Grey", "Intex Shine 1800 Black", "Intex Shine 1800 Blue", "Intex Shine 1800 Red", "Intex Slimzz Black", "Intex Slimzz Silver", "Intex Star One Black", "Intex Turbo N Grey", "Intex Yuvi LX Black", "Intex Yuvi Pro Grey", "JIVI Dual Sim/Dual Standby Gsm + Cdma GC 1209 Black and White", "Jivi C3i Black", "Jivi CG1335 Black", "Jivi JV C300 CDMA Mobile Black", "Jivi JV21 Black", "Jivi JV21 White", "Jivi Jv X3i Black", "Jivi Slim X48 Black", "Jivi X390 Black", "Jivi X426 Black", "Jivi X480 Black", "Jivi X660 Black", "Josh A2700 Black", "Josh A2700 Blue", "Josh A2700 White", "Josh A999 White", "Josh Feather Black", "Josh JB 63+ Red", "Josh JB 63+ White", "Josh JB007 Silver", "Josh JB007-S Brown", "Josh JM 2800 Black", "Josh JM 2800 Golden", "Josh JM2400 Black", "Josh JM2400-R Red", "Josh Thunder Grey", "Karbonn A1 Plus Super White", "Karbonn A1+ Duple Black", "Karbonn A1+ Duple White", "Karbonn A101 Black", "Karbonn A11+ Black", "Karbonn A119 Black", "Karbonn A119 White", "Karbonn A15 Plus Black", "Karbonn A19 Black Silver", "Karbonn A19 White Silver", "Karbonn A21+ Black", "Karbonn A21+ White", "Karbonn A25 Plus White", "Karbonn A35 Black Silver", "Karbonn A35 White and Silver", "Karbonn A51 Black", "Karbonn A51 White", "Karbonn A6 Black White", "Karbonn A90 Black \u0026 Silver", "Karbonn A90 White Silver", "Karbonn A90S Black", "Karbonn A91 White", "Karbonn A93 Black", "Karbonn A93 White", "Karbonn A99 Black", "Karbonn A99 Star Black \u0026 White", "Karbonn A99 White", "Karbonn A99i Black", "Karbonn A99i White", "Karbonn Flair K102+ Gold White", "Karbonn Jumbo K9 Black \u0026 Red", "Karbonn K-Phone 1 Black Blue", "Karbonn K-Phone 1 Black Brown", "Karbonn K-Phone 1 White Silver", "Karbonn K101* Black \u0026 Red", "Karbonn K105s Black \u0026 Red", "Karbonn K112 Black", "Karbonn K39 Black \u0026 Grey", "Karbonn K39 Black \u0026 Red", "Karbonn K52 Groovster Black \u0026 Silver", "Karbonn K57 Black", "Karbonn K57 Silver", "Karbonn K62+ White", "Karbonn K63+ Black", "Karbonn K63+ Silver", "Karbonn K9 Plus Black", "Karbonn K9 Plus White Silver", "Karbonn KC540 White", "Karbonn KT 52 Black", "Karbonn KT 52 White", "Karbonn Karbonn The Legend Phone Beauty At Its Best Black Black", "Karbonn Kochadaiiyaan The Legend 2.4 Black \u0026 Red", "Karbonn Kochadaiiyaan The Legend A36 Black \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A36 White \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A6 Plus Black \u0026 White", "Karbonn Kochadaiiyaan The Legend S5i White", "Karbonn Opium N7 Black", "Karbonn Opium N9 Black", "Karbonn Opium N9 White", "Karbonn SPY K595 Black", "Karbonn SPY K595 Grey", "Karbonn Smart A1* Black", "Karbonn Smart A10 Black", "Karbonn Smart A10 White", "Karbonn Smart A11 Star Black", "Karbonn Smart A11 Star White", "Karbonn Smart A111 White", "Karbonn Smart A12 Star Black \u0026 Silver", "Karbonn Smart A12 Star White \u0026 Gold", "Karbonn Smart A26 Metallic Black", "Karbonn Smart A26 White Silver", "Karbonn Smart A29 Black", "Karbonn Smart A29 White", "Karbonn Smart A4+ Black", "Karbonn Smart A4+ White", "Karbonn Smart A5* Black", "Karbonn Smart A50s Black", "Karbonn Smart A50s White", "Karbonn Smart A51 Lite White", "Karbonn Smart A51+ Black", "Karbonn Smart A51+ White", "Karbonn Smart A52 Black Silver", "Karbonn Smart A52 Plus Black \u0026 Gold", "Karbonn Smart A52 Plus White \u0026 Silver", "Karbonn Smart A52 White Silver", "Karbonn Smart A5i Black", "Karbonn Smart A5i White", "Karbonn Smart A92 Black Silver", "Karbonn Smart A92 White Silver", "Karbonn Sound Wave K451+ Black", "Karbonn Sound Wave K451+ Champ Gold", "Karbonn Sound Wave K451+ Silver", "Karbonn The Star K61 Black", "Karbonn Titanium Hexa", "Karbonn Titanium K900 Black", "Karbonn Titanium Octane Black", "Karbonn Titanium Octane Red", "Karbonn Titanium Octane White", "Karbonn Titanium S1 Plus Black", "Karbonn Titanium S1 Plus Orange", "Karbonn Titanium S1 Plus White", "Karbonn Titanium S19 White", "Karbonn Titanium S2 Plus Black", "Karbonn Titanium S3 Black", "Karbonn Titanium S3 White", "Karbonn Titanium S4 Black", "Karbonn Titanium S4 White", "Karbonn Titanium S5 Plus Deep Blue", "Karbonn Titanium S5 Plus Pearl White", "Karbonn Titanium S5i Dark Blue", "Karbonn Titanium S7 Black", "Karbonn Titanium S9 Lite Black", "Karbonn Titanium S9 Lite White", "Karbonn Titanium S9 Pearl White", "Karbonn Titanium S99 Black", "Karbonn Titanium S99 White", "Karbonn Titanium X White", "Kingbell Basic M24 Black", "Kingbell Basic M3 Pink", "LG A390 Silver", "LG Cookie Smart T 375 Black", "LG Cookie Snap GM360i with 2 GB Memory Card", "LG D686 Gold", "LG E420 Black", "LG E612 Black", "LG G Pro 2 D838 Titan", "LG G Pro 2 D838 White", "LG G Pro E988 Black", "LG G Pro Lite D686 Black", "LG G Pro Lite D686 Black Gold", "LG G Pro Lite D686 White", "LG G-Flex Titan Silver", "LG G2 32 GB Black, with 32 GB", "LG G2 32 GB Gold", "LG G2 32 GB White, with 32 GB", "LG G2 Black", "LG G2 Black Gold, with 16gb", "LG G2 D802T Black", "LG G2 D802T Gold", "LG G2 D802T White", "LG G2 White", "LG G3 D855 Black Gold, with 32 GB", "LG G3 D855 Gold", "LG G3 D855 Titan Titan", "LG G3 D855 Titan Titan, with 32 GB", "LG G3 D855 White", "LG L4 II Dual E445 Black", "LG L4 II Dual E445 White", "LG L60 Dual White", "LG L60 X-147 Black", "LG L70 Black", "LG L70 Dual", "LG L70 White", "LG L80 Black", "LG L80 Dual Black", "LG L80 Dual White", "LG L80 White", "LG L90 Black", "LG L90 Dual", "LG L90 White", "LG Optimus 3D Max P725 Black", "LG Optimus 4X HD P880 White", "LG Optimus Black P970 Black Titan", "LG Optimus G E975 Blue", "LG Optimus GT540", "LG Optimus Hub E510 Black", "LG Optimus L3 Dual E405 Black", "LG Optimus L3 Dual E405 White", "LG Optimus L3 II E425 Black", "LG Optimus L3 II E425 White", "LG Optimus L3 II E435 Black", "LG Optimus L3 II E435 White", "LG Optimus L5 Dual E615 Black", "LG Optimus L5 Dual E615 White", "LG Optimus L5 II Dual E455 Black", "LG Optimus L5 II Dual E455 White", "LG Optimus L5 II E450 Black", "LG Optimus L5 II E450 White", "LG Optimus L7 II P715 Black", "LG Optimus L7 II P715 White", "LG Optimus L7 P705 Black", "LG Optimus L9 P765 Black", "LG Optimus Net Dual Sim P698 Titanium", "LG Optimus Pro C660 Black", "LG Optimus Sol E730 Black", "LG Optimus VU P895 Black", "LG Optimus VU P895 White", "LG P520 Black, with 2 GB Micro SD Card", "LG T500 Black", "LG T515 Wine Red", "LG T585 Black", "LG T585 White", "Lava ARC 11i Black", "Lava ARC Lite Black \u0026 Red", "Lava Arc 111 Black \u0026 Yellow", "Lava Arc 111 Grey \u0026 Green", "Lava Arc 12i Black", "Lava Arc 12i Grey", "Lava Arc 1star Black \u0026 Red", "Lava Arc 22 Black", "Lava Arc 22 Yellow", "Lava C11 Grey", "Lava CG141 Black", "Lava Discover 128 Star White", "Lava Discover 135 White", "Lava Discover 136S Champagne", "Lava Discover Neo Black", "Lava Discover Neo Grey", "Lava Iris 300 Style Dark Blue", "Lava Iris 310 Style Brown", "Lava Iris 349i Black", "Lava Iris 350M Grey", "Lava Iris 354 White", "Lava Iris 354e White", "Lava Iris 360 Music Black", "Lava Iris 3G 412 Grey", "Lava Iris 402 Grey", "Lava Iris 402 White", "Lava Iris 402+ Ivory White", "Lava Iris 402e Grey", "Lava Iris 404e Black", "Lava Iris 405+ Black", "Lava Iris 405+ White", "Lava Iris 406Q Black", "Lava Iris 406Q White", "Lava Iris 408e Frosted Silver", "Lava Iris 415 Black", "Lava Iris 450 Color Plus Black \u0026 Blue", "Lava Iris 450 Color Plus White \u0026 Blue", "Lava Iris 450 White \u0026 Blue", "Lava Iris 456 Black", "Lava Iris 458q Grey", "Lava Iris 504Q+ Gray", "Lava Iris 504Q+ White", "Lava Iris 550Q Black", "Lava Iris Pro 20 Metal Blue", "Lava Iris Pro 30 Grey", "Lava Iris X1 with 4 GB ROM Black", "Lava Iris X1 with 4 GB ROM White", "Lava Iris X1 with 8 GB ROM Black, with 8 GB ROM", "Lava Iris X1 with 8 GB ROM White, with 8 GB ROM", "Lava KKT 27i Blue", "Lava KKT 27i Grey", "Lava KKT 27i Silver", "Lava KKT 27s Grey", "Lava KKT 34i Black \u0026 Silver", "Lava KKT 34star Black \u0026 Red", "Lava KKT 40 Mini Blue", "Lava KKT 42 Black", "Lava KKT Uno Grey", "Lava Magnum X604 White", "Lava Spark 10 Black \u0026 Red", "Lava Spark 245e Black \u0026 Grey", "Lemon B149 Black", "Lemon B159 Multimedia Big Battery Black", "Lemon B169 Multimedia Big Battery Grey", "Lemon B229 Multimedia Big Battery Black", "Lemon B319I Multimedia Big Battery Black", "Lemon B579 Multimedia Big Battery with Box Speaker Black", "Lenovo A269i Black", "Lenovo A369i Black", "Lenovo A390 Black", "Lenovo A390 White", "Lenovo A516 Grey", "Lenovo A516 White", "Lenovo A526 Aurora Blue", "Lenovo A680 Black", "Lenovo A680 White", "Lenovo A800 Black", "Lenovo A850 Black", "Lenovo A850 White", "Lenovo A859 White", "Lenovo IdeaPhone S890 White", "Lenovo Ideaphone A706 Black", "Lenovo Ideaphone A706 White", "Lenovo Ideaphone S920 8 GB White, with 8 GB", "Lenovo K860 Black", "Lenovo K900 Steel Grey", "Lenovo P780 Deep Black", "Lenovo P780 Deep Black, with 8 GB", "Lenovo Reliance CDMA GSM 2 SIM Android SmartPhone A600E Black", "Lenovo S650 Silver", "Lenovo S660 Titanium", "Lenovo S720 White", "Lenovo S820 Red", "Lenovo S820 Red, with 8 GB", "Lenovo S850", "Lenovo S860 Titanium", "Lenovo S880 White", "Lenovo S920 Blue", "Lenovo S920 White", "Lenovo S930 Silver", "Lenovo Vibe X Silver", "Lenovo Vibe Z K910 Silver", "Lenovo Vibe Z K910 Titanium", "MTS Blaze 4", "MTS Blaze 4.5", "MTS Blaze 5.0 White", "MTS Dual CG 131", "MTS Dual CG 141", "MTS Rockstar M131", "MTS Rockstar M141 Red", "Magicon Senior Duo White", "Maxx AX3 Black", "Maxx AX8 Black", "Maxx GenxDroid7 - AX352 Black", "Maxx GenxDroid7 - AX407 Black", "Maxx MSD7 Smarty Black", "Maxx MX426 - Supremo Red", "Maxx Note I AX8 Black", "Maxx Race AX8 Black", "Maxx Race AX9Z White", "Maxx Zippy MT616 Coffee", "Micromax A069 Grey", "Micromax A069 White", "Micromax A069 Yellow", "Micromax A091 C Engage Grey", "Micromax A093 White \u0026 Gold", "Micromax Aisha A52 White", "Micromax Bling 3 A86 White", "Micromax Bolt A068 Blue", "Micromax Bolt A068 White", "Micromax Bolt A075 Blue", "Micromax Bolt A089 Black", "Micromax Bolt A089 White", "Micromax Bolt A24 Champange", "Micromax Bolt A36 Black", "Micromax Bolt A37 Black", "Micromax Bolt A37B Black", "Micromax Bolt A46 Black", "Micromax Bolt A47 Black", "Micromax Bolt A58 Black", "Micromax Bolt A58 Red", "Micromax Bolt A59 Grey", "Micromax Bolt A61 Grey", "Micromax Bolt A62 Black", "Micromax Bolt A62 White", "Micromax Bolt A66 Black", "Micromax Bolt A67 Black", "Micromax Bolt A67 White", "Micromax Bolt A69", "Micromax Bolt A71 Black", "Micromax Bolt A71 White", "Micromax Bolt GC232 Black \u0026 Silver", "Micromax Bolt X101 White", "Micromax Bolt X287 Grey", "Micromax C210 White", "Micromax CDMA C200 Black \u0026 White", "Micromax CG666 Black \u0026 Grey", "Micromax CG666 White", "Micromax Canvas 2 Colors A120 with 4 GB ROM Grey", "Micromax Canvas 2 Colors A120 with 4 GB ROM White", "Micromax Canvas 2 Colors A120 with 8 GB ROM Grey", "Micromax Canvas 2.2 A114 Black", "Micromax Canvas 2.2 A114 White", "Micromax Canvas 4 A210 Grey", "Micromax Canvas Blaze HD EG116 Black", "Micromax Canvas Blaze MT500", "Micromax Canvas Doodle 2 A240 Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM White", "Micromax Canvas Doodle 3 A102 with 512 MB RAM Blue", "Micromax Canvas Doodle 3 A102 with 512 MB RAM White", "Micromax Canvas Doodle A111 White", "Micromax Canvas Duet AE90 Black", "Micromax Canvas Ego A113 Grey", "Micromax Canvas Elanza 2 A121 Black", "Micromax Canvas Elanza A93 Black Silver", "Micromax Canvas Elanza A93 Blue \u0026 Grey", "Micromax Canvas Elanza A93 Coffee", "Micromax Canvas Entice A105 Grey", "Micromax Canvas Fire A093 Black \u0026 Gold", "Micromax Canvas Fire A104 Black Gold", "Micromax Canvas Fun A63 Blue", "Micromax Canvas Fun A63 Yellow", "Micromax Canvas Fun A76 Black", "Micromax Canvas Gold A300 Black Gold", "Micromax Canvas Gold A300 White Gold", "Micromax Canvas HD Plus A190 Black", "Micromax Canvas Juice A177 Black", "Micromax Canvas Juice A77 White", "Micromax Canvas Knight A350 Black", "Micromax Canvas Knight A350 Black \u0026 Gold", "Micromax Canvas Knight A350 White \u0026 Gold", "Micromax Canvas Knight Cameo A290 White \u0026 Gold", "Micromax Canvas L A108 Blue", "Micromax Canvas Magnus A117 Blue", "Micromax Canvas Music A88 Black", "Micromax Canvas Music A88 White", "Micromax Canvas Power A96 Black", "Micromax Canvas Turbo A250 White", "Micromax Canvas Turbo Mini A200 Black", "Micromax Canvas Turbo Mini A200 White", "Micromax Canvas Win W121", "Micromax Canvas XL A119 White", "Micromax Canvas XL2 A109 White", "Micromax EG111 Black", "Micromax Fire 2 A104 White", "Micromax GC222 Black", "Micromax GC222 White", "Micromax GC666 Black \u0026 Grey", "Micromax Knight Cameo A290 White", "Micromax MAd A94 Grey", "Micromax Ninja A91 Black", "Micromax Rockstar C192 Black", "Micromax Smarty 3.0 A30 Black", "Micromax Smarty 4.3 A65 White", "Micromax Unite 2 A106 with 4 GB ROM Green", "Micromax Unite 2 A106 with 4 GB ROM Grey", "Micromax Unite 2 A106 with 4 GB ROM Red", "Micromax Unite 2 A106 with 4 GB ROM White", "Micromax Unite 2 A106 with 8 GB ROM Grey, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM Red, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM White, with 8 GB ROM", "Micromax Unite A092 Black", "Micromax Unite A092 Grey", "Micromax Unite A092 Red", "Micromax Unite A092 White", "Micromax Unite A092 Yellow", "Micromax X084 Black \u0026 Red", "Micromax X084 White Silver", "Micromax X085 Black \u0026 Red", "Micromax X086 White", "Micromax X088 Black \u0026 Red", "Micromax X088 Black \u0026 Silver", "Micromax X089 Black", "Micromax X096 Black", "Micromax X096 White", "Micromax X097 Black", "Micromax X098 Grey", "Micromax X098 Red", "Micromax X101i White", "Micromax X101i Yellow", "Micromax X103i White", "Micromax X103i Yellow", "Micromax X247 Black", "Micromax X249 Black", "Micromax X251 Grey", "Micromax X253 Black", "Micromax X254 Grey", "Micromax X258 Black", "Micromax X267 Black", "Micromax X267 White", "Micromax X279i Grey", "Micromax X281 Grey", "Micromax X282 Grey", "Micromax X325 Grey", "Micromax X328 Grey", "Micromax X329 Black", "Micromax X337 Grey", "Micromax X351 Black Silver", "Micromax X367 Grey", "Micromax X44 Pearl White", "Micromax X455i White", "Micromax X55 Coffee", "Moto E Black", "Moto E White", "Moto X 16 GB Bamboo", "Moto X 16 GB Black", "Moto X 16 GB Red", "Moto X 16 GB Teak", "Moto X 16 GB Walnut", "Moto X 16 GB White", "Mtech A6 Infinity Black", "Mtech A6 Infinity White", "Mtech Fusion Black", "Mtech Fusion Blue", "Mtech G 14 Black", "Mtech G22 Black", "Mtech G22 White", "Mtech G4 Black", "Mtech Jazz Black", "Mtech Jazz White", "Mtech L6 Black", "Mtech L6 Blue", "Mtech L6 Brown", "Mtech Lotus Black", "Mtech Opal 3G Black \u0026 White", "Mtech Pride Blue", "Mtech Pride Red", "Mtech Rock Black", "Mtech Sharp Black", "Mtech Sharp Cyan", "Mtech Sharp Golden", "Mtech Spark Black", "Mtech Spark Black \u0026 White", "Mtech Spark Blue", "Mtech Touch Opal PRO Grey", "Mtech Touch Opal PRO White", "Mtech V22 Black", "Mtech V22 White", "Nokia 105 Black", "Nokia 105 Cyan", "Nokia 106 Black", "Nokia 106 Red", "Nokia 106 White", "Nokia 107 Black", "Nokia 107 Red", "Nokia 107 White", "Nokia 108 Black", "Nokia 108 Cyan", "Nokia 108 Red", "Nokia 108 White", "Nokia 108 Yellow", "Nokia 112 Red", "Nokia 112 White", "Nokia 114 Black", "Nokia 114 Cyan", "Nokia 206 Black, with Dual SIM", "Nokia 206 Cyan, with Dual SIM", "Nokia 206 White, with Dual SIM", "Nokia 208DS Black, with Dual SIM", "Nokia 208DS Red, with Dual SIM", "Nokia 220 Black", "Nokia 220 Red", "Nokia 220 White", "Nokia 220 Yellow", "Nokia 225 Black", "Nokia 225 Bright Red", "Nokia 225 Bright Yellow", "Nokia 225 White", "Nokia 301 Black", "Nokia 301 White", "Nokia 515 Black", "Nokia 515 White", "Nokia Asha 210 Black", "Nokia Asha 210 Cyan", "Nokia Asha 210 Yellow", "Nokia Asha 230 Black", "Nokia Asha 230 Bright Red", "Nokia Asha 230 White", "Nokia Asha 305 Dark Grey", "Nokia Asha 305 Mid Blue", "Nokia Asha 305 Silver White", "Nokia Asha 308 Golden Light", "Nokia Asha 310 White", "Nokia Asha 311 Dark Grey", "Nokia Asha 311 Sand White", "Nokia Asha 500 Black", "Nokia Asha 500 Bright Red", "Nokia Asha 500 White", "Nokia Asha 500 Yellow", "Nokia Asha 501 Black", "Nokia Asha 501 Bright Red", "Nokia Asha 501 White", "Nokia Asha 501 Yellow", "Nokia Asha 502 Black", "Nokia Asha 502 Bright Red", "Nokia Asha 502 White", "Nokia Asha 502 Yellow", "Nokia Asha 503 Black", "Nokia Asha 503 Bright Red", "Nokia Asha 503 White", "Nokia Asha 503 Yellow", "Nokia Lumia 1320 Black", "Nokia Lumia 1320 Orange", "Nokia Lumia 1320 White", "Nokia Lumia 1320 Yellow", "Nokia Lumia 1520 Black", "Nokia Lumia 1520 Red", "Nokia Lumia 1520 White", "Nokia Lumia 1520 Yellow", "Nokia Lumia 520 Black", "Nokia Lumia 520 Cyan", "Nokia Lumia 520 Red", "Nokia Lumia 520 White", "Nokia Lumia 520 Yellow", "Nokia Lumia 525 Black", "Nokia Lumia 525 Orange", "Nokia Lumia 525 White", "Nokia Lumia 525 Yellow", "Nokia Lumia 530 Dual SIM Bright Orange", "Nokia Lumia 530 Dual SIM Dark Grey", "Nokia Lumia 530 Dual SIM White", "Nokia Lumia 610 Cyan", "Nokia Lumia 610 White", "Nokia Lumia 620 Black", "Nokia Lumia 620 White", "Nokia Lumia 620 Yellow", "Nokia Lumia 625 Black", "Nokia Lumia 625 Green", "Nokia Lumia 625 Orange", "Nokia Lumia 625 White", "Nokia Lumia 625 Yellow", "Nokia Lumia 630 Dual SIM Black", "Nokia Lumia 630 Dual SIM Bright Green", "Nokia Lumia 630 Dual SIM Bright Orange", "Nokia Lumia 630 Dual SIM Bright Yellow", "Nokia Lumia 630 Dual SIM White", "Nokia Lumia 630 Single SIM Black", "Nokia Lumia 630 Single SIM Bright Green", "Nokia Lumia 630 Single SIM Bright Orange", "Nokia Lumia 630 Single SIM Bright Yellow", "Nokia Lumia 630 Single SIM White", "Nokia Lumia 920 White", "Nokia Lumia 925 Black", "Nokia Lumia 925 Grey", "Nokia Lumia 925 White", "Nokia X Black", "Nokia X Bright Green", "Nokia X Bright Red", "Nokia X Cyan", "Nokia X White", "Nokia X Yellow", "Nokia X+ Black", "Nokia X+ Bright Green", "Nokia X+ Yellow", "Nokia XL Black", "Nokia XL Bright Green", "Nokia XL Bright Orange", "Nokia XL Bright Yellow", "Nokia XL Cyan", "Nokia XL White", "Nuclear SX 5.3i Smartphone Black", "OPPO Find 5 Mini R827 Black", "OPPO Find 5 Mini R827 White", "OPPO Find 7 X9076 Black", "OPPO Find 7 X9076 White", "OPPO Find 7a X9006 Black", "OPPO Find 7a X9006 White", "OPPO Joy R1001 Black", "OPPO Joy R1001 White", "OPPO N1 Mini Lemon", "OPPO N1 Mini Mint", "OPPO N1 Mini White", "OPPO N1 White", "OPPO Neo 3 R831K Grey", "OPPO Neo 3 R831K White", "OPPO R1 829 Black", "OPPO R1 829 White", "OPPO Yoyo R2001 Black", "OPPO Yoyo R2001 White", "Olive V-C2130 Black", "Onida G Series G180 Black", "Onida G Series G181 Black \u0026 Red", "Onida G007S Black", "Onida G182 Black", "Onida G183 Black \u0026 Red", "Onida G183 Multicolor", "Onida G242 Black \u0026 Red", "Onida G640A Grey \u0026 Silver", "Onida i011 Black", "Onida i011 White", "Onida i099 Black", "Onida i666 W4413 White", "Onida i666 White", "Onida i777 W4213 White", "Panasonic Eluga A White", "Panasonic Eluga U Black", "Panasonic Eluga U White", "Panasonic GD 28 Black", "Panasonic GD21 Grey", "Panasonic GD31 Black", "Panasonic GD31 White", "Panasonic P11 with Changeable Back Covers", "Panasonic P31 Midnight Blue", "Panasonic P31 Pure White", "Panasonic P41 Black", "Panasonic P51 Black", "Panasonic P51 White", "Panasonic P61 Black", "Panasonic P61 White", "Panasonic P81 Black", "Panasonic T11 White", "Panasonic T21", "Panasonic T31 Black", "Panasonic T31 White", "Panasonic T41 Black", "Panasonic T41 White", "Rage Ace_Black Red", "Rage Ace_Blue Black", "Rage Ace_Green Black", "Rage Ace_White White", "Rage Duke_Green Green", "Rage Glory_Black Silver", "Rage Hero Black \u0026 Grey", "Rage Hero Black \u0026 Red", "Rage Hero White \u0026 Blue", "Rage Magic-50 Black", "Rage Magic-50 White", "Rage Minni_White White", "Rage OPS 35g Blue", "Rage OPS 60dn White", "Rage OPS 80 White", "Rage OPS 80d Black", "Rage OPS 80d White", "Rage OPS 80q Black", "Rage Ps16 Black \u0026 Silver", "Rage Ps16 White \u0026 Silver", "Rage Ps20 White \u0026 Red", "Rage Silk_Blue Black", "Rage Silk_Golden Black", "Rage Storm_Blue Blue", "Rage Storm_White White", "Rage Ultra Black", "Rage Vega White", "Salora SM204 Red", "Salora SM508 Blue \u0026 Black", "Salora SM601 Black \u0026 Gold", "Samsung E2252 Metallic Silver", "Samsung E2252 Pure White", "Samsung G350 White", "Samsung GT 1200 R/I/M", "Samsung Galaxy Ace NXT-G313H White", "Samsung Galaxy Core 2 SM-G355H Black", "Samsung Galaxy Core 2 SM-G355H White", "Samsung Galaxy Core I8262 Chic White", "Samsung Galaxy Golden I9230 Champagne Gold", "Samsung Galaxy Grand 2 Black", "Samsung Galaxy Grand 2 White", "Samsung Galaxy Grand Duos I9082 Elegant White, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Duos I9082 Metallic Blue, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Neo GT-I9060 Midnight Black", "Samsung Galaxy Grand Neo GT-I9060 White", "Samsung Galaxy Mega 5.8 I9152 White", "Samsung Galaxy Note 2 N7100 Marble White", "Samsung Galaxy Note 2 N7100 Titanium Grey", "Samsung Galaxy Note 3 N9000 Blush Pink", "Samsung Galaxy Note 3 N9000 Classic White", "Samsung Galaxy Note 3 N9000 Jet Black", "Samsung Galaxy Note 3 Neo Black", "Samsung Galaxy Note 3 Neo White", "Samsung Galaxy S Duos 2 S7582 Black", "Samsung Galaxy S Duos 2 S7582 Pure White", "Samsung Galaxy S3 Marble White, with 16GB", "Samsung Galaxy S3 Neo GT-I9300I Blue", "Samsung Galaxy S3 Neo GT-I9300I Marble White", "Samsung Galaxy S4 I9500 Black Mist", "Samsung Galaxy S4 I9500 Deep Black", "Samsung Galaxy S4 I9500 White Frost", "Samsung Galaxy S4 Mini I9192 Black Mist", "Samsung Galaxy S4 Mini I9192 White Frost", "Samsung Galaxy S4 Zoom SM-C1010 White", "Samsung Galaxy S5 Charcoal Black", "Samsung Galaxy S5 Copper Gold", "Samsung Galaxy S5 Electric Blue", "Samsung Galaxy S5 Shimmery White", "Samsung Galaxy Star Pro S7262 Midnight Black", "Samsung Galaxy Star Pro S7262 White", "Samsung Galaxy Star S5282 Ceramic White", "Samsung Galaxy Star S5282 Noble Black", "Samsung Galaxy Star S5282 Silver", "Samsung Galaxy Trend S7392 Ceramic White, with 4 GB", "Samsung Galaxy Trend S7392 Midnight Black", "Samsung Galaxy Y S5360 Pure White", "Samsung Guru 1200 Black", "Samsung Guru 1200 Indigo Blue", "Samsung Guru 1200 White", "Samsung Guru E1207T Black", "Samsung I8552 - Galaxy Grand Quattro Ceramic White", "Samsung I8552 - Galaxy Grand Quattro Titan Gray", "Samsung Keystone 2 E1207Y Black", "Samsung Metro DUOS C3322 Deep Black", "Samsung Omnia M S7530 Deep Gray", "Samsung S6812 - Galaxy Fame Metallic Blue", "Samsung S7262 Wine Red", "Sansui SA40 Black", "Sansui SA50 Plus Grey", "Simmtronics Xpad M1 Black", "Simmtronics Xpad Q1 Black", "Simmtronics Xpad Q4", "Simmtronics Xpad Q4 Black", "Simmtronics Xpad Q5 Black", "Sony Xperia C Black", "Sony Xperia C Purple", "Sony Xperia C White", "Sony Xperia C3 Black", "Sony Xperia C3 White", "Sony Xperia E Black", "Sony Xperia E Dual Champagne", "Sony Xperia E White", "Sony Xperia E1 Black", "Sony Xperia E1 Dual Black", "Sony Xperia E1 Dual Purple", "Sony Xperia E1 Dual White", "Sony Xperia E1 Purple", "Sony Xperia E1 White", "Sony Xperia Go Warm Yellow", "Sony Xperia L Rose Red", "Sony Xperia L Starry Black", "Sony Xperia M Black", "Sony Xperia M Dual Black", "Sony Xperia M Dual Purple", "Sony Xperia M Dual White", "Sony Xperia M Purple", "Sony Xperia M White", "Sony Xperia M2 Dual Black", "Sony Xperia M2 Dual Purple", "Sony Xperia M2 Dual White", "Sony Xperia Miro Black", "Sony Xperia Miro White with Silver Strip", "Sony Xperia Neo L Glossy Black", "Sony Xperia P Black", "Sony Xperia P Red", "Sony Xperia P Silver", "Sony Xperia SP Black", "Sony Xperia SP Red", "Sony Xperia SP White", "Sony Xperia T2 Ultra Black", "Sony Xperia T2 Ultra Purple", "Sony Xperia T2 Ultra White", "Sony Xperia T3 Black", "Sony Xperia T3 Purple", "Sony Xperia T3 White", "Sony Xperia Tipo Classic White", "Sony Xperia Tipo Dual Classic Silver", "Sony Xperia Z Black", "Sony Xperia Z Purple", "Sony Xperia Z Ultra Black", "Sony Xperia Z Ultra Purple", "Sony Xperia Z Ultra White", "Sony Xperia Z White", "Sony Xperia Z1 Black", "Sony Xperia Z1 Compact Black", "Sony Xperia Z1 Compact Lime", "Sony Xperia Z1 Compact Pink", "Sony Xperia Z1 Compact White", "Sony Xperia Z1 Purple", "Sony Xperia Z1 White", "Sony Xperia Z2 Black", "Sony Xperia Z2 Purple", "Sony Xperia Z2 White", "Sony Xperia ZR White", "Spice Boss Champion 2 M-5008 Black", "Spice Boss Chocolate M-5373 Black", "Spice Boss Delite M-5162 White", "Spice Boss Link M-5621 Black", "Spice Boss M-5470 Grey", "Spice Boss Slender 2 M-5404 White", "Spice Boss Slender M-5371", "Spice Boss Trendy 4 M-5004 Black", "Spice Boss Trendy 5 M-5032 White", "Spice Boss Trio M-5025 Black", "Spice Buddy N-300 Midnight Black", "Spice Coolpad 2 Mi-496 White", "Spice Flo Rainbow M-6111", "Spice Flo Sleek M-5915", "Spice M-5415 Black", "Spice Smart Flo Edge Mi-349 White", "Spice Smart Flo Mettle 3.5X Mi-356 White", "Spice Smart Flo Mettle 4X Mi-426 White", "Spice Smart Flo Mettle 5X Mi-504 Black", "Spice Smart Flo Mettle 5X Mi-504 White", "Spice Smart Flo Pace 3 Mi-502n White", "Spice Smart Flo Pace Mi-422 White", "Spice Smart Flo Poise Mi-451", "Spice Stellar 360", "Spice Stellar 361 Black", "Spice Stellar 361 White", "Spice Stellar 445 Black", "Spice Stellar 497 White", "Spice Stellar 506 Titanium Grey", "Spice Stellar 509", "Spice Stellar 520 Red", "Spice Stellar 520 Yellow", "Spice Stellar Glamor Mi-436", "Spice Stellar Glide Mi-438 Silver", "Spice Stellar Horizon Pro Mi-505 White", "Spice Stellar Mettle Icon Mi-506 Silver", "Spice Stellar Nhance 2 Mi-437", "Spice Stellar Pinnacle Pro Mi-535 Brown", "Spice Stellar Virtuoso Pro Mi-491 Black", "Spice Steller Virtuoso Pro+ Mi-492 White", "Swingtel Mini SX3 White", "Swingtel SW27 Black", "Swingtel SW27 White", "Swingtel SW30 Black", "Swingtel SW30 Silver", "Swingtel SW30 White", "Swingtel SW50+ Black", "Swingtel SW50+ Red", "Swingtel Superb White", "Swingtel Tigertab White, Red, Grey", "Swipe Fablet F2 White", "Swipe Konnect 5.0 Black", "Swipe Konnect 5.0 White", "Swipe Sense Black", "Swipe Sonic Black", "TVC Android 2.2 Smartphone Black", "Trio T2020L Black \u0026 Blue", "Trio T2020L Black \u0026 Grey", "Trio T2020L White \u0026 Blue", "Trio T2020XL Black \u0026 Blue", "Trio T2020XL Black \u0026 Gold", "Trio T2020XL Black White", "Trio T2424 Black \u0026 Green", "Trio T2424 Black \u0026 Red", "Trio T2424 White \u0026 Blue", "Trio T2424XL Black \u0026 Blue", "Trio T2424n Black \u0026 Blue", "Trio T2424n Black White", "Trio T2626 Black", "Trio T2626 White \u0026 Blue", "Trio T2626 White \u0026 Yellow", "Trio T2828 Black \u0026 Grey", "Trio T2828 Black White", "V3 Bizz GQ225 Grey", "Videocon A 54 White", "Videocon A 55q HD Black", "Videocon A15 Black", "Videocon A15 White Chrome", "Videocon A16 Black", "Videocon A16 White", "Videocon A42 Black", "Videocon A48 White", "Videocon A52 White", "Videocon A53 White Chrome", "Videocon A55 HD Black \u0026 Silver", "Videocon A55HD White", "Videocon Dost V1539 N Black Silver", "Videocon Dost V1615 Black", "Videocon Dost V1615 Silver", "Videocon V1508 Black", "Videocon V1544 Black \u0026 Silver", "Videocon vphone Gold", "Videocon vphone White", "Vox Kick 5 Black", "Vox Kick 5 White", "Vox V-3100 Black", "Vox V-3100 White", "Wham W20i Black", "Wham W24i Black", "Wham W26i Black", "Wynncom W101 Black", "Wynncom WYNNW412 Black", "XElectron AN1 Black", "XElectron BluEye Black", "XElectron M007 Black", "XElectron M998 Black", "XElectron N100 Black", "XElectron X1 White", "XElectron X1Black Black", "XOLO 8X-1000 Black", "XOLO A500 Club Black", "XOLO A500 Club White", "XOLO A500S Black", "XOLO A500S IPS Black", "XOLO A500S IPS Green", "XOLO A500S IPS Red", "XOLO A500S White", "XOLO A500s Lite Black", "XOLO A500s Lite White", "XOLO A550S IPS Black", "XOLO A600 Black", "XOLO A600 Blue", "XOLO A600 White", "XOLO A600 Yellow", "XOLO A700S Black", "XOLO LT900 Black", "XOLO Opus 2 Q1000 Black", "XOLO Play 6X-1000 Black", "XOLO Play 6X-1000 White", "XOLO Play Black", "XOLO Q1000 Black", "XOLO Q1000 Opus Black", "XOLO Q1000 Opus White", "XOLO Q1000 White", "XOLO Q1000S Black", "XOLO Q1000S Plus Black", "XOLO Q1010 White", "XOLO Q1010i Black", "XOLO Q1010i Coffee Brown", "XOLO Q1010i White", "XOLO Q1011 Black", "XOLO Q1011 White", "XOLO Q1100 Black", "XOLO Q1200 Black", "XOLO Q1200 White", "XOLO Q2000 White", "XOLO Q2000L White", "XOLO Q2500 Black", "XOLO Q3000 Black", "XOLO Q3000 White", "XOLO Q500S IPS Black", "XOLO Q500S IPS Green", "XOLO Q500S IPS Red", "XOLO Q600 White", "XOLO Q600S Black", "XOLO Q600S White", "XOLO Q700S Gold", "XOLO Q700S Plus Gold", "XOLO Q700S Silver", "XOLO Q700i Black", "XOLO Q900 White", "XOLO Q900S Black", "XOLO Q900T", "XOLO Win Q900s Black", "XOLO X1000 Black", "Y King Y 10 Black", "Y King Y 10 White", "Y King Y 20 Black", "Y King Y 30 Black", "Y King Y 30 White", "ZTE Blade C V807 Black", "ZTE Blade L V887", "ZTE Grand X Quad Lite Blue", "ZTE Grand X Quad Lite White", "ZTE Reliance d286 Black", "ZTE Reliance d286 White", "ZTE S183Reliance CDMA Only Black", "Zen 303 Power Black", "Zen 306 Ultrafone 306 Play Black \u0026 Red", "Zen 701 Amaze 701 Full Hd Black", "Zen P36 Black", "Zen U 504 B Black", "Zen U 504 W White", "Zen Ultrafone 502qHD Black", "Zook Boss Black", "Zook Brave Brown", "Zook Brilliant Grey", "Zook IMAX Blue", "Zook Iconic Black", "Zook Iconic Gold", "Zook Ideal Black", "Zook Ideal Gold", "Zook Keypad Sliver", "Zook Keypad White", "Zync Cloud Z401", "Zync X108 White", "Zync X207 Black", "iBall 4PIPS Gem Black", "iBall Andi 3.5 Classique With 1.3 Ghz Processor White", "iBall Andi 4.5 2G Grey", "iBall Andi 4.5 2G Ripple White", "iBall Andi 4.5 3G Ripple White", "iBall Andi 4.5 3G Wine \u0026 Gunmetal", "iBall Andi 4.5D Royale", "iBall Andi 4.7G Cobalt", "iBall Andi 5-M8 Black", "iBall Andi 5.5N2 Quadro", "iBall Andi 5K Sparkle White White", "iBall Andi 5K Sparkle Wine Special Wine", "iBall Andi 5T Cobalt 2", "iBall Andi Uddaan", "iBall Andi3.5kke Genius Black", "iBall Andi3.5kke Genius White", "iBall Andi3.5kke Winner Black", "iBall Andi3.5kke Winner White", "iBall Andi4 B2 Black", "iBall Andi4 Gem Black", "iBall Andi4 Gem White", "iBall Andi4 Velvet Black", "iBall Andi4 Velvet White", "iBall Andi4.5P Glitter White", "iBall Andi4.5P Glitter Yellow", "iBall Andi4.5Q White", "iBall Andi4.5d Royale White", "iBall Andi5-E7 Grey", "iBall IPS Tiger Andi4 Royal Blue", "iBall Iball Vogue 2.8A Slim Bar Design White White", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Black", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Yellow", "iBall King1.8D White", "iBall Senior Aasaan2 White", "iBall Shaan Fab2.4V8 Black \u0026 Blue", "iBall Shaan Fab2.4V8 Black \u0026 Yellow", "iBall Vogue 1.8-KK18 Black", "iBall Vogue 1.8-KK7 Yellow", "iBall Vogue 2.4 kk1 Grey", "iBall Vogue2.4e Black", "iBall iBall Andi 3.5kke Glory Special Wine", "iBall iBall Vogue 2.8A Slim Bar Design Grey Grey"]


    $scope.pricedivisionswatch = [
        {
            price: "Rs. 2000 and below"
        },
        {
            price: "Rs 2001 - 5000"
        },
        {
            price: "Rs 5001 - 10000"
        },
        {
            price: "Rs 10001 - 18000"
        },
        {
            price: "Rs 18001 - 25000"
        },
        {
            price: "Rs 25001 - 35000"
        },
        {
            price: "Rs 35001 and above"
        }
    ];


    // watch divisions for changes
    $scope.$watch('watchesdivisions|filter:{selected:true}', function (nv) {
        $scope.watchtradeshow.watchDivisions = nv.map(function (division) {
            //alert(division.brand);
            console.log({name: division.brand});
            return {name: division.brand};
        });

        var display = 0;
        if (angular.toJson($scope.watchtradeshow.watchDivisions).length > 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length > 0
            && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length > 0) {
            //show brand, color and price
            display = 1;
        } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length > 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length > 0
            && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length < 0) {
            //show only brand and color
            display = 2;
        } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length > 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length < 0
            && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length < 0) {
            //show only brand
            display = 3;
        } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length < 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length > 0
            && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length > 0) {
            //show only color and price
            display = 4;
        } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length < 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length > 0
            && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length < 0) {
            //show only color
            display = 5;
        } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length < 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length < 0
            && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length < 0) {
            //show all
            display = 6;
        } else if (angular.toJson($scope.watchtradeshow.watchDivisions).length < 0 && angular.toJson($scope.colortradeshowwatch.colorDivisionswatch).length < 0
            && angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch).length > 0) {
            //show price
            display = 7;
        }

        switch (display) {
            case 1:
                $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                    color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                break;
            case 2:
                $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                    color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                break;
            case 3:
                $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                    color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                break;
            case 4:
                $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                    color: angular.toJson($scope.colortradeshowwatch.colorDivisions), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                break;
            case 5:
                $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                    color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                break;
            case 6:
                $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                    color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                break;
            case 7:
                $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
                    color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
                break;
            default:
                break;
        }


        console.log("tradeshowwatch" + angular.toJson($scope.watchtradeshow.watchDivisions));
        //$location.path('/view2');
    }, true);


    $scope.colortradeshowwatch = { };
    $scope.colortradeshowwatch.colorDivisionswatch = [];


    // helper method
    $scope.selectedColorDivisionswatch = function selectedColorDivisionswatch() {
        return filterFilter($scope.colortradeshowwatch.colorDivisionswatch, { selected: true });
    };

    // watch divisions for changes
    $scope.$watch('colordivisionswatch|filter:{selected:true}', function (nv1) {
        $scope.colortradeshowwatch.colorDivisionswatch = nv1.map(function (colordivisionwatch) {
            //alert(division.brand);
            console.log({color: colordivisionwatch.color});
            return {color: colordivisionwatch.color};
        });
        $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
            color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
        console.log("colortradeshowwatch" + angular.toJson($scope.colortradeshowwatch.colorDivisionswatch));
        //  $location.path('/view2');
    }, true);


    $scope.pricetradeshowwatch = { };
    $scope.pricetradeshowwatch.priceDivisionswatch = [];


    // helper method
    $scope.selectedPriceDivisionswatch = function selectedPriceDivisionswatch() {
        return filterFilter($scope.pricetradeshowwatch.priceDivisionswatch, { selected: true });
    };


    // watch divisions for changes
    $scope.$watch('pricedivisionswatch|filter:{selected:true}', function (nv2) {
        $scope.pricetradeshowwatch.priceDivisionswatch = nv2.map(function (pricedivisionwatch) {
            //alert(division.brand);
            console.log({price: pricedivisionwatch.price});
            return {price: pricedivisionwatch.price};
        });
        $rootScope.watchlist = ProductFactory.brandName.query({brands: angular.toJson($scope.watchtradeshow.watchDivisions),
            color: angular.toJson($scope.colortradeshowwatch.colorDivisionswatch), price: angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch)});
        console.log("pricetradeshowwatch" + angular.toJson($scope.pricetradeshowwatch.priceDivisionswatch));
        // $location.path('/view2');
    }, true);


    $scope.getWatchInfo = function (product) {
        console.log("getProductInfo - " + product.productName);
        //$rootScope.productInfo = UserFactory.productdetails.query({key: product.productName});

        $rootScope.pricecompare = {productName: ""};
        $rootScope.pricecompare = ProductFactory.productdetails.query({key: product.productName});
        console.log("price compare - " + $rootScope.pricecompare.length);

        $rootScope.productInfo = product;
        $rootScope.image = product.productImage;
        console.log("productInfo length - " + product.productImage);
        console.log("productInfo length - " + $rootScope.image);
        console.log("productInfo length - " + $scope.productInfo.productName);

        $scope.$watch($rootScope.productInfo, function (newVal) {
            //alert("Changed an input");
        }, true);

        $scope.$watch($rootScope.pricecompare, function (newVal) {
            //alert("Changed an input");
        }, true);

        //  $location.path('/view2');
    }
}]);


app.controller('laptopesCtrl', ['$scope', '$rootScope', '$location', 'UserFactory', 'LaptopFactory', '$q',
    function ($scope, $rootScope, $location, UserFactory, LaptopFactory, $q) {


        $scope.items = [
            { id: 1, name: 'Books'},
            { id: 2, name: 'Mobile'}
        ];


        $scope.menlaptopes = function () {
            console.log("menlaptopes");
            $rootScope.laptoplist = LaptopFactory.home.query();

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.laptoplist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.laptoplist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/laptopes');
        }


        $scope.womenlaptopes = function () {
            console.log("womenlaptopes");
            console.log("menlaptopes");
            $rootScope.laptoplist = LaptopFactory.home.query({productcategory: 'Women laptopes'});

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.laptoplist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.laptoplist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/laptopes');
        }


        $scope.laptopesdivisions = LaptopFactory.laptopbrands.query();

        $scope.laptoptradeshow = { };
        $scope.laptoptradeshow.laptopDivisions = [];

        // selected divisions
        //$scope.selection = [];

        // helper method
        $scope.selectedDivisionslaptop = function selectedDivisionslaptop() {
            return filterFilter($scope.laptoptradeshow.laptopDivisions, { selected: true });
        };


        $scope.colordivisionslaptop = [
            {
                color: "White"
            },
            {
                color: "Yellow"
            },
            {
                color: "Pink"
            },
            {
                color: "Black"
            },
            {
                color: "Grey"
            }
        ];


        $scope.typeahead = ["ADCOM A-430I PS Black", "ADCOM Smartphone A-350i Black", "ADCOM Smartphone A-350i White", "ADCOM Smartphone A-500 Black", "ADCOM Smartphone A-500 White", "ADCOM Thunder A-350 Black", "ADCOM Thunder A-350 White", "ADCOM Thunder A-400 Black", "ADCOM Thunder A-400 White", "ADCOM Thunder A-400i Black", "ADCOM Thunder A-400i White", "ADCOM Thunder A-430 White", "ADCOM X8 Black", "ADCOM X8 White", "ADCOM X9 Black", "ADCOM X9 Red", "Adcom X10 Black", "Adcom X10 White", "Adcom X11 Black", "Adcom X12 Black", "Adcom X14 Black", "Adcom X14 Grey", "Adcom X28 Silver", "Alcatel 890D Silver", "Alcatel One Touch J636d+ Black", "Alcatel Onetouch Idol Mini 6012D", "Alcatel Onetouch Idol X+ Bluish Black, with 16 GB", "Alcatel Onetouch Idol X+ White, with 16 GB", "Apple iPhone 4 Black, with 16 GB", "Apple iPhone 4 Black, with 8 GB", "Apple iPhone 4 White, with 16 GB", "Apple iPhone 4 White, with 8 GB", "Apple iPhone 4S Black, with 8 GB", "Apple iPhone 4S White, with 8 GB", "Apple iPhone 5C 8 GB Blue, with 8 GB", "Apple iPhone 5C 8 GB Green, with 8 GB", "Apple iPhone 5C 8 GB Pink, with 8 GB", "Apple iPhone 5C 8 GB White, with 8 GB", "Apple iPhone 5C 8 GB Yellow, with 8 GB", "Apple iPhone 5C Blue, with 16 GB", "Apple iPhone 5C Blue, with 32 GB", "Apple iPhone 5C Green, with 16 GB", "Apple iPhone 5C Green, with 32GB", "Apple iPhone 5C Pink, with 16 GB", "Apple iPhone 5C Pink, with 32GB", "Apple iPhone 5C White, with 16 GB", "Apple iPhone 5C White, with 32GB", "Apple iPhone 5C Yellow, with 16 GB", "Apple iPhone 5C Yellow, with 32GB", "Apple iPhone 5S Gold, with 16 GB", "Apple iPhone 5S Gold, with 32 GB", "Apple iPhone 5S Gold, with 64 GB", "Apple iPhone 5S Silver, with 16 GB", "Apple iPhone 5S Silver, with 32 GB", "Apple iPhone 5S Silver, with 64 GB", "Apple iPhone 5S Space Grey, with 16 GB", "Apple iPhone 5S Space Grey, with 32 GB", "Apple iPhone 5S Space Grey, with 64 GB", "Arise Bingo AX111 Black", "Arise Imperia AX282 Black", "Arise Magnet AX251 Black", "Asus Zenfone 4 A400CG Black, with 8 GB", "Asus Zenfone 4 A400CG Blue, with 8 GB", "Asus Zenfone 4 A400CG Red, with 8 GB", "Asus Zenfone 4 A400CG White, with 8 GB", "Asus Zenfone 4 A400CG Yellow, with 8 GB", "Asus Zenfone 4 A450CG Black, with 8 GB", "Asus Zenfone 4 A450CG Solar Yellow, with 8 GB", "Asus Zenfone 4 A450CG White, with 8 GB", "Asus Zenfone 6 A600CG / A601CG Black, with 16 GB", "Asus Zenfone 6 A600CG / A601CG Red, with 16 GB", "Atom Supremus White", "Atom Ultimus White", "BLU B10 BLK Black", "BLU B10 JUMBO R Black", "BLU B10 JUMBO Y Black", "BLU B10 R Black", "BLU B10 Y Black", "BLU B10+ B Blue", "BLU B10+ O Orange", "BLU B10+ R Red", "BLU B10+ Y Yellow", "BLU B23 B Black", "BLU B23 G Black", "BLU B23 R Black", "BLU B23 Y Black", "BLU B306A BLK Black", "BLU B306A W White", "BLU B307 BLK Black", "BLU B307 W White", "BLU B309A W White", "BLU B41 BLK Grey", "BLU B41 Gry Black", "BQ K12 Grey", "BQ K15 Grey", "BQ K18 Blue", "BQ K26 Green", "BQ K27 Gold", "BQ K28 White", "BQ K29 Black", "BQ K50 Grey", "BQ K80 Blue", "BQ S35 Red", "BQ S36 Black", "BQ S37 Black", "BQ S37 White", "BQ S60 Black", "BSNL-Champion Champion Apna Phone SQ241 Power Black", "BSNL-Champion Champion My Phone 51 Black", "BSNL-Champion Champion My Phone 51 White", "BSNL-Champion DM6513 White", "BSNL-Champion Myphone 41 Black", "BSNL-Champion Pro SQ181 Black", "BSNL-Champion SM3513 Black", "BSNL-Champion SQ 181 power Black", "BSNL-Champion SQ 181 power White", "BSNL-Champion SQ 241 Sleek Black", "BSNL-Champion SQ 241 Sleek White", "BSNL-Champion SQ241 SQ241 Black", "BSNL-Champion SQ281 SQ281 Black", "Belkin Skype V1000 Black", "BlackBerry 9720 Black", "BlackBerry 9720 White", "BlackBerry Bold 9790 Pink", "BlackBerry Curve 3G 9300 Pink", "BlackBerry Curve 9220 Black", "BlackBerry Q10 Black", "BlackBerry Q10 White", "BlackBerry Torch 9810 White", "BlackBerry Torch 9810 Zinc Grey", "BlackBerry Torch 9860 Shadow Grey", "BlackBerry Z10 Charcoal Black", "BlackBerry Z10 Pure White", "BlackBerry Z3 Black, with 8 GB", "BlackBerry Z30 Black", "BlackBerry Z30 White", "Blackberry Curve 9320 Black", "Byond B50 Black", "Celkon A10 3G Campus Series Black", "Celkon A107+ Smart Phone White", "Celkon A112 Signature Swift Black", "Celkon A112 White", "Celkon A119Q A 119 Q Smart Phone Black", "Celkon C349* Black", "Celkon C5 Star White", "Celkon C56 Black", "Celkon C6* Black \u0026 Red", "Celkon C605 Black", "Celkon C7045 Black", "Celkon Campus A20 White", "Celkon Campus A225 White", "Celkon Campus A35K Blue", "Celkon Campus A40 Yellow", "Celkon Campus A42 Black", "Celkon Campus A43 Black", "Celkon Campus A66 Black", "Celkon Campus A66 White", "Celkon Campus A9Dual White \u0026 Black", "Celkon Campus Mini A350 White", "Celkon Campus Series A20 Smart Phone Black", "Celkon Celkon Campus Series A 63 Smart Phone Campus Series A63 Black", "Celkon Feature Phone C297 Black", "Celkon Feature Phone C297 White", "Celkon Feature Phone C9 Jumbo White", "Celkon Millennium Q44 Black", "Celkon Millennium Q455 Black", "Celkon Millennium Q455 Blue", "Celkon Millennium Q455 White", "Celkon Millennium Q470 White", "Celkon Signature 118 HD Black", "Celkon Signature A115 White", "Celkon Signature Two A500 Black", "DOMO nTice G12 Phablet Mobile Smartphone White", "Datawind PocketSurfer3G5", "Datawind PocketSurfer5 White", "Datawind PocketSurfer5X Black", "Dell Venue V03B Black", "Devante Boss 1 Black", "Devante Boss 1 White", "Devante Boss 2 Black", "Devante Boss 2 Blue", "Devante Boss 2 White", "Devante Dynamite White", "Devante Hero 1 Subway Series S1 Black", "Devante Hero 1 Subway Series S1 White", "Devante Thunder Black", "Digimac 3X Black", "Digimac 3X White", "Digimac EXI Black", "Digimac EXI White", "Digimac Fusion Black", "Digimac Fusion White", "Digimac VIVO Black", "Digimac VIVO White", "Forme C101 Black", "Forme Coke A1 Red", "Forme D516 Black", "Forme D516 Black \u0026 Red", "Forme D516 Champagne", "Forme D555+ Grey", "Forme D555+ Red", "Forme D556 Black \u0026 Red", "Forme D815 Black", "Forme D815 Red", "Forme Discovery P9 Black", "Forme Discovery P9 Blue", "Forme Discovery P9 plus Black", "Forme Discovery P9 plus Blue", "Forme Energy D9 Black", "Forme F10 Black \u0026 Red", "Forme F8+ Silver", "Forme Fantasy F10 Black", "Forme Fantasy F10 Red", "Forme Find F105 Red", "Forme Forever F8 Red", "Forme Forever F8 Silver", "Forme Hero Blue", "Forme Honey Hero Black", "Forme Hope H1 Black", "Forme Hope H1 Blue \u0026 Black", "Forme Inspire V8 Black", "Forme Inspire V8 Brown", "Forme Inspire V8 Silver", "Forme K1 Black \u0026 Red", "Forme King K1 Red", "Forme L100 White \u0026 Silver", "Forme L600 Red", "Forme L900 Red", "Forme L900 White", "Forme L900 White \u0026 Red", "Forme Love One Black", "Forme Love One Brown", "Forme Love One Red", "Forme M20 White", "Forme M60 Pink", "Forme M600 Red", "Forme M600 White", "Forme M660 Red", "Forme M660 White", "Forme M80 Red", "Forme M90 Black", "Forme Mini 5130 Black", "Forme Onion K806 Black", "Forme Onion K806 White", "Forme P9 Plus Black", "Forme Power One A60 Black", "Forme Power Two M22 Grey", "Forme Power Two M22 Red", "Forme Queen K08-grey Grey", "Forme Queen K08-red Red", "Forme Queen K08-white White", "Forme S10 Silver \u0026 Green", "Forme Summer S700 Pink", "Forme Summer S700 Purple", "Forme Summer S700 Red", "Forme Summer S700 White", "Forme Sunny S60 Black", "Forme Sunny S60 Blue", "Forme Sunny S60 Orange", "Forme Surprise P10 Black", "Forme Surprise S10 Green", "Forme Surprise S10 Red", "Forme Surprise S11 Black", "Forme Surprise S11 Red", "Forme T4 Silver", "Forme Teddy T2 Green", "Forme Teddy T2 White", "Forme Teddy T3 Black", "Forme Teddy T3 Red", "Forme Teddy T4 Green", "Forme Teddy T4 Silver", "Forme V8 White", "Forme Venus V11 Black", "Forme Venus V11 Red", "Forme W3 Gold", "Forme Winner W3 Blue \u0026 Silver", "Forme Winner W3 Gold", "Forme Winner W3 Grey", "Funtab Phablet Fone PHA6.4 White", "Gee Pee 3dh 4430 Black", "Gionee CTRL V5 White", "Gionee E7 Mini", "Gionee Elife E3 Black", "Gionee Elife E6 Black", "Gionee Elife E7 16 GB Black, with 16 GB", "Gionee Elife E7 16 GB White, with 16 GB", "Gionee Elife E7 32 GB Black, with 32 GB", "Gionee Elife E7 32 GB White, with 32 GB", "Gionee Elife S5.5 Black", "Gionee Elife S5.5 White", "Gionee G1 Black", "Gionee Gpad G3 White", "Gionee Gpad G4 Black", "Gionee Gpad G4 White", "Gionee Long L700 Black", "Gionee Long L700 Silver", "Gionee M2 Black", "Gionee M2 White", "Gionee P2 Black", "Gionee P2S Black", "Gionee P2S White", "Gionee Pioneer P3 Black", "Gionee Pioneer P3 White", "Gionee Pioneer P4 Black", "Gionee Pioneer P4 White", "Gionee Slim S80 Black", "Gionee Slim S80 Grey", "Gionee V5 Black", "Google Nexus 4 Black", "Google Nexus 4 White, with Headphone", "Google Nexus 5 Black, with 16 GB", "Google Nexus 5 Black, with 32 GB", "Google Nexus 5 White, with 16 GB", "Google Nexus 5 White, with 32 GB", "HP Slate 6 Voice Tab", "HTC 709D Desire 700 White", "HTC A620E 8S Fiesta Red", "HTC Desire 210 Dual SIM D210h Black", "HTC Desire 210 Dual SIM D210h White", "HTC Desire 310 Dual SIM Arctic White", "HTC Desire 310 Dual SIM Matte Blue", "HTC Desire 310 Flipcovers Blue", "HTC Desire 500 Glacier Blue", "HTC Desire 500 Glossy Black", "HTC Desire 500 Passion Red", "HTC Desire 516 Dark Grey", "HTC Desire 516 Grey", "HTC Desire 516 Pearl White", "HTC Desire 516 White", "HTC Desire 600 Stealth Black", "HTC Desire 600 White", "HTC Desire 600C Black, with Dual SIM", "HTC Desire 600C White, with Dual SIM", "HTC Desire 601 Black, with Dual SIM", "HTC Desire 616 Dual Sim Dark Gray", "HTC Desire 616 Dual Sim White", "HTC Desire 700 Black", "HTC Desire 816 Dark Grey", "HTC Desire 816 White", "HTC Desire SV Stealth Black", "HTC Desire SV Yellow", "HTC Desire T329D XC Black Stone", "HTC Desire T329D XC Fabulous White", "HTC Desire T329W X Dual SIM White, with Dual SIM", "HTC E8 Dual SIM White", "HTC ONE E8 M8Sd Red", "HTC One 802d Black, with Dual SIM", "HTC One 802d Silver, with Dual SIM", "HTC One E8", "HTC One M8 Amber Gold", "HTC One M8 Glacial Silver", "HTC One M8 Gunmetal Grey", "HTC One Max Silver White", "HTC One Mini Black", "HTC One Mini Blue", "HTC One V T320 Jupitor Rock", "HTC T327W Desire U DS White", "Haier C380 Black", "Haier C380 White", "Hitech Air A1 White", "Hitech Amaze S-800 Black", "Hitech Amaze S410 White", "Hitech F2i Blue", "Hitech G11 Black", "Hitech G15 Black", "Hitech G5 Black", "Hitech H2i Red", "Hitech HT-850 Black", "Hitech HT820 Black", "Hitech HT830 Grey", "Hitech HT880 Black", "Hitech Kick 515 Black", "Hitech Micra - 110 Black", "Hitech Micra 115 Black", "Hitech Micra 120 Black", "Hitech Micra 150 Black", "Hitech Pride 302 Black \u0026 Silver", "Hitech Pride 313 Black", "Hitech Pride 325 Black", "Hitech Rocket G3i Black", "Hitech S210 Amaze Black", "Hitech S230 Amaze Black", "Hitech S3003G White", "Hitech Super X-9 Black", "Hitech Supreme F3 Black", "Hitech Tiny X-100 Black", "Hitech X-101 Black", "Hitech X10 Grey", "Hitech Xpaly 250 Black", "Hitech Xpaly G3i+ Black", "Hitech Xplay 245 Black", "Hitech Youth HT-810i Black", "Hitech kick 525 Black", "Hotpary Elegant H2 White", "Huawei Ascend G6 Black", "Huawei Ascend G610 Black", "Huawei Ascend G610 White", "Huawei Ascend G700 White", "Huawei Ascend P6 White", "Huawei Ascend Y200 Black", "Huawei Ascend Y210D Black", "Huawei Ascend Y220 Black", "Huawei Ascend Y600", "Huawei G730 Black", "Huawei G730 White", "Huawei Honor 3C White", "Huawei Honor 3X White", "Huawei Y320 Black", "Huawei Y511 Black", "Huawei Y600 Black \u0026 Blue", "ICE D3 Xphone Limited Edition Pearl White", "ICE Xphone Xphone Pearl White", "Icon G8 Dual SIM Qwerty Mobile Black", "Icon G9 Dual SIM Qwerty Mobile Black", "Intex AQUA Marvel + Aqua Marvel + Grey", "Intex AQUA Marvel + Aqua Marvel + White", "Intex Alpha Black", "Intex Alpha Mobile Black \u0026 Red", "Intex Aqua 3 G Black", "Intex Aqua 3G Black", "Intex Aqua 3G White", "Intex Aqua Curve Black", "Intex Aqua Curve Red", "Intex Aqua HD Aqua HD White", "Intex Aqua I 5 HD Black", "Intex Aqua I15 White", "Intex Aqua I5 HD Black", "Intex Aqua I5 HD White", "Intex Aqua N-2 Black", "Intex Aqua N15 Black", "Intex Aqua N15 Blue", "Intex Aqua N15 White", "Intex Aqua N17 Black", "Intex Aqua N2 White", "Intex Aqua N4 Black", "Intex Aqua N8 White", "Intex Aqua Octa Black", "Intex Aqua Octa White", "Intex Aqua Qwerty Blue", "Intex Aqua Qwerty White", "Intex Aqua Style Black", "Intex Aqua Style Black \u0026 Silver", "Intex Aqua Style Pro Black", "Intex Aqua Style Pro Grey", "Intex Aqua Style White \u0026 Silver", "Intex Aqua Swadesh White Black", "Intex Aqua T3 Black \u0026 Blue", "Intex Aqua T3 Grey", "Intex Aqua T3 White \u0026 Silver", "Intex Aqua T4 Black", "Intex Aqua T4 Blue", "Intex Aqua Trendy White", "Intex Aqua Y 2 Black", "Intex Aqua Y2 White", "Intex Aqua i 5 mini White", "Intex Aqua i14 Blue", "Intex Aqua i15 Black", "Intex Aqua i15 Blue", "Intex Aqua i3 Black", "Intex Aqua i3 Blue", "Intex Aqua i5 Black", "Intex Aqua i5 Mini Black", "Intex Aura NX Black", "Intex Bravo 2.6 Grey", "Intex Cloud X11 White", "Intex Cloud X12 Black", "Intex Cloud X2 Cloud X2 White", "Intex Cloud X3 Plus Black", "Intex Cloud X3 Plus White", "Intex Cloud X5 Black", "Intex Cloud X5 White", "Intex Cloud Y1 Black", "Intex Cloud Y1 White", "Intex Cloud Y12 White", "Intex Cloud Y13 White", "Intex Cloud Y17 White", "Intex Cloud Y4 Black", "Intex Cloud Y7 Black", "Intex Cloud Y7 White", "Intex Cloud Z5 Black", "Intex Focus V Silver", "Intex Focus-v Grey", "Intex Force Black \u0026 Grey", "Intex Force Black \u0026 Red", "Intex Force White \u0026 Grey", "Intex GC5050 Blue", "Intex GC5050 Red", "Intex GC5050 Silver", "Intex Gsm Hero Silver", "Intex Hero Black", "Intex IN 2010 NANO2", "Intex Jazz Grey", "Intex Jszz Black", "Intex Kobra Silver", "Intex Kobra White", "Intex Mega 10 Black", "Intex Nano 2 Black \u0026 Red", "Intex Nano 2 Blue", "Intex Nano 2S Black", "Intex Nano Star Black", "Intex Nano Star Black \u0026 Red", "Intex Neo-Vi Black \u0026 Red", "Intex Neo-vi Plus Red", "Intex Nova Black", "Intex Nova Silver", "Intex Nova White", "Intex Plasma Black", "Intex Plasma White", "Intex Platinum 201 Black", "Intex Platinum 201 Mobile Silver", "Intex Platinum 201 White", "Intex Platinum A6 Black \u0026 Silver", "Intex Platinum A6 White", "Intex Platinum Matrix Black", "Intex Platinum Matrix White", "Intex Pride Black", "Intex Rock Star Black \u0026 Grey", "Intex Shine 1800 Black", "Intex Shine 1800 Blue", "Intex Shine 1800 Red", "Intex Slimzz Black", "Intex Slimzz Silver", "Intex Star One Black", "Intex Turbo N Grey", "Intex Yuvi LX Black", "Intex Yuvi Pro Grey", "JIVI Dual Sim/Dual Standby Gsm + Cdma GC 1209 Black and White", "Jivi C3i Black", "Jivi CG1335 Black", "Jivi JV C300 CDMA Mobile Black", "Jivi JV21 Black", "Jivi JV21 White", "Jivi Jv X3i Black", "Jivi Slim X48 Black", "Jivi X390 Black", "Jivi X426 Black", "Jivi X480 Black", "Jivi X660 Black", "Josh A2700 Black", "Josh A2700 Blue", "Josh A2700 White", "Josh A999 White", "Josh Feather Black", "Josh JB 63+ Red", "Josh JB 63+ White", "Josh JB007 Silver", "Josh JB007-S Brown", "Josh JM 2800 Black", "Josh JM 2800 Golden", "Josh JM2400 Black", "Josh JM2400-R Red", "Josh Thunder Grey", "Karbonn A1 Plus Super White", "Karbonn A1+ Duple Black", "Karbonn A1+ Duple White", "Karbonn A101 Black", "Karbonn A11+ Black", "Karbonn A119 Black", "Karbonn A119 White", "Karbonn A15 Plus Black", "Karbonn A19 Black Silver", "Karbonn A19 White Silver", "Karbonn A21+ Black", "Karbonn A21+ White", "Karbonn A25 Plus White", "Karbonn A35 Black Silver", "Karbonn A35 White and Silver", "Karbonn A51 Black", "Karbonn A51 White", "Karbonn A6 Black White", "Karbonn A90 Black \u0026 Silver", "Karbonn A90 White Silver", "Karbonn A90S Black", "Karbonn A91 White", "Karbonn A93 Black", "Karbonn A93 White", "Karbonn A99 Black", "Karbonn A99 Star Black \u0026 White", "Karbonn A99 White", "Karbonn A99i Black", "Karbonn A99i White", "Karbonn Flair K102+ Gold White", "Karbonn Jumbo K9 Black \u0026 Red", "Karbonn K-Phone 1 Black Blue", "Karbonn K-Phone 1 Black Brown", "Karbonn K-Phone 1 White Silver", "Karbonn K101* Black \u0026 Red", "Karbonn K105s Black \u0026 Red", "Karbonn K112 Black", "Karbonn K39 Black \u0026 Grey", "Karbonn K39 Black \u0026 Red", "Karbonn K52 Groovster Black \u0026 Silver", "Karbonn K57 Black", "Karbonn K57 Silver", "Karbonn K62+ White", "Karbonn K63+ Black", "Karbonn K63+ Silver", "Karbonn K9 Plus Black", "Karbonn K9 Plus White Silver", "Karbonn KC540 White", "Karbonn KT 52 Black", "Karbonn KT 52 White", "Karbonn Karbonn The Legend Phone Beauty At Its Best Black Black", "Karbonn Kochadaiiyaan The Legend 2.4 Black \u0026 Red", "Karbonn Kochadaiiyaan The Legend A36 Black \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A36 White \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A6 Plus Black \u0026 White", "Karbonn Kochadaiiyaan The Legend S5i White", "Karbonn Opium N7 Black", "Karbonn Opium N9 Black", "Karbonn Opium N9 White", "Karbonn SPY K595 Black", "Karbonn SPY K595 Grey", "Karbonn Smart A1* Black", "Karbonn Smart A10 Black", "Karbonn Smart A10 White", "Karbonn Smart A11 Star Black", "Karbonn Smart A11 Star White", "Karbonn Smart A111 White", "Karbonn Smart A12 Star Black \u0026 Silver", "Karbonn Smart A12 Star White \u0026 Gold", "Karbonn Smart A26 Metallic Black", "Karbonn Smart A26 White Silver", "Karbonn Smart A29 Black", "Karbonn Smart A29 White", "Karbonn Smart A4+ Black", "Karbonn Smart A4+ White", "Karbonn Smart A5* Black", "Karbonn Smart A50s Black", "Karbonn Smart A50s White", "Karbonn Smart A51 Lite White", "Karbonn Smart A51+ Black", "Karbonn Smart A51+ White", "Karbonn Smart A52 Black Silver", "Karbonn Smart A52 Plus Black \u0026 Gold", "Karbonn Smart A52 Plus White \u0026 Silver", "Karbonn Smart A52 White Silver", "Karbonn Smart A5i Black", "Karbonn Smart A5i White", "Karbonn Smart A92 Black Silver", "Karbonn Smart A92 White Silver", "Karbonn Sound Wave K451+ Black", "Karbonn Sound Wave K451+ Champ Gold", "Karbonn Sound Wave K451+ Silver", "Karbonn The Star K61 Black", "Karbonn Titanium Hexa", "Karbonn Titanium K900 Black", "Karbonn Titanium Octane Black", "Karbonn Titanium Octane Red", "Karbonn Titanium Octane White", "Karbonn Titanium S1 Plus Black", "Karbonn Titanium S1 Plus Orange", "Karbonn Titanium S1 Plus White", "Karbonn Titanium S19 White", "Karbonn Titanium S2 Plus Black", "Karbonn Titanium S3 Black", "Karbonn Titanium S3 White", "Karbonn Titanium S4 Black", "Karbonn Titanium S4 White", "Karbonn Titanium S5 Plus Deep Blue", "Karbonn Titanium S5 Plus Pearl White", "Karbonn Titanium S5i Dark Blue", "Karbonn Titanium S7 Black", "Karbonn Titanium S9 Lite Black", "Karbonn Titanium S9 Lite White", "Karbonn Titanium S9 Pearl White", "Karbonn Titanium S99 Black", "Karbonn Titanium S99 White", "Karbonn Titanium X White", "Kingbell Basic M24 Black", "Kingbell Basic M3 Pink", "LG A390 Silver", "LG Cookie Smart T 375 Black", "LG Cookie Snap GM360i with 2 GB Memory Card", "LG D686 Gold", "LG E420 Black", "LG E612 Black", "LG G Pro 2 D838 Titan", "LG G Pro 2 D838 White", "LG G Pro E988 Black", "LG G Pro Lite D686 Black", "LG G Pro Lite D686 Black Gold", "LG G Pro Lite D686 White", "LG G-Flex Titan Silver", "LG G2 32 GB Black, with 32 GB", "LG G2 32 GB Gold", "LG G2 32 GB White, with 32 GB", "LG G2 Black", "LG G2 Black Gold, with 16gb", "LG G2 D802T Black", "LG G2 D802T Gold", "LG G2 D802T White", "LG G2 White", "LG G3 D855 Black Gold, with 32 GB", "LG G3 D855 Gold", "LG G3 D855 Titan Titan", "LG G3 D855 Titan Titan, with 32 GB", "LG G3 D855 White", "LG L4 II Dual E445 Black", "LG L4 II Dual E445 White", "LG L60 Dual White", "LG L60 X-147 Black", "LG L70 Black", "LG L70 Dual", "LG L70 White", "LG L80 Black", "LG L80 Dual Black", "LG L80 Dual White", "LG L80 White", "LG L90 Black", "LG L90 Dual", "LG L90 White", "LG Optimus 3D Max P725 Black", "LG Optimus 4X HD P880 White", "LG Optimus Black P970 Black Titan", "LG Optimus G E975 Blue", "LG Optimus GT540", "LG Optimus Hub E510 Black", "LG Optimus L3 Dual E405 Black", "LG Optimus L3 Dual E405 White", "LG Optimus L3 II E425 Black", "LG Optimus L3 II E425 White", "LG Optimus L3 II E435 Black", "LG Optimus L3 II E435 White", "LG Optimus L5 Dual E615 Black", "LG Optimus L5 Dual E615 White", "LG Optimus L5 II Dual E455 Black", "LG Optimus L5 II Dual E455 White", "LG Optimus L5 II E450 Black", "LG Optimus L5 II E450 White", "LG Optimus L7 II P715 Black", "LG Optimus L7 II P715 White", "LG Optimus L7 P705 Black", "LG Optimus L9 P765 Black", "LG Optimus Net Dual Sim P698 Titanium", "LG Optimus Pro C660 Black", "LG Optimus Sol E730 Black", "LG Optimus VU P895 Black", "LG Optimus VU P895 White", "LG P520 Black, with 2 GB Micro SD Card", "LG T500 Black", "LG T515 Wine Red", "LG T585 Black", "LG T585 White", "Lava ARC 11i Black", "Lava ARC Lite Black \u0026 Red", "Lava Arc 111 Black \u0026 Yellow", "Lava Arc 111 Grey \u0026 Green", "Lava Arc 12i Black", "Lava Arc 12i Grey", "Lava Arc 1star Black \u0026 Red", "Lava Arc 22 Black", "Lava Arc 22 Yellow", "Lava C11 Grey", "Lava CG141 Black", "Lava Discover 128 Star White", "Lava Discover 135 White", "Lava Discover 136S Champagne", "Lava Discover Neo Black", "Lava Discover Neo Grey", "Lava Iris 300 Style Dark Blue", "Lava Iris 310 Style Brown", "Lava Iris 349i Black", "Lava Iris 350M Grey", "Lava Iris 354 White", "Lava Iris 354e White", "Lava Iris 360 Music Black", "Lava Iris 3G 412 Grey", "Lava Iris 402 Grey", "Lava Iris 402 White", "Lava Iris 402+ Ivory White", "Lava Iris 402e Grey", "Lava Iris 404e Black", "Lava Iris 405+ Black", "Lava Iris 405+ White", "Lava Iris 406Q Black", "Lava Iris 406Q White", "Lava Iris 408e Frosted Silver", "Lava Iris 415 Black", "Lava Iris 450 Color Plus Black \u0026 Blue", "Lava Iris 450 Color Plus White \u0026 Blue", "Lava Iris 450 White \u0026 Blue", "Lava Iris 456 Black", "Lava Iris 458q Grey", "Lava Iris 504Q+ Gray", "Lava Iris 504Q+ White", "Lava Iris 550Q Black", "Lava Iris Pro 20 Metal Blue", "Lava Iris Pro 30 Grey", "Lava Iris X1 with 4 GB ROM Black", "Lava Iris X1 with 4 GB ROM White", "Lava Iris X1 with 8 GB ROM Black, with 8 GB ROM", "Lava Iris X1 with 8 GB ROM White, with 8 GB ROM", "Lava KKT 27i Blue", "Lava KKT 27i Grey", "Lava KKT 27i Silver", "Lava KKT 27s Grey", "Lava KKT 34i Black \u0026 Silver", "Lava KKT 34star Black \u0026 Red", "Lava KKT 40 Mini Blue", "Lava KKT 42 Black", "Lava KKT Uno Grey", "Lava Magnum X604 White", "Lava Spark 10 Black \u0026 Red", "Lava Spark 245e Black \u0026 Grey", "Lemon B149 Black", "Lemon B159 Multimedia Big Battery Black", "Lemon B169 Multimedia Big Battery Grey", "Lemon B229 Multimedia Big Battery Black", "Lemon B319I Multimedia Big Battery Black", "Lemon B579 Multimedia Big Battery with Box Speaker Black", "Lenovo A269i Black", "Lenovo A369i Black", "Lenovo A390 Black", "Lenovo A390 White", "Lenovo A516 Grey", "Lenovo A516 White", "Lenovo A526 Aurora Blue", "Lenovo A680 Black", "Lenovo A680 White", "Lenovo A800 Black", "Lenovo A850 Black", "Lenovo A850 White", "Lenovo A859 White", "Lenovo IdeaPhone S890 White", "Lenovo Ideaphone A706 Black", "Lenovo Ideaphone A706 White", "Lenovo Ideaphone S920 8 GB White, with 8 GB", "Lenovo K860 Black", "Lenovo K900 Steel Grey", "Lenovo P780 Deep Black", "Lenovo P780 Deep Black, with 8 GB", "Lenovo Reliance CDMA GSM 2 SIM Android SmartPhone A600E Black", "Lenovo S650 Silver", "Lenovo S660 Titanium", "Lenovo S720 White", "Lenovo S820 Red", "Lenovo S820 Red, with 8 GB", "Lenovo S850", "Lenovo S860 Titanium", "Lenovo S880 White", "Lenovo S920 Blue", "Lenovo S920 White", "Lenovo S930 Silver", "Lenovo Vibe X Silver", "Lenovo Vibe Z K910 Silver", "Lenovo Vibe Z K910 Titanium", "MTS Blaze 4", "MTS Blaze 4.5", "MTS Blaze 5.0 White", "MTS Dual CG 131", "MTS Dual CG 141", "MTS Rockstar M131", "MTS Rockstar M141 Red", "Magicon Senior Duo White", "Maxx AX3 Black", "Maxx AX8 Black", "Maxx GenxDroid7 - AX352 Black", "Maxx GenxDroid7 - AX407 Black", "Maxx MSD7 Smarty Black", "Maxx MX426 - Supremo Red", "Maxx Note I AX8 Black", "Maxx Race AX8 Black", "Maxx Race AX9Z White", "Maxx Zippy MT616 Coffee", "Micromax A069 Grey", "Micromax A069 White", "Micromax A069 Yellow", "Micromax A091 C Engage Grey", "Micromax A093 White \u0026 Gold", "Micromax Aisha A52 White", "Micromax Bling 3 A86 White", "Micromax Bolt A068 Blue", "Micromax Bolt A068 White", "Micromax Bolt A075 Blue", "Micromax Bolt A089 Black", "Micromax Bolt A089 White", "Micromax Bolt A24 Champange", "Micromax Bolt A36 Black", "Micromax Bolt A37 Black", "Micromax Bolt A37B Black", "Micromax Bolt A46 Black", "Micromax Bolt A47 Black", "Micromax Bolt A58 Black", "Micromax Bolt A58 Red", "Micromax Bolt A59 Grey", "Micromax Bolt A61 Grey", "Micromax Bolt A62 Black", "Micromax Bolt A62 White", "Micromax Bolt A66 Black", "Micromax Bolt A67 Black", "Micromax Bolt A67 White", "Micromax Bolt A69", "Micromax Bolt A71 Black", "Micromax Bolt A71 White", "Micromax Bolt GC232 Black \u0026 Silver", "Micromax Bolt X101 White", "Micromax Bolt X287 Grey", "Micromax C210 White", "Micromax CDMA C200 Black \u0026 White", "Micromax CG666 Black \u0026 Grey", "Micromax CG666 White", "Micromax Canvas 2 Colors A120 with 4 GB ROM Grey", "Micromax Canvas 2 Colors A120 with 4 GB ROM White", "Micromax Canvas 2 Colors A120 with 8 GB ROM Grey", "Micromax Canvas 2.2 A114 Black", "Micromax Canvas 2.2 A114 White", "Micromax Canvas 4 A210 Grey", "Micromax Canvas Blaze HD EG116 Black", "Micromax Canvas Blaze MT500", "Micromax Canvas Doodle 2 A240 Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM White", "Micromax Canvas Doodle 3 A102 with 512 MB RAM Blue", "Micromax Canvas Doodle 3 A102 with 512 MB RAM White", "Micromax Canvas Doodle A111 White", "Micromax Canvas Duet AE90 Black", "Micromax Canvas Ego A113 Grey", "Micromax Canvas Elanza 2 A121 Black", "Micromax Canvas Elanza A93 Black Silver", "Micromax Canvas Elanza A93 Blue \u0026 Grey", "Micromax Canvas Elanza A93 Coffee", "Micromax Canvas Entice A105 Grey", "Micromax Canvas Fire A093 Black \u0026 Gold", "Micromax Canvas Fire A104 Black Gold", "Micromax Canvas Fun A63 Blue", "Micromax Canvas Fun A63 Yellow", "Micromax Canvas Fun A76 Black", "Micromax Canvas Gold A300 Black Gold", "Micromax Canvas Gold A300 White Gold", "Micromax Canvas HD Plus A190 Black", "Micromax Canvas Juice A177 Black", "Micromax Canvas Juice A77 White", "Micromax Canvas Knight A350 Black", "Micromax Canvas Knight A350 Black \u0026 Gold", "Micromax Canvas Knight A350 White \u0026 Gold", "Micromax Canvas Knight Cameo A290 White \u0026 Gold", "Micromax Canvas L A108 Blue", "Micromax Canvas Magnus A117 Blue", "Micromax Canvas Music A88 Black", "Micromax Canvas Music A88 White", "Micromax Canvas Power A96 Black", "Micromax Canvas Turbo A250 White", "Micromax Canvas Turbo Mini A200 Black", "Micromax Canvas Turbo Mini A200 White", "Micromax Canvas Win W121", "Micromax Canvas XL A119 White", "Micromax Canvas XL2 A109 White", "Micromax EG111 Black", "Micromax Fire 2 A104 White", "Micromax GC222 Black", "Micromax GC222 White", "Micromax GC666 Black \u0026 Grey", "Micromax Knight Cameo A290 White", "Micromax MAd A94 Grey", "Micromax Ninja A91 Black", "Micromax Rockstar C192 Black", "Micromax Smarty 3.0 A30 Black", "Micromax Smarty 4.3 A65 White", "Micromax Unite 2 A106 with 4 GB ROM Green", "Micromax Unite 2 A106 with 4 GB ROM Grey", "Micromax Unite 2 A106 with 4 GB ROM Red", "Micromax Unite 2 A106 with 4 GB ROM White", "Micromax Unite 2 A106 with 8 GB ROM Grey, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM Red, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM White, with 8 GB ROM", "Micromax Unite A092 Black", "Micromax Unite A092 Grey", "Micromax Unite A092 Red", "Micromax Unite A092 White", "Micromax Unite A092 Yellow", "Micromax X084 Black \u0026 Red", "Micromax X084 White Silver", "Micromax X085 Black \u0026 Red", "Micromax X086 White", "Micromax X088 Black \u0026 Red", "Micromax X088 Black \u0026 Silver", "Micromax X089 Black", "Micromax X096 Black", "Micromax X096 White", "Micromax X097 Black", "Micromax X098 Grey", "Micromax X098 Red", "Micromax X101i White", "Micromax X101i Yellow", "Micromax X103i White", "Micromax X103i Yellow", "Micromax X247 Black", "Micromax X249 Black", "Micromax X251 Grey", "Micromax X253 Black", "Micromax X254 Grey", "Micromax X258 Black", "Micromax X267 Black", "Micromax X267 White", "Micromax X279i Grey", "Micromax X281 Grey", "Micromax X282 Grey", "Micromax X325 Grey", "Micromax X328 Grey", "Micromax X329 Black", "Micromax X337 Grey", "Micromax X351 Black Silver", "Micromax X367 Grey", "Micromax X44 Pearl White", "Micromax X455i White", "Micromax X55 Coffee", "Moto E Black", "Moto E White", "Moto X 16 GB Bamboo", "Moto X 16 GB Black", "Moto X 16 GB Red", "Moto X 16 GB Teak", "Moto X 16 GB Walnut", "Moto X 16 GB White", "Mtech A6 Infinity Black", "Mtech A6 Infinity White", "Mtech Fusion Black", "Mtech Fusion Blue", "Mtech G 14 Black", "Mtech G22 Black", "Mtech G22 White", "Mtech G4 Black", "Mtech Jazz Black", "Mtech Jazz White", "Mtech L6 Black", "Mtech L6 Blue", "Mtech L6 Brown", "Mtech Lotus Black", "Mtech Opal 3G Black \u0026 White", "Mtech Pride Blue", "Mtech Pride Red", "Mtech Rock Black", "Mtech Sharp Black", "Mtech Sharp Cyan", "Mtech Sharp Golden", "Mtech Spark Black", "Mtech Spark Black \u0026 White", "Mtech Spark Blue", "Mtech Touch Opal PRO Grey", "Mtech Touch Opal PRO White", "Mtech V22 Black", "Mtech V22 White", "Nokia 105 Black", "Nokia 105 Cyan", "Nokia 106 Black", "Nokia 106 Red", "Nokia 106 White", "Nokia 107 Black", "Nokia 107 Red", "Nokia 107 White", "Nokia 108 Black", "Nokia 108 Cyan", "Nokia 108 Red", "Nokia 108 White", "Nokia 108 Yellow", "Nokia 112 Red", "Nokia 112 White", "Nokia 114 Black", "Nokia 114 Cyan", "Nokia 206 Black, with Dual SIM", "Nokia 206 Cyan, with Dual SIM", "Nokia 206 White, with Dual SIM", "Nokia 208DS Black, with Dual SIM", "Nokia 208DS Red, with Dual SIM", "Nokia 220 Black", "Nokia 220 Red", "Nokia 220 White", "Nokia 220 Yellow", "Nokia 225 Black", "Nokia 225 Bright Red", "Nokia 225 Bright Yellow", "Nokia 225 White", "Nokia 301 Black", "Nokia 301 White", "Nokia 515 Black", "Nokia 515 White", "Nokia Asha 210 Black", "Nokia Asha 210 Cyan", "Nokia Asha 210 Yellow", "Nokia Asha 230 Black", "Nokia Asha 230 Bright Red", "Nokia Asha 230 White", "Nokia Asha 305 Dark Grey", "Nokia Asha 305 Mid Blue", "Nokia Asha 305 Silver White", "Nokia Asha 308 Golden Light", "Nokia Asha 310 White", "Nokia Asha 311 Dark Grey", "Nokia Asha 311 Sand White", "Nokia Asha 500 Black", "Nokia Asha 500 Bright Red", "Nokia Asha 500 White", "Nokia Asha 500 Yellow", "Nokia Asha 501 Black", "Nokia Asha 501 Bright Red", "Nokia Asha 501 White", "Nokia Asha 501 Yellow", "Nokia Asha 502 Black", "Nokia Asha 502 Bright Red", "Nokia Asha 502 White", "Nokia Asha 502 Yellow", "Nokia Asha 503 Black", "Nokia Asha 503 Bright Red", "Nokia Asha 503 White", "Nokia Asha 503 Yellow", "Nokia Lumia 1320 Black", "Nokia Lumia 1320 Orange", "Nokia Lumia 1320 White", "Nokia Lumia 1320 Yellow", "Nokia Lumia 1520 Black", "Nokia Lumia 1520 Red", "Nokia Lumia 1520 White", "Nokia Lumia 1520 Yellow", "Nokia Lumia 520 Black", "Nokia Lumia 520 Cyan", "Nokia Lumia 520 Red", "Nokia Lumia 520 White", "Nokia Lumia 520 Yellow", "Nokia Lumia 525 Black", "Nokia Lumia 525 Orange", "Nokia Lumia 525 White", "Nokia Lumia 525 Yellow", "Nokia Lumia 530 Dual SIM Bright Orange", "Nokia Lumia 530 Dual SIM Dark Grey", "Nokia Lumia 530 Dual SIM White", "Nokia Lumia 610 Cyan", "Nokia Lumia 610 White", "Nokia Lumia 620 Black", "Nokia Lumia 620 White", "Nokia Lumia 620 Yellow", "Nokia Lumia 625 Black", "Nokia Lumia 625 Green", "Nokia Lumia 625 Orange", "Nokia Lumia 625 White", "Nokia Lumia 625 Yellow", "Nokia Lumia 630 Dual SIM Black", "Nokia Lumia 630 Dual SIM Bright Green", "Nokia Lumia 630 Dual SIM Bright Orange", "Nokia Lumia 630 Dual SIM Bright Yellow", "Nokia Lumia 630 Dual SIM White", "Nokia Lumia 630 Single SIM Black", "Nokia Lumia 630 Single SIM Bright Green", "Nokia Lumia 630 Single SIM Bright Orange", "Nokia Lumia 630 Single SIM Bright Yellow", "Nokia Lumia 630 Single SIM White", "Nokia Lumia 920 White", "Nokia Lumia 925 Black", "Nokia Lumia 925 Grey", "Nokia Lumia 925 White", "Nokia X Black", "Nokia X Bright Green", "Nokia X Bright Red", "Nokia X Cyan", "Nokia X White", "Nokia X Yellow", "Nokia X+ Black", "Nokia X+ Bright Green", "Nokia X+ Yellow", "Nokia XL Black", "Nokia XL Bright Green", "Nokia XL Bright Orange", "Nokia XL Bright Yellow", "Nokia XL Cyan", "Nokia XL White", "Nuclear SX 5.3i Smartphone Black", "OPPO Find 5 Mini R827 Black", "OPPO Find 5 Mini R827 White", "OPPO Find 7 X9076 Black", "OPPO Find 7 X9076 White", "OPPO Find 7a X9006 Black", "OPPO Find 7a X9006 White", "OPPO Joy R1001 Black", "OPPO Joy R1001 White", "OPPO N1 Mini Lemon", "OPPO N1 Mini Mint", "OPPO N1 Mini White", "OPPO N1 White", "OPPO Neo 3 R831K Grey", "OPPO Neo 3 R831K White", "OPPO R1 829 Black", "OPPO R1 829 White", "OPPO Yoyo R2001 Black", "OPPO Yoyo R2001 White", "Olive V-C2130 Black", "Onida G Series G180 Black", "Onida G Series G181 Black \u0026 Red", "Onida G007S Black", "Onida G182 Black", "Onida G183 Black \u0026 Red", "Onida G183 Multicolor", "Onida G242 Black \u0026 Red", "Onida G640A Grey \u0026 Silver", "Onida i011 Black", "Onida i011 White", "Onida i099 Black", "Onida i666 W4413 White", "Onida i666 White", "Onida i777 W4213 White", "Panasonic Eluga A White", "Panasonic Eluga U Black", "Panasonic Eluga U White", "Panasonic GD 28 Black", "Panasonic GD21 Grey", "Panasonic GD31 Black", "Panasonic GD31 White", "Panasonic P11 with Changeable Back Covers", "Panasonic P31 Midnight Blue", "Panasonic P31 Pure White", "Panasonic P41 Black", "Panasonic P51 Black", "Panasonic P51 White", "Panasonic P61 Black", "Panasonic P61 White", "Panasonic P81 Black", "Panasonic T11 White", "Panasonic T21", "Panasonic T31 Black", "Panasonic T31 White", "Panasonic T41 Black", "Panasonic T41 White", "Rage Ace_Black Red", "Rage Ace_Blue Black", "Rage Ace_Green Black", "Rage Ace_White White", "Rage Duke_Green Green", "Rage Glory_Black Silver", "Rage Hero Black \u0026 Grey", "Rage Hero Black \u0026 Red", "Rage Hero White \u0026 Blue", "Rage Magic-50 Black", "Rage Magic-50 White", "Rage Minni_White White", "Rage OPS 35g Blue", "Rage OPS 60dn White", "Rage OPS 80 White", "Rage OPS 80d Black", "Rage OPS 80d White", "Rage OPS 80q Black", "Rage Ps16 Black \u0026 Silver", "Rage Ps16 White \u0026 Silver", "Rage Ps20 White \u0026 Red", "Rage Silk_Blue Black", "Rage Silk_Golden Black", "Rage Storm_Blue Blue", "Rage Storm_White White", "Rage Ultra Black", "Rage Vega White", "Salora SM204 Red", "Salora SM508 Blue \u0026 Black", "Salora SM601 Black \u0026 Gold", "Samsung E2252 Metallic Silver", "Samsung E2252 Pure White", "Samsung G350 White", "Samsung GT 1200 R/I/M", "Samsung Galaxy Ace NXT-G313H White", "Samsung Galaxy Core 2 SM-G355H Black", "Samsung Galaxy Core 2 SM-G355H White", "Samsung Galaxy Core I8262 Chic White", "Samsung Galaxy Golden I9230 Champagne Gold", "Samsung Galaxy Grand 2 Black", "Samsung Galaxy Grand 2 White", "Samsung Galaxy Grand Duos I9082 Elegant White, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Duos I9082 Metallic Blue, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Neo GT-I9060 Midnight Black", "Samsung Galaxy Grand Neo GT-I9060 White", "Samsung Galaxy Mega 5.8 I9152 White", "Samsung Galaxy Note 2 N7100 Marble White", "Samsung Galaxy Note 2 N7100 Titanium Grey", "Samsung Galaxy Note 3 N9000 Blush Pink", "Samsung Galaxy Note 3 N9000 Classic White", "Samsung Galaxy Note 3 N9000 Jet Black", "Samsung Galaxy Note 3 Neo Black", "Samsung Galaxy Note 3 Neo White", "Samsung Galaxy S Duos 2 S7582 Black", "Samsung Galaxy S Duos 2 S7582 Pure White", "Samsung Galaxy S3 Marble White, with 16GB", "Samsung Galaxy S3 Neo GT-I9300I Blue", "Samsung Galaxy S3 Neo GT-I9300I Marble White", "Samsung Galaxy S4 I9500 Black Mist", "Samsung Galaxy S4 I9500 Deep Black", "Samsung Galaxy S4 I9500 White Frost", "Samsung Galaxy S4 Mini I9192 Black Mist", "Samsung Galaxy S4 Mini I9192 White Frost", "Samsung Galaxy S4 Zoom SM-C1010 White", "Samsung Galaxy S5 Charcoal Black", "Samsung Galaxy S5 Copper Gold", "Samsung Galaxy S5 Electric Blue", "Samsung Galaxy S5 Shimmery White", "Samsung Galaxy Star Pro S7262 Midnight Black", "Samsung Galaxy Star Pro S7262 White", "Samsung Galaxy Star S5282 Ceramic White", "Samsung Galaxy Star S5282 Noble Black", "Samsung Galaxy Star S5282 Silver", "Samsung Galaxy Trend S7392 Ceramic White, with 4 GB", "Samsung Galaxy Trend S7392 Midnight Black", "Samsung Galaxy Y S5360 Pure White", "Samsung Guru 1200 Black", "Samsung Guru 1200 Indigo Blue", "Samsung Guru 1200 White", "Samsung Guru E1207T Black", "Samsung I8552 - Galaxy Grand Quattro Ceramic White", "Samsung I8552 - Galaxy Grand Quattro Titan Gray", "Samsung Keystone 2 E1207Y Black", "Samsung Metro DUOS C3322 Deep Black", "Samsung Omnia M S7530 Deep Gray", "Samsung S6812 - Galaxy Fame Metallic Blue", "Samsung S7262 Wine Red", "Sansui SA40 Black", "Sansui SA50 Plus Grey", "Simmtronics Xpad M1 Black", "Simmtronics Xpad Q1 Black", "Simmtronics Xpad Q4", "Simmtronics Xpad Q4 Black", "Simmtronics Xpad Q5 Black", "Sony Xperia C Black", "Sony Xperia C Purple", "Sony Xperia C White", "Sony Xperia C3 Black", "Sony Xperia C3 White", "Sony Xperia E Black", "Sony Xperia E Dual Champagne", "Sony Xperia E White", "Sony Xperia E1 Black", "Sony Xperia E1 Dual Black", "Sony Xperia E1 Dual Purple", "Sony Xperia E1 Dual White", "Sony Xperia E1 Purple", "Sony Xperia E1 White", "Sony Xperia Go Warm Yellow", "Sony Xperia L Rose Red", "Sony Xperia L Starry Black", "Sony Xperia M Black", "Sony Xperia M Dual Black", "Sony Xperia M Dual Purple", "Sony Xperia M Dual White", "Sony Xperia M Purple", "Sony Xperia M White", "Sony Xperia M2 Dual Black", "Sony Xperia M2 Dual Purple", "Sony Xperia M2 Dual White", "Sony Xperia Miro Black", "Sony Xperia Miro White with Silver Strip", "Sony Xperia Neo L Glossy Black", "Sony Xperia P Black", "Sony Xperia P Red", "Sony Xperia P Silver", "Sony Xperia SP Black", "Sony Xperia SP Red", "Sony Xperia SP White", "Sony Xperia T2 Ultra Black", "Sony Xperia T2 Ultra Purple", "Sony Xperia T2 Ultra White", "Sony Xperia T3 Black", "Sony Xperia T3 Purple", "Sony Xperia T3 White", "Sony Xperia Tipo Classic White", "Sony Xperia Tipo Dual Classic Silver", "Sony Xperia Z Black", "Sony Xperia Z Purple", "Sony Xperia Z Ultra Black", "Sony Xperia Z Ultra Purple", "Sony Xperia Z Ultra White", "Sony Xperia Z White", "Sony Xperia Z1 Black", "Sony Xperia Z1 Compact Black", "Sony Xperia Z1 Compact Lime", "Sony Xperia Z1 Compact Pink", "Sony Xperia Z1 Compact White", "Sony Xperia Z1 Purple", "Sony Xperia Z1 White", "Sony Xperia Z2 Black", "Sony Xperia Z2 Purple", "Sony Xperia Z2 White", "Sony Xperia ZR White", "Spice Boss Champion 2 M-5008 Black", "Spice Boss Chocolate M-5373 Black", "Spice Boss Delite M-5162 White", "Spice Boss Link M-5621 Black", "Spice Boss M-5470 Grey", "Spice Boss Slender 2 M-5404 White", "Spice Boss Slender M-5371", "Spice Boss Trendy 4 M-5004 Black", "Spice Boss Trendy 5 M-5032 White", "Spice Boss Trio M-5025 Black", "Spice Buddy N-300 Midnight Black", "Spice Coolpad 2 Mi-496 White", "Spice Flo Rainbow M-6111", "Spice Flo Sleek M-5915", "Spice M-5415 Black", "Spice Smart Flo Edge Mi-349 White", "Spice Smart Flo Mettle 3.5X Mi-356 White", "Spice Smart Flo Mettle 4X Mi-426 White", "Spice Smart Flo Mettle 5X Mi-504 Black", "Spice Smart Flo Mettle 5X Mi-504 White", "Spice Smart Flo Pace 3 Mi-502n White", "Spice Smart Flo Pace Mi-422 White", "Spice Smart Flo Poise Mi-451", "Spice Stellar 360", "Spice Stellar 361 Black", "Spice Stellar 361 White", "Spice Stellar 445 Black", "Spice Stellar 497 White", "Spice Stellar 506 Titanium Grey", "Spice Stellar 509", "Spice Stellar 520 Red", "Spice Stellar 520 Yellow", "Spice Stellar Glamor Mi-436", "Spice Stellar Glide Mi-438 Silver", "Spice Stellar Horizon Pro Mi-505 White", "Spice Stellar Mettle Icon Mi-506 Silver", "Spice Stellar Nhance 2 Mi-437", "Spice Stellar Pinnacle Pro Mi-535 Brown", "Spice Stellar Virtuoso Pro Mi-491 Black", "Spice Steller Virtuoso Pro+ Mi-492 White", "Swingtel Mini SX3 White", "Swingtel SW27 Black", "Swingtel SW27 White", "Swingtel SW30 Black", "Swingtel SW30 Silver", "Swingtel SW30 White", "Swingtel SW50+ Black", "Swingtel SW50+ Red", "Swingtel Superb White", "Swingtel Tigertab White, Red, Grey", "Swipe Fablet F2 White", "Swipe Konnect 5.0 Black", "Swipe Konnect 5.0 White", "Swipe Sense Black", "Swipe Sonic Black", "TVC Android 2.2 Smartphone Black", "Trio T2020L Black \u0026 Blue", "Trio T2020L Black \u0026 Grey", "Trio T2020L White \u0026 Blue", "Trio T2020XL Black \u0026 Blue", "Trio T2020XL Black \u0026 Gold", "Trio T2020XL Black White", "Trio T2424 Black \u0026 Green", "Trio T2424 Black \u0026 Red", "Trio T2424 White \u0026 Blue", "Trio T2424XL Black \u0026 Blue", "Trio T2424n Black \u0026 Blue", "Trio T2424n Black White", "Trio T2626 Black", "Trio T2626 White \u0026 Blue", "Trio T2626 White \u0026 Yellow", "Trio T2828 Black \u0026 Grey", "Trio T2828 Black White", "V3 Bizz GQ225 Grey", "Videocon A 54 White", "Videocon A 55q HD Black", "Videocon A15 Black", "Videocon A15 White Chrome", "Videocon A16 Black", "Videocon A16 White", "Videocon A42 Black", "Videocon A48 White", "Videocon A52 White", "Videocon A53 White Chrome", "Videocon A55 HD Black \u0026 Silver", "Videocon A55HD White", "Videocon Dost V1539 N Black Silver", "Videocon Dost V1615 Black", "Videocon Dost V1615 Silver", "Videocon V1508 Black", "Videocon V1544 Black \u0026 Silver", "Videocon vphone Gold", "Videocon vphone White", "Vox Kick 5 Black", "Vox Kick 5 White", "Vox V-3100 Black", "Vox V-3100 White", "Wham W20i Black", "Wham W24i Black", "Wham W26i Black", "Wynncom W101 Black", "Wynncom WYNNW412 Black", "XElectron AN1 Black", "XElectron BluEye Black", "XElectron M007 Black", "XElectron M998 Black", "XElectron N100 Black", "XElectron X1 White", "XElectron X1Black Black", "XOLO 8X-1000 Black", "XOLO A500 Club Black", "XOLO A500 Club White", "XOLO A500S Black", "XOLO A500S IPS Black", "XOLO A500S IPS Green", "XOLO A500S IPS Red", "XOLO A500S White", "XOLO A500s Lite Black", "XOLO A500s Lite White", "XOLO A550S IPS Black", "XOLO A600 Black", "XOLO A600 Blue", "XOLO A600 White", "XOLO A600 Yellow", "XOLO A700S Black", "XOLO LT900 Black", "XOLO Opus 2 Q1000 Black", "XOLO Play 6X-1000 Black", "XOLO Play 6X-1000 White", "XOLO Play Black", "XOLO Q1000 Black", "XOLO Q1000 Opus Black", "XOLO Q1000 Opus White", "XOLO Q1000 White", "XOLO Q1000S Black", "XOLO Q1000S Plus Black", "XOLO Q1010 White", "XOLO Q1010i Black", "XOLO Q1010i Coffee Brown", "XOLO Q1010i White", "XOLO Q1011 Black", "XOLO Q1011 White", "XOLO Q1100 Black", "XOLO Q1200 Black", "XOLO Q1200 White", "XOLO Q2000 White", "XOLO Q2000L White", "XOLO Q2500 Black", "XOLO Q3000 Black", "XOLO Q3000 White", "XOLO Q500S IPS Black", "XOLO Q500S IPS Green", "XOLO Q500S IPS Red", "XOLO Q600 White", "XOLO Q600S Black", "XOLO Q600S White", "XOLO Q700S Gold", "XOLO Q700S Plus Gold", "XOLO Q700S Silver", "XOLO Q700i Black", "XOLO Q900 White", "XOLO Q900S Black", "XOLO Q900T", "XOLO Win Q900s Black", "XOLO X1000 Black", "Y King Y 10 Black", "Y King Y 10 White", "Y King Y 20 Black", "Y King Y 30 Black", "Y King Y 30 White", "ZTE Blade C V807 Black", "ZTE Blade L V887", "ZTE Grand X Quad Lite Blue", "ZTE Grand X Quad Lite White", "ZTE Reliance d286 Black", "ZTE Reliance d286 White", "ZTE S183Reliance CDMA Only Black", "Zen 303 Power Black", "Zen 306 Ultrafone 306 Play Black \u0026 Red", "Zen 701 Amaze 701 Full Hd Black", "Zen P36 Black", "Zen U 504 B Black", "Zen U 504 W White", "Zen Ultrafone 502qHD Black", "Zook Boss Black", "Zook Brave Brown", "Zook Brilliant Grey", "Zook IMAX Blue", "Zook Iconic Black", "Zook Iconic Gold", "Zook Ideal Black", "Zook Ideal Gold", "Zook Keypad Sliver", "Zook Keypad White", "Zync Cloud Z401", "Zync X108 White", "Zync X207 Black", "iBall 4PIPS Gem Black", "iBall Andi 3.5 Classique With 1.3 Ghz Processor White", "iBall Andi 4.5 2G Grey", "iBall Andi 4.5 2G Ripple White", "iBall Andi 4.5 3G Ripple White", "iBall Andi 4.5 3G Wine \u0026 Gunmetal", "iBall Andi 4.5D Royale", "iBall Andi 4.7G Cobalt", "iBall Andi 5-M8 Black", "iBall Andi 5.5N2 Quadro", "iBall Andi 5K Sparkle White White", "iBall Andi 5K Sparkle Wine Special Wine", "iBall Andi 5T Cobalt 2", "iBall Andi Uddaan", "iBall Andi3.5kke Genius Black", "iBall Andi3.5kke Genius White", "iBall Andi3.5kke Winner Black", "iBall Andi3.5kke Winner White", "iBall Andi4 B2 Black", "iBall Andi4 Gem Black", "iBall Andi4 Gem White", "iBall Andi4 Velvet Black", "iBall Andi4 Velvet White", "iBall Andi4.5P Glitter White", "iBall Andi4.5P Glitter Yellow", "iBall Andi4.5Q White", "iBall Andi4.5d Royale White", "iBall Andi5-E7 Grey", "iBall IPS Tiger Andi4 Royal Blue", "iBall Iball Vogue 2.8A Slim Bar Design White White", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Black", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Yellow", "iBall King1.8D White", "iBall Senior Aasaan2 White", "iBall Shaan Fab2.4V8 Black \u0026 Blue", "iBall Shaan Fab2.4V8 Black \u0026 Yellow", "iBall Vogue 1.8-KK18 Black", "iBall Vogue 1.8-KK7 Yellow", "iBall Vogue 2.4 kk1 Grey", "iBall Vogue2.4e Black", "iBall iBall Andi 3.5kke Glory Special Wine", "iBall iBall Vogue 2.8A Slim Bar Design Grey Grey"]


        $scope.pricedivisionslaptop = [
            {
                price: "Rs. 2000 and below"
            },
            {
                price: "Rs 2001 - 5000"
            },
            {
                price: "Rs 5001 - 10000"
            },
            {
                price: "Rs 10001 - 18000"
            },
            {
                price: "Rs 18001 - 25000"
            },
            {
                price: "Rs 25001 - 35000"
            },
            {
                price: "Rs 35001 and above"
            }
        ];


        // laptop divisions for changes
        $scope.$watch('laptopesdivisions|filter:{selected:true}', function (nv) {
            $scope.laptoptradeshow.laptopDivisions = nv.map(function (division) {
                //alert(division.brand);
                console.log({name: division.brand});
                return {name: division.brand};
            });

            var display = 0;
            if (angular.toJson($scope.laptoptradeshow.laptopDivisions).length > 0 && angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop).length > 0
                && angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop).length > 0) {
                //show brand, color and price
                display = 1;
            } else if (angular.toJson($scope.laptoptradeshow.laptopDivisions).length > 0 && angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop).length > 0
                && angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop).length < 0) {
                //show only brand and color
                display = 2;
            } else if (angular.toJson($scope.laptoptradeshow.laptopDivisions).length > 0 && angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop).length < 0
                && angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop).length < 0) {
                //show only brand
                display = 3;
            } else if (angular.toJson($scope.laptoptradeshow.laptopDivisions).length < 0 && angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop).length > 0
                && angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop).length > 0) {
                //show only color and price
                display = 4;
            } else if (angular.toJson($scope.laptoptradeshow.laptopDivisions).length < 0 && angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop).length > 0
                && angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop).length < 0) {
                //show only color
                display = 5;
            } else if (angular.toJson($scope.laptoptradeshow.laptopDivisions).length < 0 && angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop).length < 0
                && angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop).length < 0) {
                //show none
                display = 6;
            } else if (angular.toJson($scope.laptoptradeshow.laptopDivisions).length < 0 && angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop).length < 0
                && angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop).length > 0) {
                //show price
                display = 7;
            }

            switch (display) {
                case 1:
                    $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                        color: angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop), price: angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop)});
                    break;
                case 2:
                    $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                        color: angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop), price: angular.toJson($scope.priceDivisionslaptop)});
                    break;
                case 3:
                    $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                        color: angular.toJson($scope.colorDivisionslaptop), price: angular.toJson($scope.priceDivisionslaptop)});
                    break;
                case 4:
                    $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                        color: angular.toJson($scope.colortradeshowlaptop.colorDivisions), price: angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop)});
                    break;
                case 5:
                    $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                        color: angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop), price: angular.toJson($scope.priceDivisionslaptop)});
                    break;
                case 6:
                    //  $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                    //    color: angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop), price: angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop)});
                    break;
                case 7:
                    $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                        color: angular.toJson($scope.colorDivisionslaptop), price: angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop)});
                    break;
                default:
                    break;
            }


            console.log("tradeshowlaptop" + angular.toJson($scope.laptoptradeshow.laptopDivisions));
            //$location.path('/view2');
        }, true);


        $scope.colortradeshowlaptop = { };
        $scope.colortradeshowlaptop.colorDivisionslaptop = [];


        // helper method
        $scope.selectedColorDivisionslaptop = function selectedColorDivisionslaptop() {
            return filterFilter($scope.colortradeshowlaptop.colorDivisionslaptop, { selected: true });
        };

        // laptop divisions for changes
        $scope.$watch('colordivisionslaptop|filter:{selected:true}', function (nv1) {
            $scope.colortradeshowlaptop.colorDivisionslaptop = nv1.map(function (colordivisionlaptop) {
                //alert(division.brand);
                console.log({color: colordivisionlaptop.color});
                return {color: colordivisionlaptop.color};
            });
            $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                color: angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop), price: angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop)});
            console.log("colortradeshowlaptop" + angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop));
            //  $location.path('/view2');
        }, true);


        $scope.pricetradeshowlaptop = { };
        $scope.pricetradeshowlaptop.priceDivisionslaptop = [];


        // helper method
        $scope.selectedPriceDivisionslaptop = function selectedPriceDivisionslaptop() {
            return filterFilter($scope.pricetradeshowlaptop.priceDivisionslaptop, { selected: true });
        };


        // laptop divisions for changes
        $scope.$watch('pricedivisionslaptop|filter:{selected:true}', function (nv2) {
            $scope.pricetradeshowlaptop.priceDivisionslaptop = nv2.map(function (pricedivisionlaptop) {
                //alert(division.brand);
                console.log({price: pricedivisionlaptop.price});
                return {price: pricedivisionlaptop.price};
            });
            $rootScope.laptoplist = LaptopFactory.brandName.query({brands: angular.toJson($scope.laptoptradeshow.laptopDivisions),
                color: angular.toJson($scope.colortradeshowlaptop.colorDivisionslaptop), price: angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop)});
            console.log("pricetradeshowlaptop" + angular.toJson($scope.pricetradeshowlaptop.priceDivisionslaptop));
            // $location.path('/view2');
        }, true);


        $scope.getlaptopInfo = function (product) {
            console.log("getProductInfo - " + product.productName);
            //$rootScope.productInfo = UserFactory.productdetails.query({key: product.productName});

            $rootScope.pricecompare = {productName: ""};
            $rootScope.pricecompare = LaptopFactory.productdetails.query({key: product.productName});
            console.log("price compare - " + $rootScope.pricecompare.length);

            $rootScope.productInfo = product;
            $rootScope.image = product.productImage;
            console.log("productInfo length - " + product.productImage);
            console.log("productInfo length - " + $rootScope.image);
            console.log("productInfo length - " + $scope.productInfo.productName);

            $scope.$watch($rootScope.productInfo, function (newVal) {
                //alert("Changed an input");
            }, true);

            $scope.$watch($rootScope.pricecompare, function (newVal) {
                //alert("Changed an input");
            }, true);

            //  $location.path('/view2');
        }


    }]);


app.controller('tvesCtrl', ['$scope', '$rootScope', '$location', 'UserFactory', 'TVFactory', '$q',
    function ($scope, $rootScope, $location, UserFactory, TVFactory, $q) {


        $scope.items = [
            { id: 1, name: 'Books'},
            { id: 2, name: 'Mobile'}
        ];


        $scope.mentves = function () {
            console.log("mentves");
            $rootScope.tvlist = TVFactory.home.query();

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.tvlist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.tvlist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/tves');
        }


        $scope.womentves = function () {
            console.log("womentves");
            console.log("mentves");
            $rootScope.tvlist = TVFactory.home.query({productcategory: 'Women tves'});

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.tvlist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.tvlist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/tves');
        }


        $scope.tvesdivisions = TVFactory.tvbrands.query();

        $scope.tvtradeshow = { };
        $scope.tvtradeshow.tvDivisions = [];

        // selected divisions
        //$scope.selection = [];

        // helper method
        $scope.selectedDivisionstv = function selectedDivisionstv() {
            return filterFilter($scope.tvtradeshow.tvDivisions, { selected: true });
        };


        $scope.colordivisionstv = [
            {
                color: "White"
            },
            {
                color: "Yellow"
            },
            {
                color: "Pink"
            },
            {
                color: "Black"
            },
            {
                color: "Grey"
            }
        ];


        $scope.typeahead = ["ADCOM A-430I PS Black", "ADCOM Smartphone A-350i Black", "ADCOM Smartphone A-350i White", "ADCOM Smartphone A-500 Black", "ADCOM Smartphone A-500 White", "ADCOM Thunder A-350 Black", "ADCOM Thunder A-350 White", "ADCOM Thunder A-400 Black", "ADCOM Thunder A-400 White", "ADCOM Thunder A-400i Black", "ADCOM Thunder A-400i White", "ADCOM Thunder A-430 White", "ADCOM X8 Black", "ADCOM X8 White", "ADCOM X9 Black", "ADCOM X9 Red", "Adcom X10 Black", "Adcom X10 White", "Adcom X11 Black", "Adcom X12 Black", "Adcom X14 Black", "Adcom X14 Grey", "Adcom X28 Silver", "Alcatel 890D Silver", "Alcatel One Touch J636d+ Black", "Alcatel Onetouch Idol Mini 6012D", "Alcatel Onetouch Idol X+ Bluish Black, with 16 GB", "Alcatel Onetouch Idol X+ White, with 16 GB", "Apple iPhone 4 Black, with 16 GB", "Apple iPhone 4 Black, with 8 GB", "Apple iPhone 4 White, with 16 GB", "Apple iPhone 4 White, with 8 GB", "Apple iPhone 4S Black, with 8 GB", "Apple iPhone 4S White, with 8 GB", "Apple iPhone 5C 8 GB Blue, with 8 GB", "Apple iPhone 5C 8 GB Green, with 8 GB", "Apple iPhone 5C 8 GB Pink, with 8 GB", "Apple iPhone 5C 8 GB White, with 8 GB", "Apple iPhone 5C 8 GB Yellow, with 8 GB", "Apple iPhone 5C Blue, with 16 GB", "Apple iPhone 5C Blue, with 32 GB", "Apple iPhone 5C Green, with 16 GB", "Apple iPhone 5C Green, with 32GB", "Apple iPhone 5C Pink, with 16 GB", "Apple iPhone 5C Pink, with 32GB", "Apple iPhone 5C White, with 16 GB", "Apple iPhone 5C White, with 32GB", "Apple iPhone 5C Yellow, with 16 GB", "Apple iPhone 5C Yellow, with 32GB", "Apple iPhone 5S Gold, with 16 GB", "Apple iPhone 5S Gold, with 32 GB", "Apple iPhone 5S Gold, with 64 GB", "Apple iPhone 5S Silver, with 16 GB", "Apple iPhone 5S Silver, with 32 GB", "Apple iPhone 5S Silver, with 64 GB", "Apple iPhone 5S Space Grey, with 16 GB", "Apple iPhone 5S Space Grey, with 32 GB", "Apple iPhone 5S Space Grey, with 64 GB", "Arise Bingo AX111 Black", "Arise Imperia AX282 Black", "Arise Magnet AX251 Black", "Asus Zenfone 4 A400CG Black, with 8 GB", "Asus Zenfone 4 A400CG Blue, with 8 GB", "Asus Zenfone 4 A400CG Red, with 8 GB", "Asus Zenfone 4 A400CG White, with 8 GB", "Asus Zenfone 4 A400CG Yellow, with 8 GB", "Asus Zenfone 4 A450CG Black, with 8 GB", "Asus Zenfone 4 A450CG Solar Yellow, with 8 GB", "Asus Zenfone 4 A450CG White, with 8 GB", "Asus Zenfone 6 A600CG / A601CG Black, with 16 GB", "Asus Zenfone 6 A600CG / A601CG Red, with 16 GB", "Atom Supremus White", "Atom Ultimus White", "BLU B10 BLK Black", "BLU B10 JUMBO R Black", "BLU B10 JUMBO Y Black", "BLU B10 R Black", "BLU B10 Y Black", "BLU B10+ B Blue", "BLU B10+ O Orange", "BLU B10+ R Red", "BLU B10+ Y Yellow", "BLU B23 B Black", "BLU B23 G Black", "BLU B23 R Black", "BLU B23 Y Black", "BLU B306A BLK Black", "BLU B306A W White", "BLU B307 BLK Black", "BLU B307 W White", "BLU B309A W White", "BLU B41 BLK Grey", "BLU B41 Gry Black", "BQ K12 Grey", "BQ K15 Grey", "BQ K18 Blue", "BQ K26 Green", "BQ K27 Gold", "BQ K28 White", "BQ K29 Black", "BQ K50 Grey", "BQ K80 Blue", "BQ S35 Red", "BQ S36 Black", "BQ S37 Black", "BQ S37 White", "BQ S60 Black", "BSNL-Champion Champion Apna Phone SQ241 Power Black", "BSNL-Champion Champion My Phone 51 Black", "BSNL-Champion Champion My Phone 51 White", "BSNL-Champion DM6513 White", "BSNL-Champion Myphone 41 Black", "BSNL-Champion Pro SQ181 Black", "BSNL-Champion SM3513 Black", "BSNL-Champion SQ 181 power Black", "BSNL-Champion SQ 181 power White", "BSNL-Champion SQ 241 Sleek Black", "BSNL-Champion SQ 241 Sleek White", "BSNL-Champion SQ241 SQ241 Black", "BSNL-Champion SQ281 SQ281 Black", "Belkin Skype V1000 Black", "BlackBerry 9720 Black", "BlackBerry 9720 White", "BlackBerry Bold 9790 Pink", "BlackBerry Curve 3G 9300 Pink", "BlackBerry Curve 9220 Black", "BlackBerry Q10 Black", "BlackBerry Q10 White", "BlackBerry Torch 9810 White", "BlackBerry Torch 9810 Zinc Grey", "BlackBerry Torch 9860 Shadow Grey", "BlackBerry Z10 Charcoal Black", "BlackBerry Z10 Pure White", "BlackBerry Z3 Black, with 8 GB", "BlackBerry Z30 Black", "BlackBerry Z30 White", "Blackberry Curve 9320 Black", "Byond B50 Black", "Celkon A10 3G Campus Series Black", "Celkon A107+ Smart Phone White", "Celkon A112 Signature Swift Black", "Celkon A112 White", "Celkon A119Q A 119 Q Smart Phone Black", "Celkon C349* Black", "Celkon C5 Star White", "Celkon C56 Black", "Celkon C6* Black \u0026 Red", "Celkon C605 Black", "Celkon C7045 Black", "Celkon Campus A20 White", "Celkon Campus A225 White", "Celkon Campus A35K Blue", "Celkon Campus A40 Yellow", "Celkon Campus A42 Black", "Celkon Campus A43 Black", "Celkon Campus A66 Black", "Celkon Campus A66 White", "Celkon Campus A9Dual White \u0026 Black", "Celkon Campus Mini A350 White", "Celkon Campus Series A20 Smart Phone Black", "Celkon Celkon Campus Series A 63 Smart Phone Campus Series A63 Black", "Celkon Feature Phone C297 Black", "Celkon Feature Phone C297 White", "Celkon Feature Phone C9 Jumbo White", "Celkon Millennium Q44 Black", "Celkon Millennium Q455 Black", "Celkon Millennium Q455 Blue", "Celkon Millennium Q455 White", "Celkon Millennium Q470 White", "Celkon Signature 118 HD Black", "Celkon Signature A115 White", "Celkon Signature Two A500 Black", "DOMO nTice G12 Phablet Mobile Smartphone White", "Datawind PocketSurfer3G5", "Datawind PocketSurfer5 White", "Datawind PocketSurfer5X Black", "Dell Venue V03B Black", "Devante Boss 1 Black", "Devante Boss 1 White", "Devante Boss 2 Black", "Devante Boss 2 Blue", "Devante Boss 2 White", "Devante Dynamite White", "Devante Hero 1 Subway Series S1 Black", "Devante Hero 1 Subway Series S1 White", "Devante Thunder Black", "Digimac 3X Black", "Digimac 3X White", "Digimac EXI Black", "Digimac EXI White", "Digimac Fusion Black", "Digimac Fusion White", "Digimac VIVO Black", "Digimac VIVO White", "Forme C101 Black", "Forme Coke A1 Red", "Forme D516 Black", "Forme D516 Black \u0026 Red", "Forme D516 Champagne", "Forme D555+ Grey", "Forme D555+ Red", "Forme D556 Black \u0026 Red", "Forme D815 Black", "Forme D815 Red", "Forme Discovery P9 Black", "Forme Discovery P9 Blue", "Forme Discovery P9 plus Black", "Forme Discovery P9 plus Blue", "Forme Energy D9 Black", "Forme F10 Black \u0026 Red", "Forme F8+ Silver", "Forme Fantasy F10 Black", "Forme Fantasy F10 Red", "Forme Find F105 Red", "Forme Forever F8 Red", "Forme Forever F8 Silver", "Forme Hero Blue", "Forme Honey Hero Black", "Forme Hope H1 Black", "Forme Hope H1 Blue \u0026 Black", "Forme Inspire V8 Black", "Forme Inspire V8 Brown", "Forme Inspire V8 Silver", "Forme K1 Black \u0026 Red", "Forme King K1 Red", "Forme L100 White \u0026 Silver", "Forme L600 Red", "Forme L900 Red", "Forme L900 White", "Forme L900 White \u0026 Red", "Forme Love One Black", "Forme Love One Brown", "Forme Love One Red", "Forme M20 White", "Forme M60 Pink", "Forme M600 Red", "Forme M600 White", "Forme M660 Red", "Forme M660 White", "Forme M80 Red", "Forme M90 Black", "Forme Mini 5130 Black", "Forme Onion K806 Black", "Forme Onion K806 White", "Forme P9 Plus Black", "Forme Power One A60 Black", "Forme Power Two M22 Grey", "Forme Power Two M22 Red", "Forme Queen K08-grey Grey", "Forme Queen K08-red Red", "Forme Queen K08-white White", "Forme S10 Silver \u0026 Green", "Forme Summer S700 Pink", "Forme Summer S700 Purple", "Forme Summer S700 Red", "Forme Summer S700 White", "Forme Sunny S60 Black", "Forme Sunny S60 Blue", "Forme Sunny S60 Orange", "Forme Surprise P10 Black", "Forme Surprise S10 Green", "Forme Surprise S10 Red", "Forme Surprise S11 Black", "Forme Surprise S11 Red", "Forme T4 Silver", "Forme Teddy T2 Green", "Forme Teddy T2 White", "Forme Teddy T3 Black", "Forme Teddy T3 Red", "Forme Teddy T4 Green", "Forme Teddy T4 Silver", "Forme V8 White", "Forme Venus V11 Black", "Forme Venus V11 Red", "Forme W3 Gold", "Forme Winner W3 Blue \u0026 Silver", "Forme Winner W3 Gold", "Forme Winner W3 Grey", "Funtab Phablet Fone PHA6.4 White", "Gee Pee 3dh 4430 Black", "Gionee CTRL V5 White", "Gionee E7 Mini", "Gionee Elife E3 Black", "Gionee Elife E6 Black", "Gionee Elife E7 16 GB Black, with 16 GB", "Gionee Elife E7 16 GB White, with 16 GB", "Gionee Elife E7 32 GB Black, with 32 GB", "Gionee Elife E7 32 GB White, with 32 GB", "Gionee Elife S5.5 Black", "Gionee Elife S5.5 White", "Gionee G1 Black", "Gionee Gpad G3 White", "Gionee Gpad G4 Black", "Gionee Gpad G4 White", "Gionee Long L700 Black", "Gionee Long L700 Silver", "Gionee M2 Black", "Gionee M2 White", "Gionee P2 Black", "Gionee P2S Black", "Gionee P2S White", "Gionee Pioneer P3 Black", "Gionee Pioneer P3 White", "Gionee Pioneer P4 Black", "Gionee Pioneer P4 White", "Gionee Slim S80 Black", "Gionee Slim S80 Grey", "Gionee V5 Black", "Google Nexus 4 Black", "Google Nexus 4 White, with Headphone", "Google Nexus 5 Black, with 16 GB", "Google Nexus 5 Black, with 32 GB", "Google Nexus 5 White, with 16 GB", "Google Nexus 5 White, with 32 GB", "HP Slate 6 Voice Tab", "HTC 709D Desire 700 White", "HTC A620E 8S Fiesta Red", "HTC Desire 210 Dual SIM D210h Black", "HTC Desire 210 Dual SIM D210h White", "HTC Desire 310 Dual SIM Arctic White", "HTC Desire 310 Dual SIM Matte Blue", "HTC Desire 310 Flipcovers Blue", "HTC Desire 500 Glacier Blue", "HTC Desire 500 Glossy Black", "HTC Desire 500 Passion Red", "HTC Desire 516 Dark Grey", "HTC Desire 516 Grey", "HTC Desire 516 Pearl White", "HTC Desire 516 White", "HTC Desire 600 Stealth Black", "HTC Desire 600 White", "HTC Desire 600C Black, with Dual SIM", "HTC Desire 600C White, with Dual SIM", "HTC Desire 601 Black, with Dual SIM", "HTC Desire 616 Dual Sim Dark Gray", "HTC Desire 616 Dual Sim White", "HTC Desire 700 Black", "HTC Desire 816 Dark Grey", "HTC Desire 816 White", "HTC Desire SV Stealth Black", "HTC Desire SV Yellow", "HTC Desire T329D XC Black Stone", "HTC Desire T329D XC Fabulous White", "HTC Desire T329W X Dual SIM White, with Dual SIM", "HTC E8 Dual SIM White", "HTC ONE E8 M8Sd Red", "HTC One 802d Black, with Dual SIM", "HTC One 802d Silver, with Dual SIM", "HTC One E8", "HTC One M8 Amber Gold", "HTC One M8 Glacial Silver", "HTC One M8 Gunmetal Grey", "HTC One Max Silver White", "HTC One Mini Black", "HTC One Mini Blue", "HTC One V T320 Jupitor Rock", "HTC T327W Desire U DS White", "Haier C380 Black", "Haier C380 White", "Hitech Air A1 White", "Hitech Amaze S-800 Black", "Hitech Amaze S410 White", "Hitech F2i Blue", "Hitech G11 Black", "Hitech G15 Black", "Hitech G5 Black", "Hitech H2i Red", "Hitech HT-850 Black", "Hitech HT820 Black", "Hitech HT830 Grey", "Hitech HT880 Black", "Hitech Kick 515 Black", "Hitech Micra - 110 Black", "Hitech Micra 115 Black", "Hitech Micra 120 Black", "Hitech Micra 150 Black", "Hitech Pride 302 Black \u0026 Silver", "Hitech Pride 313 Black", "Hitech Pride 325 Black", "Hitech Rocket G3i Black", "Hitech S210 Amaze Black", "Hitech S230 Amaze Black", "Hitech S3003G White", "Hitech Super X-9 Black", "Hitech Supreme F3 Black", "Hitech Tiny X-100 Black", "Hitech X-101 Black", "Hitech X10 Grey", "Hitech Xpaly 250 Black", "Hitech Xpaly G3i+ Black", "Hitech Xplay 245 Black", "Hitech Youth HT-810i Black", "Hitech kick 525 Black", "Hotpary Elegant H2 White", "Huawei Ascend G6 Black", "Huawei Ascend G610 Black", "Huawei Ascend G610 White", "Huawei Ascend G700 White", "Huawei Ascend P6 White", "Huawei Ascend Y200 Black", "Huawei Ascend Y210D Black", "Huawei Ascend Y220 Black", "Huawei Ascend Y600", "Huawei G730 Black", "Huawei G730 White", "Huawei Honor 3C White", "Huawei Honor 3X White", "Huawei Y320 Black", "Huawei Y511 Black", "Huawei Y600 Black \u0026 Blue", "ICE D3 Xphone Limited Edition Pearl White", "ICE Xphone Xphone Pearl White", "Icon G8 Dual SIM Qwerty Mobile Black", "Icon G9 Dual SIM Qwerty Mobile Black", "Intex AQUA Marvel + Aqua Marvel + Grey", "Intex AQUA Marvel + Aqua Marvel + White", "Intex Alpha Black", "Intex Alpha Mobile Black \u0026 Red", "Intex Aqua 3 G Black", "Intex Aqua 3G Black", "Intex Aqua 3G White", "Intex Aqua Curve Black", "Intex Aqua Curve Red", "Intex Aqua HD Aqua HD White", "Intex Aqua I 5 HD Black", "Intex Aqua I15 White", "Intex Aqua I5 HD Black", "Intex Aqua I5 HD White", "Intex Aqua N-2 Black", "Intex Aqua N15 Black", "Intex Aqua N15 Blue", "Intex Aqua N15 White", "Intex Aqua N17 Black", "Intex Aqua N2 White", "Intex Aqua N4 Black", "Intex Aqua N8 White", "Intex Aqua Octa Black", "Intex Aqua Octa White", "Intex Aqua Qwerty Blue", "Intex Aqua Qwerty White", "Intex Aqua Style Black", "Intex Aqua Style Black \u0026 Silver", "Intex Aqua Style Pro Black", "Intex Aqua Style Pro Grey", "Intex Aqua Style White \u0026 Silver", "Intex Aqua Swadesh White Black", "Intex Aqua T3 Black \u0026 Blue", "Intex Aqua T3 Grey", "Intex Aqua T3 White \u0026 Silver", "Intex Aqua T4 Black", "Intex Aqua T4 Blue", "Intex Aqua Trendy White", "Intex Aqua Y 2 Black", "Intex Aqua Y2 White", "Intex Aqua i 5 mini White", "Intex Aqua i14 Blue", "Intex Aqua i15 Black", "Intex Aqua i15 Blue", "Intex Aqua i3 Black", "Intex Aqua i3 Blue", "Intex Aqua i5 Black", "Intex Aqua i5 Mini Black", "Intex Aura NX Black", "Intex Bravo 2.6 Grey", "Intex Cloud X11 White", "Intex Cloud X12 Black", "Intex Cloud X2 Cloud X2 White", "Intex Cloud X3 Plus Black", "Intex Cloud X3 Plus White", "Intex Cloud X5 Black", "Intex Cloud X5 White", "Intex Cloud Y1 Black", "Intex Cloud Y1 White", "Intex Cloud Y12 White", "Intex Cloud Y13 White", "Intex Cloud Y17 White", "Intex Cloud Y4 Black", "Intex Cloud Y7 Black", "Intex Cloud Y7 White", "Intex Cloud Z5 Black", "Intex Focus V Silver", "Intex Focus-v Grey", "Intex Force Black \u0026 Grey", "Intex Force Black \u0026 Red", "Intex Force White \u0026 Grey", "Intex GC5050 Blue", "Intex GC5050 Red", "Intex GC5050 Silver", "Intex Gsm Hero Silver", "Intex Hero Black", "Intex IN 2010 NANO2", "Intex Jazz Grey", "Intex Jszz Black", "Intex Kobra Silver", "Intex Kobra White", "Intex Mega 10 Black", "Intex Nano 2 Black \u0026 Red", "Intex Nano 2 Blue", "Intex Nano 2S Black", "Intex Nano Star Black", "Intex Nano Star Black \u0026 Red", "Intex Neo-Vi Black \u0026 Red", "Intex Neo-vi Plus Red", "Intex Nova Black", "Intex Nova Silver", "Intex Nova White", "Intex Plasma Black", "Intex Plasma White", "Intex Platinum 201 Black", "Intex Platinum 201 Mobile Silver", "Intex Platinum 201 White", "Intex Platinum A6 Black \u0026 Silver", "Intex Platinum A6 White", "Intex Platinum Matrix Black", "Intex Platinum Matrix White", "Intex Pride Black", "Intex Rock Star Black \u0026 Grey", "Intex Shine 1800 Black", "Intex Shine 1800 Blue", "Intex Shine 1800 Red", "Intex Slimzz Black", "Intex Slimzz Silver", "Intex Star One Black", "Intex Turbo N Grey", "Intex Yuvi LX Black", "Intex Yuvi Pro Grey", "JIVI Dual Sim/Dual Standby Gsm + Cdma GC 1209 Black and White", "Jivi C3i Black", "Jivi CG1335 Black", "Jivi JV C300 CDMA Mobile Black", "Jivi JV21 Black", "Jivi JV21 White", "Jivi Jv X3i Black", "Jivi Slim X48 Black", "Jivi X390 Black", "Jivi X426 Black", "Jivi X480 Black", "Jivi X660 Black", "Josh A2700 Black", "Josh A2700 Blue", "Josh A2700 White", "Josh A999 White", "Josh Feather Black", "Josh JB 63+ Red", "Josh JB 63+ White", "Josh JB007 Silver", "Josh JB007-S Brown", "Josh JM 2800 Black", "Josh JM 2800 Golden", "Josh JM2400 Black", "Josh JM2400-R Red", "Josh Thunder Grey", "Karbonn A1 Plus Super White", "Karbonn A1+ Duple Black", "Karbonn A1+ Duple White", "Karbonn A101 Black", "Karbonn A11+ Black", "Karbonn A119 Black", "Karbonn A119 White", "Karbonn A15 Plus Black", "Karbonn A19 Black Silver", "Karbonn A19 White Silver", "Karbonn A21+ Black", "Karbonn A21+ White", "Karbonn A25 Plus White", "Karbonn A35 Black Silver", "Karbonn A35 White and Silver", "Karbonn A51 Black", "Karbonn A51 White", "Karbonn A6 Black White", "Karbonn A90 Black \u0026 Silver", "Karbonn A90 White Silver", "Karbonn A90S Black", "Karbonn A91 White", "Karbonn A93 Black", "Karbonn A93 White", "Karbonn A99 Black", "Karbonn A99 Star Black \u0026 White", "Karbonn A99 White", "Karbonn A99i Black", "Karbonn A99i White", "Karbonn Flair K102+ Gold White", "Karbonn Jumbo K9 Black \u0026 Red", "Karbonn K-Phone 1 Black Blue", "Karbonn K-Phone 1 Black Brown", "Karbonn K-Phone 1 White Silver", "Karbonn K101* Black \u0026 Red", "Karbonn K105s Black \u0026 Red", "Karbonn K112 Black", "Karbonn K39 Black \u0026 Grey", "Karbonn K39 Black \u0026 Red", "Karbonn K52 Groovster Black \u0026 Silver", "Karbonn K57 Black", "Karbonn K57 Silver", "Karbonn K62+ White", "Karbonn K63+ Black", "Karbonn K63+ Silver", "Karbonn K9 Plus Black", "Karbonn K9 Plus White Silver", "Karbonn KC540 White", "Karbonn KT 52 Black", "Karbonn KT 52 White", "Karbonn Karbonn The Legend Phone Beauty At Its Best Black Black", "Karbonn Kochadaiiyaan The Legend 2.4 Black \u0026 Red", "Karbonn Kochadaiiyaan The Legend A36 Black \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A36 White \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A6 Plus Black \u0026 White", "Karbonn Kochadaiiyaan The Legend S5i White", "Karbonn Opium N7 Black", "Karbonn Opium N9 Black", "Karbonn Opium N9 White", "Karbonn SPY K595 Black", "Karbonn SPY K595 Grey", "Karbonn Smart A1* Black", "Karbonn Smart A10 Black", "Karbonn Smart A10 White", "Karbonn Smart A11 Star Black", "Karbonn Smart A11 Star White", "Karbonn Smart A111 White", "Karbonn Smart A12 Star Black \u0026 Silver", "Karbonn Smart A12 Star White \u0026 Gold", "Karbonn Smart A26 Metallic Black", "Karbonn Smart A26 White Silver", "Karbonn Smart A29 Black", "Karbonn Smart A29 White", "Karbonn Smart A4+ Black", "Karbonn Smart A4+ White", "Karbonn Smart A5* Black", "Karbonn Smart A50s Black", "Karbonn Smart A50s White", "Karbonn Smart A51 Lite White", "Karbonn Smart A51+ Black", "Karbonn Smart A51+ White", "Karbonn Smart A52 Black Silver", "Karbonn Smart A52 Plus Black \u0026 Gold", "Karbonn Smart A52 Plus White \u0026 Silver", "Karbonn Smart A52 White Silver", "Karbonn Smart A5i Black", "Karbonn Smart A5i White", "Karbonn Smart A92 Black Silver", "Karbonn Smart A92 White Silver", "Karbonn Sound Wave K451+ Black", "Karbonn Sound Wave K451+ Champ Gold", "Karbonn Sound Wave K451+ Silver", "Karbonn The Star K61 Black", "Karbonn Titanium Hexa", "Karbonn Titanium K900 Black", "Karbonn Titanium Octane Black", "Karbonn Titanium Octane Red", "Karbonn Titanium Octane White", "Karbonn Titanium S1 Plus Black", "Karbonn Titanium S1 Plus Orange", "Karbonn Titanium S1 Plus White", "Karbonn Titanium S19 White", "Karbonn Titanium S2 Plus Black", "Karbonn Titanium S3 Black", "Karbonn Titanium S3 White", "Karbonn Titanium S4 Black", "Karbonn Titanium S4 White", "Karbonn Titanium S5 Plus Deep Blue", "Karbonn Titanium S5 Plus Pearl White", "Karbonn Titanium S5i Dark Blue", "Karbonn Titanium S7 Black", "Karbonn Titanium S9 Lite Black", "Karbonn Titanium S9 Lite White", "Karbonn Titanium S9 Pearl White", "Karbonn Titanium S99 Black", "Karbonn Titanium S99 White", "Karbonn Titanium X White", "Kingbell Basic M24 Black", "Kingbell Basic M3 Pink", "LG A390 Silver", "LG Cookie Smart T 375 Black", "LG Cookie Snap GM360i with 2 GB Memory Card", "LG D686 Gold", "LG E420 Black", "LG E612 Black", "LG G Pro 2 D838 Titan", "LG G Pro 2 D838 White", "LG G Pro E988 Black", "LG G Pro Lite D686 Black", "LG G Pro Lite D686 Black Gold", "LG G Pro Lite D686 White", "LG G-Flex Titan Silver", "LG G2 32 GB Black, with 32 GB", "LG G2 32 GB Gold", "LG G2 32 GB White, with 32 GB", "LG G2 Black", "LG G2 Black Gold, with 16gb", "LG G2 D802T Black", "LG G2 D802T Gold", "LG G2 D802T White", "LG G2 White", "LG G3 D855 Black Gold, with 32 GB", "LG G3 D855 Gold", "LG G3 D855 Titan Titan", "LG G3 D855 Titan Titan, with 32 GB", "LG G3 D855 White", "LG L4 II Dual E445 Black", "LG L4 II Dual E445 White", "LG L60 Dual White", "LG L60 X-147 Black", "LG L70 Black", "LG L70 Dual", "LG L70 White", "LG L80 Black", "LG L80 Dual Black", "LG L80 Dual White", "LG L80 White", "LG L90 Black", "LG L90 Dual", "LG L90 White", "LG Optimus 3D Max P725 Black", "LG Optimus 4X HD P880 White", "LG Optimus Black P970 Black Titan", "LG Optimus G E975 Blue", "LG Optimus GT540", "LG Optimus Hub E510 Black", "LG Optimus L3 Dual E405 Black", "LG Optimus L3 Dual E405 White", "LG Optimus L3 II E425 Black", "LG Optimus L3 II E425 White", "LG Optimus L3 II E435 Black", "LG Optimus L3 II E435 White", "LG Optimus L5 Dual E615 Black", "LG Optimus L5 Dual E615 White", "LG Optimus L5 II Dual E455 Black", "LG Optimus L5 II Dual E455 White", "LG Optimus L5 II E450 Black", "LG Optimus L5 II E450 White", "LG Optimus L7 II P715 Black", "LG Optimus L7 II P715 White", "LG Optimus L7 P705 Black", "LG Optimus L9 P765 Black", "LG Optimus Net Dual Sim P698 Titanium", "LG Optimus Pro C660 Black", "LG Optimus Sol E730 Black", "LG Optimus VU P895 Black", "LG Optimus VU P895 White", "LG P520 Black, with 2 GB Micro SD Card", "LG T500 Black", "LG T515 Wine Red", "LG T585 Black", "LG T585 White", "Lava ARC 11i Black", "Lava ARC Lite Black \u0026 Red", "Lava Arc 111 Black \u0026 Yellow", "Lava Arc 111 Grey \u0026 Green", "Lava Arc 12i Black", "Lava Arc 12i Grey", "Lava Arc 1star Black \u0026 Red", "Lava Arc 22 Black", "Lava Arc 22 Yellow", "Lava C11 Grey", "Lava CG141 Black", "Lava Discover 128 Star White", "Lava Discover 135 White", "Lava Discover 136S Champagne", "Lava Discover Neo Black", "Lava Discover Neo Grey", "Lava Iris 300 Style Dark Blue", "Lava Iris 310 Style Brown", "Lava Iris 349i Black", "Lava Iris 350M Grey", "Lava Iris 354 White", "Lava Iris 354e White", "Lava Iris 360 Music Black", "Lava Iris 3G 412 Grey", "Lava Iris 402 Grey", "Lava Iris 402 White", "Lava Iris 402+ Ivory White", "Lava Iris 402e Grey", "Lava Iris 404e Black", "Lava Iris 405+ Black", "Lava Iris 405+ White", "Lava Iris 406Q Black", "Lava Iris 406Q White", "Lava Iris 408e Frosted Silver", "Lava Iris 415 Black", "Lava Iris 450 Color Plus Black \u0026 Blue", "Lava Iris 450 Color Plus White \u0026 Blue", "Lava Iris 450 White \u0026 Blue", "Lava Iris 456 Black", "Lava Iris 458q Grey", "Lava Iris 504Q+ Gray", "Lava Iris 504Q+ White", "Lava Iris 550Q Black", "Lava Iris Pro 20 Metal Blue", "Lava Iris Pro 30 Grey", "Lava Iris X1 with 4 GB ROM Black", "Lava Iris X1 with 4 GB ROM White", "Lava Iris X1 with 8 GB ROM Black, with 8 GB ROM", "Lava Iris X1 with 8 GB ROM White, with 8 GB ROM", "Lava KKT 27i Blue", "Lava KKT 27i Grey", "Lava KKT 27i Silver", "Lava KKT 27s Grey", "Lava KKT 34i Black \u0026 Silver", "Lava KKT 34star Black \u0026 Red", "Lava KKT 40 Mini Blue", "Lava KKT 42 Black", "Lava KKT Uno Grey", "Lava Magnum X604 White", "Lava Spark 10 Black \u0026 Red", "Lava Spark 245e Black \u0026 Grey", "Lemon B149 Black", "Lemon B159 Multimedia Big Battery Black", "Lemon B169 Multimedia Big Battery Grey", "Lemon B229 Multimedia Big Battery Black", "Lemon B319I Multimedia Big Battery Black", "Lemon B579 Multimedia Big Battery with Box Speaker Black", "Lenovo A269i Black", "Lenovo A369i Black", "Lenovo A390 Black", "Lenovo A390 White", "Lenovo A516 Grey", "Lenovo A516 White", "Lenovo A526 Aurora Blue", "Lenovo A680 Black", "Lenovo A680 White", "Lenovo A800 Black", "Lenovo A850 Black", "Lenovo A850 White", "Lenovo A859 White", "Lenovo IdeaPhone S890 White", "Lenovo Ideaphone A706 Black", "Lenovo Ideaphone A706 White", "Lenovo Ideaphone S920 8 GB White, with 8 GB", "Lenovo K860 Black", "Lenovo K900 Steel Grey", "Lenovo P780 Deep Black", "Lenovo P780 Deep Black, with 8 GB", "Lenovo Reliance CDMA GSM 2 SIM Android SmartPhone A600E Black", "Lenovo S650 Silver", "Lenovo S660 Titanium", "Lenovo S720 White", "Lenovo S820 Red", "Lenovo S820 Red, with 8 GB", "Lenovo S850", "Lenovo S860 Titanium", "Lenovo S880 White", "Lenovo S920 Blue", "Lenovo S920 White", "Lenovo S930 Silver", "Lenovo Vibe X Silver", "Lenovo Vibe Z K910 Silver", "Lenovo Vibe Z K910 Titanium", "MTS Blaze 4", "MTS Blaze 4.5", "MTS Blaze 5.0 White", "MTS Dual CG 131", "MTS Dual CG 141", "MTS Rockstar M131", "MTS Rockstar M141 Red", "Magicon Senior Duo White", "Maxx AX3 Black", "Maxx AX8 Black", "Maxx GenxDroid7 - AX352 Black", "Maxx GenxDroid7 - AX407 Black", "Maxx MSD7 Smarty Black", "Maxx MX426 - Supremo Red", "Maxx Note I AX8 Black", "Maxx Race AX8 Black", "Maxx Race AX9Z White", "Maxx Zippy MT616 Coffee", "Micromax A069 Grey", "Micromax A069 White", "Micromax A069 Yellow", "Micromax A091 C Engage Grey", "Micromax A093 White \u0026 Gold", "Micromax Aisha A52 White", "Micromax Bling 3 A86 White", "Micromax Bolt A068 Blue", "Micromax Bolt A068 White", "Micromax Bolt A075 Blue", "Micromax Bolt A089 Black", "Micromax Bolt A089 White", "Micromax Bolt A24 Champange", "Micromax Bolt A36 Black", "Micromax Bolt A37 Black", "Micromax Bolt A37B Black", "Micromax Bolt A46 Black", "Micromax Bolt A47 Black", "Micromax Bolt A58 Black", "Micromax Bolt A58 Red", "Micromax Bolt A59 Grey", "Micromax Bolt A61 Grey", "Micromax Bolt A62 Black", "Micromax Bolt A62 White", "Micromax Bolt A66 Black", "Micromax Bolt A67 Black", "Micromax Bolt A67 White", "Micromax Bolt A69", "Micromax Bolt A71 Black", "Micromax Bolt A71 White", "Micromax Bolt GC232 Black \u0026 Silver", "Micromax Bolt X101 White", "Micromax Bolt X287 Grey", "Micromax C210 White", "Micromax CDMA C200 Black \u0026 White", "Micromax CG666 Black \u0026 Grey", "Micromax CG666 White", "Micromax Canvas 2 Colors A120 with 4 GB ROM Grey", "Micromax Canvas 2 Colors A120 with 4 GB ROM White", "Micromax Canvas 2 Colors A120 with 8 GB ROM Grey", "Micromax Canvas 2.2 A114 Black", "Micromax Canvas 2.2 A114 White", "Micromax Canvas 4 A210 Grey", "Micromax Canvas Blaze HD EG116 Black", "Micromax Canvas Blaze MT500", "Micromax Canvas Doodle 2 A240 Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM White", "Micromax Canvas Doodle 3 A102 with 512 MB RAM Blue", "Micromax Canvas Doodle 3 A102 with 512 MB RAM White", "Micromax Canvas Doodle A111 White", "Micromax Canvas Duet AE90 Black", "Micromax Canvas Ego A113 Grey", "Micromax Canvas Elanza 2 A121 Black", "Micromax Canvas Elanza A93 Black Silver", "Micromax Canvas Elanza A93 Blue \u0026 Grey", "Micromax Canvas Elanza A93 Coffee", "Micromax Canvas Entice A105 Grey", "Micromax Canvas Fire A093 Black \u0026 Gold", "Micromax Canvas Fire A104 Black Gold", "Micromax Canvas Fun A63 Blue", "Micromax Canvas Fun A63 Yellow", "Micromax Canvas Fun A76 Black", "Micromax Canvas Gold A300 Black Gold", "Micromax Canvas Gold A300 White Gold", "Micromax Canvas HD Plus A190 Black", "Micromax Canvas Juice A177 Black", "Micromax Canvas Juice A77 White", "Micromax Canvas Knight A350 Black", "Micromax Canvas Knight A350 Black \u0026 Gold", "Micromax Canvas Knight A350 White \u0026 Gold", "Micromax Canvas Knight Cameo A290 White \u0026 Gold", "Micromax Canvas L A108 Blue", "Micromax Canvas Magnus A117 Blue", "Micromax Canvas Music A88 Black", "Micromax Canvas Music A88 White", "Micromax Canvas Power A96 Black", "Micromax Canvas Turbo A250 White", "Micromax Canvas Turbo Mini A200 Black", "Micromax Canvas Turbo Mini A200 White", "Micromax Canvas Win W121", "Micromax Canvas XL A119 White", "Micromax Canvas XL2 A109 White", "Micromax EG111 Black", "Micromax Fire 2 A104 White", "Micromax GC222 Black", "Micromax GC222 White", "Micromax GC666 Black \u0026 Grey", "Micromax Knight Cameo A290 White", "Micromax MAd A94 Grey", "Micromax Ninja A91 Black", "Micromax Rockstar C192 Black", "Micromax Smarty 3.0 A30 Black", "Micromax Smarty 4.3 A65 White", "Micromax Unite 2 A106 with 4 GB ROM Green", "Micromax Unite 2 A106 with 4 GB ROM Grey", "Micromax Unite 2 A106 with 4 GB ROM Red", "Micromax Unite 2 A106 with 4 GB ROM White", "Micromax Unite 2 A106 with 8 GB ROM Grey, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM Red, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM White, with 8 GB ROM", "Micromax Unite A092 Black", "Micromax Unite A092 Grey", "Micromax Unite A092 Red", "Micromax Unite A092 White", "Micromax Unite A092 Yellow", "Micromax X084 Black \u0026 Red", "Micromax X084 White Silver", "Micromax X085 Black \u0026 Red", "Micromax X086 White", "Micromax X088 Black \u0026 Red", "Micromax X088 Black \u0026 Silver", "Micromax X089 Black", "Micromax X096 Black", "Micromax X096 White", "Micromax X097 Black", "Micromax X098 Grey", "Micromax X098 Red", "Micromax X101i White", "Micromax X101i Yellow", "Micromax X103i White", "Micromax X103i Yellow", "Micromax X247 Black", "Micromax X249 Black", "Micromax X251 Grey", "Micromax X253 Black", "Micromax X254 Grey", "Micromax X258 Black", "Micromax X267 Black", "Micromax X267 White", "Micromax X279i Grey", "Micromax X281 Grey", "Micromax X282 Grey", "Micromax X325 Grey", "Micromax X328 Grey", "Micromax X329 Black", "Micromax X337 Grey", "Micromax X351 Black Silver", "Micromax X367 Grey", "Micromax X44 Pearl White", "Micromax X455i White", "Micromax X55 Coffee", "Moto E Black", "Moto E White", "Moto X 16 GB Bamboo", "Moto X 16 GB Black", "Moto X 16 GB Red", "Moto X 16 GB Teak", "Moto X 16 GB Walnut", "Moto X 16 GB White", "Mtech A6 Infinity Black", "Mtech A6 Infinity White", "Mtech Fusion Black", "Mtech Fusion Blue", "Mtech G 14 Black", "Mtech G22 Black", "Mtech G22 White", "Mtech G4 Black", "Mtech Jazz Black", "Mtech Jazz White", "Mtech L6 Black", "Mtech L6 Blue", "Mtech L6 Brown", "Mtech Lotus Black", "Mtech Opal 3G Black \u0026 White", "Mtech Pride Blue", "Mtech Pride Red", "Mtech Rock Black", "Mtech Sharp Black", "Mtech Sharp Cyan", "Mtech Sharp Golden", "Mtech Spark Black", "Mtech Spark Black \u0026 White", "Mtech Spark Blue", "Mtech Touch Opal PRO Grey", "Mtech Touch Opal PRO White", "Mtech V22 Black", "Mtech V22 White", "Nokia 105 Black", "Nokia 105 Cyan", "Nokia 106 Black", "Nokia 106 Red", "Nokia 106 White", "Nokia 107 Black", "Nokia 107 Red", "Nokia 107 White", "Nokia 108 Black", "Nokia 108 Cyan", "Nokia 108 Red", "Nokia 108 White", "Nokia 108 Yellow", "Nokia 112 Red", "Nokia 112 White", "Nokia 114 Black", "Nokia 114 Cyan", "Nokia 206 Black, with Dual SIM", "Nokia 206 Cyan, with Dual SIM", "Nokia 206 White, with Dual SIM", "Nokia 208DS Black, with Dual SIM", "Nokia 208DS Red, with Dual SIM", "Nokia 220 Black", "Nokia 220 Red", "Nokia 220 White", "Nokia 220 Yellow", "Nokia 225 Black", "Nokia 225 Bright Red", "Nokia 225 Bright Yellow", "Nokia 225 White", "Nokia 301 Black", "Nokia 301 White", "Nokia 515 Black", "Nokia 515 White", "Nokia Asha 210 Black", "Nokia Asha 210 Cyan", "Nokia Asha 210 Yellow", "Nokia Asha 230 Black", "Nokia Asha 230 Bright Red", "Nokia Asha 230 White", "Nokia Asha 305 Dark Grey", "Nokia Asha 305 Mid Blue", "Nokia Asha 305 Silver White", "Nokia Asha 308 Golden Light", "Nokia Asha 310 White", "Nokia Asha 311 Dark Grey", "Nokia Asha 311 Sand White", "Nokia Asha 500 Black", "Nokia Asha 500 Bright Red", "Nokia Asha 500 White", "Nokia Asha 500 Yellow", "Nokia Asha 501 Black", "Nokia Asha 501 Bright Red", "Nokia Asha 501 White", "Nokia Asha 501 Yellow", "Nokia Asha 502 Black", "Nokia Asha 502 Bright Red", "Nokia Asha 502 White", "Nokia Asha 502 Yellow", "Nokia Asha 503 Black", "Nokia Asha 503 Bright Red", "Nokia Asha 503 White", "Nokia Asha 503 Yellow", "Nokia Lumia 1320 Black", "Nokia Lumia 1320 Orange", "Nokia Lumia 1320 White", "Nokia Lumia 1320 Yellow", "Nokia Lumia 1520 Black", "Nokia Lumia 1520 Red", "Nokia Lumia 1520 White", "Nokia Lumia 1520 Yellow", "Nokia Lumia 520 Black", "Nokia Lumia 520 Cyan", "Nokia Lumia 520 Red", "Nokia Lumia 520 White", "Nokia Lumia 520 Yellow", "Nokia Lumia 525 Black", "Nokia Lumia 525 Orange", "Nokia Lumia 525 White", "Nokia Lumia 525 Yellow", "Nokia Lumia 530 Dual SIM Bright Orange", "Nokia Lumia 530 Dual SIM Dark Grey", "Nokia Lumia 530 Dual SIM White", "Nokia Lumia 610 Cyan", "Nokia Lumia 610 White", "Nokia Lumia 620 Black", "Nokia Lumia 620 White", "Nokia Lumia 620 Yellow", "Nokia Lumia 625 Black", "Nokia Lumia 625 Green", "Nokia Lumia 625 Orange", "Nokia Lumia 625 White", "Nokia Lumia 625 Yellow", "Nokia Lumia 630 Dual SIM Black", "Nokia Lumia 630 Dual SIM Bright Green", "Nokia Lumia 630 Dual SIM Bright Orange", "Nokia Lumia 630 Dual SIM Bright Yellow", "Nokia Lumia 630 Dual SIM White", "Nokia Lumia 630 Single SIM Black", "Nokia Lumia 630 Single SIM Bright Green", "Nokia Lumia 630 Single SIM Bright Orange", "Nokia Lumia 630 Single SIM Bright Yellow", "Nokia Lumia 630 Single SIM White", "Nokia Lumia 920 White", "Nokia Lumia 925 Black", "Nokia Lumia 925 Grey", "Nokia Lumia 925 White", "Nokia X Black", "Nokia X Bright Green", "Nokia X Bright Red", "Nokia X Cyan", "Nokia X White", "Nokia X Yellow", "Nokia X+ Black", "Nokia X+ Bright Green", "Nokia X+ Yellow", "Nokia XL Black", "Nokia XL Bright Green", "Nokia XL Bright Orange", "Nokia XL Bright Yellow", "Nokia XL Cyan", "Nokia XL White", "Nuclear SX 5.3i Smartphone Black", "OPPO Find 5 Mini R827 Black", "OPPO Find 5 Mini R827 White", "OPPO Find 7 X9076 Black", "OPPO Find 7 X9076 White", "OPPO Find 7a X9006 Black", "OPPO Find 7a X9006 White", "OPPO Joy R1001 Black", "OPPO Joy R1001 White", "OPPO N1 Mini Lemon", "OPPO N1 Mini Mint", "OPPO N1 Mini White", "OPPO N1 White", "OPPO Neo 3 R831K Grey", "OPPO Neo 3 R831K White", "OPPO R1 829 Black", "OPPO R1 829 White", "OPPO Yoyo R2001 Black", "OPPO Yoyo R2001 White", "Olive V-C2130 Black", "Onida G Series G180 Black", "Onida G Series G181 Black \u0026 Red", "Onida G007S Black", "Onida G182 Black", "Onida G183 Black \u0026 Red", "Onida G183 Multicolor", "Onida G242 Black \u0026 Red", "Onida G640A Grey \u0026 Silver", "Onida i011 Black", "Onida i011 White", "Onida i099 Black", "Onida i666 W4413 White", "Onida i666 White", "Onida i777 W4213 White", "Panasonic Eluga A White", "Panasonic Eluga U Black", "Panasonic Eluga U White", "Panasonic GD 28 Black", "Panasonic GD21 Grey", "Panasonic GD31 Black", "Panasonic GD31 White", "Panasonic P11 with Changeable Back Covers", "Panasonic P31 Midnight Blue", "Panasonic P31 Pure White", "Panasonic P41 Black", "Panasonic P51 Black", "Panasonic P51 White", "Panasonic P61 Black", "Panasonic P61 White", "Panasonic P81 Black", "Panasonic T11 White", "Panasonic T21", "Panasonic T31 Black", "Panasonic T31 White", "Panasonic T41 Black", "Panasonic T41 White", "Rage Ace_Black Red", "Rage Ace_Blue Black", "Rage Ace_Green Black", "Rage Ace_White White", "Rage Duke_Green Green", "Rage Glory_Black Silver", "Rage Hero Black \u0026 Grey", "Rage Hero Black \u0026 Red", "Rage Hero White \u0026 Blue", "Rage Magic-50 Black", "Rage Magic-50 White", "Rage Minni_White White", "Rage OPS 35g Blue", "Rage OPS 60dn White", "Rage OPS 80 White", "Rage OPS 80d Black", "Rage OPS 80d White", "Rage OPS 80q Black", "Rage Ps16 Black \u0026 Silver", "Rage Ps16 White \u0026 Silver", "Rage Ps20 White \u0026 Red", "Rage Silk_Blue Black", "Rage Silk_Golden Black", "Rage Storm_Blue Blue", "Rage Storm_White White", "Rage Ultra Black", "Rage Vega White", "Salora SM204 Red", "Salora SM508 Blue \u0026 Black", "Salora SM601 Black \u0026 Gold", "Samsung E2252 Metallic Silver", "Samsung E2252 Pure White", "Samsung G350 White", "Samsung GT 1200 R/I/M", "Samsung Galaxy Ace NXT-G313H White", "Samsung Galaxy Core 2 SM-G355H Black", "Samsung Galaxy Core 2 SM-G355H White", "Samsung Galaxy Core I8262 Chic White", "Samsung Galaxy Golden I9230 Champagne Gold", "Samsung Galaxy Grand 2 Black", "Samsung Galaxy Grand 2 White", "Samsung Galaxy Grand Duos I9082 Elegant White, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Duos I9082 Metallic Blue, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Neo GT-I9060 Midnight Black", "Samsung Galaxy Grand Neo GT-I9060 White", "Samsung Galaxy Mega 5.8 I9152 White", "Samsung Galaxy Note 2 N7100 Marble White", "Samsung Galaxy Note 2 N7100 Titanium Grey", "Samsung Galaxy Note 3 N9000 Blush Pink", "Samsung Galaxy Note 3 N9000 Classic White", "Samsung Galaxy Note 3 N9000 Jet Black", "Samsung Galaxy Note 3 Neo Black", "Samsung Galaxy Note 3 Neo White", "Samsung Galaxy S Duos 2 S7582 Black", "Samsung Galaxy S Duos 2 S7582 Pure White", "Samsung Galaxy S3 Marble White, with 16GB", "Samsung Galaxy S3 Neo GT-I9300I Blue", "Samsung Galaxy S3 Neo GT-I9300I Marble White", "Samsung Galaxy S4 I9500 Black Mist", "Samsung Galaxy S4 I9500 Deep Black", "Samsung Galaxy S4 I9500 White Frost", "Samsung Galaxy S4 Mini I9192 Black Mist", "Samsung Galaxy S4 Mini I9192 White Frost", "Samsung Galaxy S4 Zoom SM-C1010 White", "Samsung Galaxy S5 Charcoal Black", "Samsung Galaxy S5 Copper Gold", "Samsung Galaxy S5 Electric Blue", "Samsung Galaxy S5 Shimmery White", "Samsung Galaxy Star Pro S7262 Midnight Black", "Samsung Galaxy Star Pro S7262 White", "Samsung Galaxy Star S5282 Ceramic White", "Samsung Galaxy Star S5282 Noble Black", "Samsung Galaxy Star S5282 Silver", "Samsung Galaxy Trend S7392 Ceramic White, with 4 GB", "Samsung Galaxy Trend S7392 Midnight Black", "Samsung Galaxy Y S5360 Pure White", "Samsung Guru 1200 Black", "Samsung Guru 1200 Indigo Blue", "Samsung Guru 1200 White", "Samsung Guru E1207T Black", "Samsung I8552 - Galaxy Grand Quattro Ceramic White", "Samsung I8552 - Galaxy Grand Quattro Titan Gray", "Samsung Keystone 2 E1207Y Black", "Samsung Metro DUOS C3322 Deep Black", "Samsung Omnia M S7530 Deep Gray", "Samsung S6812 - Galaxy Fame Metallic Blue", "Samsung S7262 Wine Red", "Sansui SA40 Black", "Sansui SA50 Plus Grey", "Simmtronics Xpad M1 Black", "Simmtronics Xpad Q1 Black", "Simmtronics Xpad Q4", "Simmtronics Xpad Q4 Black", "Simmtronics Xpad Q5 Black", "Sony Xperia C Black", "Sony Xperia C Purple", "Sony Xperia C White", "Sony Xperia C3 Black", "Sony Xperia C3 White", "Sony Xperia E Black", "Sony Xperia E Dual Champagne", "Sony Xperia E White", "Sony Xperia E1 Black", "Sony Xperia E1 Dual Black", "Sony Xperia E1 Dual Purple", "Sony Xperia E1 Dual White", "Sony Xperia E1 Purple", "Sony Xperia E1 White", "Sony Xperia Go Warm Yellow", "Sony Xperia L Rose Red", "Sony Xperia L Starry Black", "Sony Xperia M Black", "Sony Xperia M Dual Black", "Sony Xperia M Dual Purple", "Sony Xperia M Dual White", "Sony Xperia M Purple", "Sony Xperia M White", "Sony Xperia M2 Dual Black", "Sony Xperia M2 Dual Purple", "Sony Xperia M2 Dual White", "Sony Xperia Miro Black", "Sony Xperia Miro White with Silver Strip", "Sony Xperia Neo L Glossy Black", "Sony Xperia P Black", "Sony Xperia P Red", "Sony Xperia P Silver", "Sony Xperia SP Black", "Sony Xperia SP Red", "Sony Xperia SP White", "Sony Xperia T2 Ultra Black", "Sony Xperia T2 Ultra Purple", "Sony Xperia T2 Ultra White", "Sony Xperia T3 Black", "Sony Xperia T3 Purple", "Sony Xperia T3 White", "Sony Xperia Tipo Classic White", "Sony Xperia Tipo Dual Classic Silver", "Sony Xperia Z Black", "Sony Xperia Z Purple", "Sony Xperia Z Ultra Black", "Sony Xperia Z Ultra Purple", "Sony Xperia Z Ultra White", "Sony Xperia Z White", "Sony Xperia Z1 Black", "Sony Xperia Z1 Compact Black", "Sony Xperia Z1 Compact Lime", "Sony Xperia Z1 Compact Pink", "Sony Xperia Z1 Compact White", "Sony Xperia Z1 Purple", "Sony Xperia Z1 White", "Sony Xperia Z2 Black", "Sony Xperia Z2 Purple", "Sony Xperia Z2 White", "Sony Xperia ZR White", "Spice Boss Champion 2 M-5008 Black", "Spice Boss Chocolate M-5373 Black", "Spice Boss Delite M-5162 White", "Spice Boss Link M-5621 Black", "Spice Boss M-5470 Grey", "Spice Boss Slender 2 M-5404 White", "Spice Boss Slender M-5371", "Spice Boss Trendy 4 M-5004 Black", "Spice Boss Trendy 5 M-5032 White", "Spice Boss Trio M-5025 Black", "Spice Buddy N-300 Midnight Black", "Spice Coolpad 2 Mi-496 White", "Spice Flo Rainbow M-6111", "Spice Flo Sleek M-5915", "Spice M-5415 Black", "Spice Smart Flo Edge Mi-349 White", "Spice Smart Flo Mettle 3.5X Mi-356 White", "Spice Smart Flo Mettle 4X Mi-426 White", "Spice Smart Flo Mettle 5X Mi-504 Black", "Spice Smart Flo Mettle 5X Mi-504 White", "Spice Smart Flo Pace 3 Mi-502n White", "Spice Smart Flo Pace Mi-422 White", "Spice Smart Flo Poise Mi-451", "Spice Stellar 360", "Spice Stellar 361 Black", "Spice Stellar 361 White", "Spice Stellar 445 Black", "Spice Stellar 497 White", "Spice Stellar 506 Titanium Grey", "Spice Stellar 509", "Spice Stellar 520 Red", "Spice Stellar 520 Yellow", "Spice Stellar Glamor Mi-436", "Spice Stellar Glide Mi-438 Silver", "Spice Stellar Horizon Pro Mi-505 White", "Spice Stellar Mettle Icon Mi-506 Silver", "Spice Stellar Nhance 2 Mi-437", "Spice Stellar Pinnacle Pro Mi-535 Brown", "Spice Stellar Virtuoso Pro Mi-491 Black", "Spice Steller Virtuoso Pro+ Mi-492 White", "Swingtel Mini SX3 White", "Swingtel SW27 Black", "Swingtel SW27 White", "Swingtel SW30 Black", "Swingtel SW30 Silver", "Swingtel SW30 White", "Swingtel SW50+ Black", "Swingtel SW50+ Red", "Swingtel Superb White", "Swingtel Tigertab White, Red, Grey", "Swipe Fablet F2 White", "Swipe Konnect 5.0 Black", "Swipe Konnect 5.0 White", "Swipe Sense Black", "Swipe Sonic Black", "TVC Android 2.2 Smartphone Black", "Trio T2020L Black \u0026 Blue", "Trio T2020L Black \u0026 Grey", "Trio T2020L White \u0026 Blue", "Trio T2020XL Black \u0026 Blue", "Trio T2020XL Black \u0026 Gold", "Trio T2020XL Black White", "Trio T2424 Black \u0026 Green", "Trio T2424 Black \u0026 Red", "Trio T2424 White \u0026 Blue", "Trio T2424XL Black \u0026 Blue", "Trio T2424n Black \u0026 Blue", "Trio T2424n Black White", "Trio T2626 Black", "Trio T2626 White \u0026 Blue", "Trio T2626 White \u0026 Yellow", "Trio T2828 Black \u0026 Grey", "Trio T2828 Black White", "V3 Bizz GQ225 Grey", "Videocon A 54 White", "Videocon A 55q HD Black", "Videocon A15 Black", "Videocon A15 White Chrome", "Videocon A16 Black", "Videocon A16 White", "Videocon A42 Black", "Videocon A48 White", "Videocon A52 White", "Videocon A53 White Chrome", "Videocon A55 HD Black \u0026 Silver", "Videocon A55HD White", "Videocon Dost V1539 N Black Silver", "Videocon Dost V1615 Black", "Videocon Dost V1615 Silver", "Videocon V1508 Black", "Videocon V1544 Black \u0026 Silver", "Videocon vphone Gold", "Videocon vphone White", "Vox Kick 5 Black", "Vox Kick 5 White", "Vox V-3100 Black", "Vox V-3100 White", "Wham W20i Black", "Wham W24i Black", "Wham W26i Black", "Wynncom W101 Black", "Wynncom WYNNW412 Black", "XElectron AN1 Black", "XElectron BluEye Black", "XElectron M007 Black", "XElectron M998 Black", "XElectron N100 Black", "XElectron X1 White", "XElectron X1Black Black", "XOLO 8X-1000 Black", "XOLO A500 Club Black", "XOLO A500 Club White", "XOLO A500S Black", "XOLO A500S IPS Black", "XOLO A500S IPS Green", "XOLO A500S IPS Red", "XOLO A500S White", "XOLO A500s Lite Black", "XOLO A500s Lite White", "XOLO A550S IPS Black", "XOLO A600 Black", "XOLO A600 Blue", "XOLO A600 White", "XOLO A600 Yellow", "XOLO A700S Black", "XOLO LT900 Black", "XOLO Opus 2 Q1000 Black", "XOLO Play 6X-1000 Black", "XOLO Play 6X-1000 White", "XOLO Play Black", "XOLO Q1000 Black", "XOLO Q1000 Opus Black", "XOLO Q1000 Opus White", "XOLO Q1000 White", "XOLO Q1000S Black", "XOLO Q1000S Plus Black", "XOLO Q1010 White", "XOLO Q1010i Black", "XOLO Q1010i Coffee Brown", "XOLO Q1010i White", "XOLO Q1011 Black", "XOLO Q1011 White", "XOLO Q1100 Black", "XOLO Q1200 Black", "XOLO Q1200 White", "XOLO Q2000 White", "XOLO Q2000L White", "XOLO Q2500 Black", "XOLO Q3000 Black", "XOLO Q3000 White", "XOLO Q500S IPS Black", "XOLO Q500S IPS Green", "XOLO Q500S IPS Red", "XOLO Q600 White", "XOLO Q600S Black", "XOLO Q600S White", "XOLO Q700S Gold", "XOLO Q700S Plus Gold", "XOLO Q700S Silver", "XOLO Q700i Black", "XOLO Q900 White", "XOLO Q900S Black", "XOLO Q900T", "XOLO Win Q900s Black", "XOLO X1000 Black", "Y King Y 10 Black", "Y King Y 10 White", "Y King Y 20 Black", "Y King Y 30 Black", "Y King Y 30 White", "ZTE Blade C V807 Black", "ZTE Blade L V887", "ZTE Grand X Quad Lite Blue", "ZTE Grand X Quad Lite White", "ZTE Reliance d286 Black", "ZTE Reliance d286 White", "ZTE S183Reliance CDMA Only Black", "Zen 303 Power Black", "Zen 306 Ultrafone 306 Play Black \u0026 Red", "Zen 701 Amaze 701 Full Hd Black", "Zen P36 Black", "Zen U 504 B Black", "Zen U 504 W White", "Zen Ultrafone 502qHD Black", "Zook Boss Black", "Zook Brave Brown", "Zook Brilliant Grey", "Zook IMAX Blue", "Zook Iconic Black", "Zook Iconic Gold", "Zook Ideal Black", "Zook Ideal Gold", "Zook Keypad Sliver", "Zook Keypad White", "Zync Cloud Z401", "Zync X108 White", "Zync X207 Black", "iBall 4PIPS Gem Black", "iBall Andi 3.5 Classique With 1.3 Ghz Processor White", "iBall Andi 4.5 2G Grey", "iBall Andi 4.5 2G Ripple White", "iBall Andi 4.5 3G Ripple White", "iBall Andi 4.5 3G Wine \u0026 Gunmetal", "iBall Andi 4.5D Royale", "iBall Andi 4.7G Cobalt", "iBall Andi 5-M8 Black", "iBall Andi 5.5N2 Quadro", "iBall Andi 5K Sparkle White White", "iBall Andi 5K Sparkle Wine Special Wine", "iBall Andi 5T Cobalt 2", "iBall Andi Uddaan", "iBall Andi3.5kke Genius Black", "iBall Andi3.5kke Genius White", "iBall Andi3.5kke Winner Black", "iBall Andi3.5kke Winner White", "iBall Andi4 B2 Black", "iBall Andi4 Gem Black", "iBall Andi4 Gem White", "iBall Andi4 Velvet Black", "iBall Andi4 Velvet White", "iBall Andi4.5P Glitter White", "iBall Andi4.5P Glitter Yellow", "iBall Andi4.5Q White", "iBall Andi4.5d Royale White", "iBall Andi5-E7 Grey", "iBall IPS Tiger Andi4 Royal Blue", "iBall Iball Vogue 2.8A Slim Bar Design White White", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Black", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Yellow", "iBall King1.8D White", "iBall Senior Aasaan2 White", "iBall Shaan Fab2.4V8 Black \u0026 Blue", "iBall Shaan Fab2.4V8 Black \u0026 Yellow", "iBall Vogue 1.8-KK18 Black", "iBall Vogue 1.8-KK7 Yellow", "iBall Vogue 2.4 kk1 Grey", "iBall Vogue2.4e Black", "iBall iBall Andi 3.5kke Glory Special Wine", "iBall iBall Vogue 2.8A Slim Bar Design Grey Grey"]


        $scope.pricedivisionstv = [
            {
                price: "Rs. 2000 and below"
            },
            {
                price: "Rs 2001 - 5000"
            },
            {
                price: "Rs 5001 - 10000"
            },
            {
                price: "Rs 10001 - 18000"
            },
            {
                price: "Rs 18001 - 25000"
            },
            {
                price: "Rs 25001 - 35000"
            },
            {
                price: "Rs 35001 and above"
            }
        ];


        // tv divisions for changes
        $scope.$watch('tvesdivisions|filter:{selected:true}', function (nv) {
            $scope.tvtradeshow.tvDivisions = nv.map(function (division) {
                //alert(division.brand);
                console.log({name: division.brand});
                return {name: division.brand};
            });

            var display = 0;
            if (angular.toJson($scope.tvtradeshow.tvDivisions).length > 0 && angular.toJson($scope.colortradeshowtv.colorDivisionstv).length > 0
                && angular.toJson($scope.pricetradeshowtv.priceDivisionstv).length > 0) {
                //show brand, color and price
                display = 1;
            } else if (angular.toJson($scope.tvtradeshow.tvDivisions).length > 0 && angular.toJson($scope.colortradeshowtv.colorDivisionstv).length > 0
                && angular.toJson($scope.pricetradeshowtv.priceDivisionstv).length < 0) {
                //show only brand and color
                display = 2;
            } else if (angular.toJson($scope.tvtradeshow.tvDivisions).length > 0 && angular.toJson($scope.colortradeshowtv.colorDivisionstv).length < 0
                && angular.toJson($scope.pricetradeshowtv.priceDivisionstv).length < 0) {
                //show only brand
                display = 3;
            } else if (angular.toJson($scope.tvtradeshow.tvDivisions).length < 0 && angular.toJson($scope.colortradeshowtv.colorDivisionstv).length > 0
                && angular.toJson($scope.pricetradeshowtv.priceDivisionstv).length > 0) {
                //show only color and price
                display = 4;
            } else if (angular.toJson($scope.tvtradeshow.tvDivisions).length < 0 && angular.toJson($scope.colortradeshowtv.colorDivisionstv).length > 0
                && angular.toJson($scope.pricetradeshowtv.priceDivisionstv).length < 0) {
                //show only color
                display = 5;
            } else if (angular.toJson($scope.tvtradeshow.tvDivisions).length < 0 && angular.toJson($scope.colortradeshowtv.colorDivisionstv).length < 0
                && angular.toJson($scope.pricetradeshowtv.priceDivisionstv).length < 0) {
                //show none
                display = 6;
            } else if (angular.toJson($scope.tvtradeshow.tvDivisions).length < 0 && angular.toJson($scope.colortradeshowtv.colorDivisionstv).length < 0
                && angular.toJson($scope.pricetradeshowtv.priceDivisionstv).length > 0) {
                //show price
                display = 7;
            }

            switch (display) {
                case 1:
                    $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                        color: angular.toJson($scope.colortradeshowtv.colorDivisionstv), price: angular.toJson($scope.pricetradeshowtv.priceDivisionstv)});
                    break;
                case 2:
                    $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                        color: angular.toJson($scope.colortradeshowtv.colorDivisionstv), price: angular.toJson($scope.priceDivisionstv)});
                    break;
                case 3:
                    $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                        color: angular.toJson($scope.colorDivisionstv), price: angular.toJson($scope.priceDivisionstv)});
                    break;
                case 4:
                    $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                        color: angular.toJson($scope.colortradeshowtv.colorDivisions), price: angular.toJson($scope.pricetradeshowtv.priceDivisionstv)});
                    break;
                case 5:
                    $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                        color: angular.toJson($scope.colortradeshowtv.colorDivisionstv), price: angular.toJson($scope.priceDivisionstv)});
                    break;
                case 6:
                    //  $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                    //    color: angular.toJson($scope.colortradeshowtv.colorDivisionstv), price: angular.toJson($scope.pricetradeshowtv.priceDivisionstv)});
                    break;
                case 7:
                    $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                        color: angular.toJson($scope.colorDivisionstv), price: angular.toJson($scope.pricetradeshowtv.priceDivisionstv)});
                    break;
                default:
                    break;
            }


            console.log("tradeshowtv" + angular.toJson($scope.tvtradeshow.tvDivisions));
            //$location.path('/view2');
        }, true);


        $scope.colortradeshowtv = { };
        $scope.colortradeshowtv.colorDivisionstv = [];


        // helper method
        $scope.selectedColorDivisionstv = function selectedColorDivisionstv() {
            return filterFilter($scope.colortradeshowtv.colorDivisionstv, { selected: true });
        };

        // tv divisions for changes
        $scope.$watch('colordivisionstv|filter:{selected:true}', function (nv1) {
            $scope.colortradeshowtv.colorDivisionstv = nv1.map(function (colordivisiontv) {
                //alert(division.brand);
                console.log({color: colordivisiontv.color});
                return {color: colordivisiontv.color};
            });
            $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                color: angular.toJson($scope.colortradeshowtv.colorDivisionstv), price: angular.toJson($scope.pricetradeshowtv.priceDivisionstv)});
            console.log("colortradeshowtv" + angular.toJson($scope.colortradeshowtv.colorDivisionstv));
            //  $location.path('/view2');
        }, true);


        $scope.pricetradeshowtv = { };
        $scope.pricetradeshowtv.priceDivisionstv = [];


        // helper method
        $scope.selectedPriceDivisionstv = function selectedPriceDivisionstv() {
            return filterFilter($scope.pricetradeshowtv.priceDivisionstv, { selected: true });
        };


        // tv divisions for changes
        $scope.$watch('pricedivisionstv|filter:{selected:true}', function (nv2) {
            $scope.pricetradeshowtv.priceDivisionstv = nv2.map(function (pricedivisiontv) {
                //alert(division.brand);
                console.log({price: pricedivisiontv.price});
                return {price: pricedivisiontv.price};
            });
            $rootScope.tvlist = TVFactory.brandName.query({brands: angular.toJson($scope.tvtradeshow.tvDivisions),
                color: angular.toJson($scope.colortradeshowtv.colorDivisionstv), price: angular.toJson($scope.pricetradeshowtv.priceDivisionstv)});
            console.log("pricetradeshowtv" + angular.toJson($scope.pricetradeshowtv.priceDivisionstv));
            // $location.path('/view2');
        }, true);


        $scope.gettvInfo = function (product) {
            console.log("getProductInfo - " + product.productName);
            //$rootScope.productInfo = UserFactory.productdetails.query({key: product.productName});

            $rootScope.pricecompare = {productName: ""};
            $rootScope.pricecompare = TVFactory.productdetails.query({key: product.productName});
            console.log("price compare - " + $rootScope.pricecompare.length);

            $rootScope.productInfo = product;
            $rootScope.image = product.productImage;
            console.log("productInfo length - " + product.productImage);
            console.log("productInfo length - " + $rootScope.image);
            console.log("productInfo length - " + $scope.productInfo.productName);

            $scope.$watch($rootScope.productInfo, function (newVal) {
                //alert("Changed an input");
            }, true);

            $scope.$watch($rootScope.pricecompare, function (newVal) {
                //alert("Changed an input");
            }, true);

            //  $location.path('/view2');
        }


    }]);


app.controller('cameraesCtrl', ['$scope', '$rootScope', '$location', 'UserFactory', 'CameraFactory', '$q',
    function ($scope, $rootScope, $location, UserFactory, CameraFactory, $q) {


        $scope.items = [
            { id: 1, name: 'Books'},
            { id: 2, name: 'Mobile'}
        ];

        var productType = 'Camera';

        $scope.mencameraes = function (productType) {
            console.log("mencameraes");
            $rootScope.cameralist = CameraFactory.home.query({productType: 'Camera'});


            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.cameralist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.cameralist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/cameraes');
        }

        console.log("productType - " + productType);

        $scope.womencameraes = function () {
            console.log("womencameraes");
            console.log("mencameraes");
            $rootScope.cameralist = CameraFactory.home.query({productcategory: 'Women cameraes'});

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.cameralist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.cameralist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/cameraes');
        }


        $scope.cameraesdivisions = CameraFactory.productbrands.query({productType: productType});

        $scope.cameratradeshow = { };
        $scope.cameratradeshow.cameraDivisions = [];

        // selected divisions
        //$scope.selection = [];

        // helper method
        $scope.selectedDivisionscamera = function selectedDivisionscamera() {
            return filterFilter($scope.cameratradeshow.cameraDivisions, { selected: true });
        };


        $scope.colordivisionscamera = [
            {
                color: "White"
            },
            {
                color: "Yellow"
            },
            {
                color: "Pink"
            },
            {
                color: "Black"
            },
            {
                color: "Grey"
            }
        ];


        $scope.typeahead = ["ADCOM A-430I PS Black", "ADCOM Smartphone A-350i Black", "ADCOM Smartphone A-350i White", "ADCOM Smartphone A-500 Black", "ADCOM Smartphone A-500 White", "ADCOM Thunder A-350 Black", "ADCOM Thunder A-350 White", "ADCOM Thunder A-400 Black", "ADCOM Thunder A-400 White", "ADCOM Thunder A-400i Black", "ADCOM Thunder A-400i White", "ADCOM Thunder A-430 White", "ADCOM X8 Black", "ADCOM X8 White", "ADCOM X9 Black", "ADCOM X9 Red", "Adcom X10 Black", "Adcom X10 White", "Adcom X11 Black", "Adcom X12 Black", "Adcom X14 Black", "Adcom X14 Grey", "Adcom X28 Silver", "Alcatel 890D Silver", "Alcatel One Touch J636d+ Black", "Alcatel Onetouch Idol Mini 6012D", "Alcatel Onetouch Idol X+ Bluish Black, with 16 GB", "Alcatel Onetouch Idol X+ White, with 16 GB", "Apple iPhone 4 Black, with 16 GB", "Apple iPhone 4 Black, with 8 GB", "Apple iPhone 4 White, with 16 GB", "Apple iPhone 4 White, with 8 GB", "Apple iPhone 4S Black, with 8 GB", "Apple iPhone 4S White, with 8 GB", "Apple iPhone 5C 8 GB Blue, with 8 GB", "Apple iPhone 5C 8 GB Green, with 8 GB", "Apple iPhone 5C 8 GB Pink, with 8 GB", "Apple iPhone 5C 8 GB White, with 8 GB", "Apple iPhone 5C 8 GB Yellow, with 8 GB", "Apple iPhone 5C Blue, with 16 GB", "Apple iPhone 5C Blue, with 32 GB", "Apple iPhone 5C Green, with 16 GB", "Apple iPhone 5C Green, with 32GB", "Apple iPhone 5C Pink, with 16 GB", "Apple iPhone 5C Pink, with 32GB", "Apple iPhone 5C White, with 16 GB", "Apple iPhone 5C White, with 32GB", "Apple iPhone 5C Yellow, with 16 GB", "Apple iPhone 5C Yellow, with 32GB", "Apple iPhone 5S Gold, with 16 GB", "Apple iPhone 5S Gold, with 32 GB", "Apple iPhone 5S Gold, with 64 GB", "Apple iPhone 5S Silver, with 16 GB", "Apple iPhone 5S Silver, with 32 GB", "Apple iPhone 5S Silver, with 64 GB", "Apple iPhone 5S Space Grey, with 16 GB", "Apple iPhone 5S Space Grey, with 32 GB", "Apple iPhone 5S Space Grey, with 64 GB", "Arise Bingo AX111 Black", "Arise Imperia AX282 Black", "Arise Magnet AX251 Black", "Asus Zenfone 4 A400CG Black, with 8 GB", "Asus Zenfone 4 A400CG Blue, with 8 GB", "Asus Zenfone 4 A400CG Red, with 8 GB", "Asus Zenfone 4 A400CG White, with 8 GB", "Asus Zenfone 4 A400CG Yellow, with 8 GB", "Asus Zenfone 4 A450CG Black, with 8 GB", "Asus Zenfone 4 A450CG Solar Yellow, with 8 GB", "Asus Zenfone 4 A450CG White, with 8 GB", "Asus Zenfone 6 A600CG / A601CG Black, with 16 GB", "Asus Zenfone 6 A600CG / A601CG Red, with 16 GB", "Atom Supremus White", "Atom Ultimus White", "BLU B10 BLK Black", "BLU B10 JUMBO R Black", "BLU B10 JUMBO Y Black", "BLU B10 R Black", "BLU B10 Y Black", "BLU B10+ B Blue", "BLU B10+ O Orange", "BLU B10+ R Red", "BLU B10+ Y Yellow", "BLU B23 B Black", "BLU B23 G Black", "BLU B23 R Black", "BLU B23 Y Black", "BLU B306A BLK Black", "BLU B306A W White", "BLU B307 BLK Black", "BLU B307 W White", "BLU B309A W White", "BLU B41 BLK Grey", "BLU B41 Gry Black", "BQ K12 Grey", "BQ K15 Grey", "BQ K18 Blue", "BQ K26 Green", "BQ K27 Gold", "BQ K28 White", "BQ K29 Black", "BQ K50 Grey", "BQ K80 Blue", "BQ S35 Red", "BQ S36 Black", "BQ S37 Black", "BQ S37 White", "BQ S60 Black", "BSNL-Champion Champion Apna Phone SQ241 Power Black", "BSNL-Champion Champion My Phone 51 Black", "BSNL-Champion Champion My Phone 51 White", "BSNL-Champion DM6513 White", "BSNL-Champion Myphone 41 Black", "BSNL-Champion Pro SQ181 Black", "BSNL-Champion SM3513 Black", "BSNL-Champion SQ 181 power Black", "BSNL-Champion SQ 181 power White", "BSNL-Champion SQ 241 Sleek Black", "BSNL-Champion SQ 241 Sleek White", "BSNL-Champion SQ241 SQ241 Black", "BSNL-Champion SQ281 SQ281 Black", "Belkin Skype V1000 Black", "BlackBerry 9720 Black", "BlackBerry 9720 White", "BlackBerry Bold 9790 Pink", "BlackBerry Curve 3G 9300 Pink", "BlackBerry Curve 9220 Black", "BlackBerry Q10 Black", "BlackBerry Q10 White", "BlackBerry Torch 9810 White", "BlackBerry Torch 9810 Zinc Grey", "BlackBerry Torch 9860 Shadow Grey", "BlackBerry Z10 Charcoal Black", "BlackBerry Z10 Pure White", "BlackBerry Z3 Black, with 8 GB", "BlackBerry Z30 Black", "BlackBerry Z30 White", "Blackberry Curve 9320 Black", "Byond B50 Black", "Celkon A10 3G Campus Series Black", "Celkon A107+ Smart Phone White", "Celkon A112 Signature Swift Black", "Celkon A112 White", "Celkon A119Q A 119 Q Smart Phone Black", "Celkon C349* Black", "Celkon C5 Star White", "Celkon C56 Black", "Celkon C6* Black \u0026 Red", "Celkon C605 Black", "Celkon C7045 Black", "Celkon Campus A20 White", "Celkon Campus A225 White", "Celkon Campus A35K Blue", "Celkon Campus A40 Yellow", "Celkon Campus A42 Black", "Celkon Campus A43 Black", "Celkon Campus A66 Black", "Celkon Campus A66 White", "Celkon Campus A9Dual White \u0026 Black", "Celkon Campus Mini A350 White", "Celkon Campus Series A20 Smart Phone Black", "Celkon Celkon Campus Series A 63 Smart Phone Campus Series A63 Black", "Celkon Feature Phone C297 Black", "Celkon Feature Phone C297 White", "Celkon Feature Phone C9 Jumbo White", "Celkon Millennium Q44 Black", "Celkon Millennium Q455 Black", "Celkon Millennium Q455 Blue", "Celkon Millennium Q455 White", "Celkon Millennium Q470 White", "Celkon Signature 118 HD Black", "Celkon Signature A115 White", "Celkon Signature Two A500 Black", "DOMO nTice G12 Phablet Mobile Smartphone White", "Datawind PocketSurfer3G5", "Datawind PocketSurfer5 White", "Datawind PocketSurfer5X Black", "Dell Venue V03B Black", "Devante Boss 1 Black", "Devante Boss 1 White", "Devante Boss 2 Black", "Devante Boss 2 Blue", "Devante Boss 2 White", "Devante Dynamite White", "Devante Hero 1 Subway Series S1 Black", "Devante Hero 1 Subway Series S1 White", "Devante Thunder Black", "Digimac 3X Black", "Digimac 3X White", "Digimac EXI Black", "Digimac EXI White", "Digimac Fusion Black", "Digimac Fusion White", "Digimac VIVO Black", "Digimac VIVO White", "Forme C101 Black", "Forme Coke A1 Red", "Forme D516 Black", "Forme D516 Black \u0026 Red", "Forme D516 Champagne", "Forme D555+ Grey", "Forme D555+ Red", "Forme D556 Black \u0026 Red", "Forme D815 Black", "Forme D815 Red", "Forme Discovery P9 Black", "Forme Discovery P9 Blue", "Forme Discovery P9 plus Black", "Forme Discovery P9 plus Blue", "Forme Energy D9 Black", "Forme F10 Black \u0026 Red", "Forme F8+ Silver", "Forme Fantasy F10 Black", "Forme Fantasy F10 Red", "Forme Find F105 Red", "Forme Forever F8 Red", "Forme Forever F8 Silver", "Forme Hero Blue", "Forme Honey Hero Black", "Forme Hope H1 Black", "Forme Hope H1 Blue \u0026 Black", "Forme Inspire V8 Black", "Forme Inspire V8 Brown", "Forme Inspire V8 Silver", "Forme K1 Black \u0026 Red", "Forme King K1 Red", "Forme L100 White \u0026 Silver", "Forme L600 Red", "Forme L900 Red", "Forme L900 White", "Forme L900 White \u0026 Red", "Forme Love One Black", "Forme Love One Brown", "Forme Love One Red", "Forme M20 White", "Forme M60 Pink", "Forme M600 Red", "Forme M600 White", "Forme M660 Red", "Forme M660 White", "Forme M80 Red", "Forme M90 Black", "Forme Mini 5130 Black", "Forme Onion K806 Black", "Forme Onion K806 White", "Forme P9 Plus Black", "Forme Power One A60 Black", "Forme Power Two M22 Grey", "Forme Power Two M22 Red", "Forme Queen K08-grey Grey", "Forme Queen K08-red Red", "Forme Queen K08-white White", "Forme S10 Silver \u0026 Green", "Forme Summer S700 Pink", "Forme Summer S700 Purple", "Forme Summer S700 Red", "Forme Summer S700 White", "Forme Sunny S60 Black", "Forme Sunny S60 Blue", "Forme Sunny S60 Orange", "Forme Surprise P10 Black", "Forme Surprise S10 Green", "Forme Surprise S10 Red", "Forme Surprise S11 Black", "Forme Surprise S11 Red", "Forme T4 Silver", "Forme Teddy T2 Green", "Forme Teddy T2 White", "Forme Teddy T3 Black", "Forme Teddy T3 Red", "Forme Teddy T4 Green", "Forme Teddy T4 Silver", "Forme V8 White", "Forme Venus V11 Black", "Forme Venus V11 Red", "Forme W3 Gold", "Forme Winner W3 Blue \u0026 Silver", "Forme Winner W3 Gold", "Forme Winner W3 Grey", "Funtab Phablet Fone PHA6.4 White", "Gee Pee 3dh 4430 Black", "Gionee CTRL V5 White", "Gionee E7 Mini", "Gionee Elife E3 Black", "Gionee Elife E6 Black", "Gionee Elife E7 16 GB Black, with 16 GB", "Gionee Elife E7 16 GB White, with 16 GB", "Gionee Elife E7 32 GB Black, with 32 GB", "Gionee Elife E7 32 GB White, with 32 GB", "Gionee Elife S5.5 Black", "Gionee Elife S5.5 White", "Gionee G1 Black", "Gionee Gpad G3 White", "Gionee Gpad G4 Black", "Gionee Gpad G4 White", "Gionee Long L700 Black", "Gionee Long L700 Silver", "Gionee M2 Black", "Gionee M2 White", "Gionee P2 Black", "Gionee P2S Black", "Gionee P2S White", "Gionee Pioneer P3 Black", "Gionee Pioneer P3 White", "Gionee Pioneer P4 Black", "Gionee Pioneer P4 White", "Gionee Slim S80 Black", "Gionee Slim S80 Grey", "Gionee V5 Black", "Google Nexus 4 Black", "Google Nexus 4 White, with Headphone", "Google Nexus 5 Black, with 16 GB", "Google Nexus 5 Black, with 32 GB", "Google Nexus 5 White, with 16 GB", "Google Nexus 5 White, with 32 GB", "HP Slate 6 Voice Tab", "HTC 709D Desire 700 White", "HTC A620E 8S Fiesta Red", "HTC Desire 210 Dual SIM D210h Black", "HTC Desire 210 Dual SIM D210h White", "HTC Desire 310 Dual SIM Arctic White", "HTC Desire 310 Dual SIM Matte Blue", "HTC Desire 310 Flipcovers Blue", "HTC Desire 500 Glacier Blue", "HTC Desire 500 Glossy Black", "HTC Desire 500 Passion Red", "HTC Desire 516 Dark Grey", "HTC Desire 516 Grey", "HTC Desire 516 Pearl White", "HTC Desire 516 White", "HTC Desire 600 Stealth Black", "HTC Desire 600 White", "HTC Desire 600C Black, with Dual SIM", "HTC Desire 600C White, with Dual SIM", "HTC Desire 601 Black, with Dual SIM", "HTC Desire 616 Dual Sim Dark Gray", "HTC Desire 616 Dual Sim White", "HTC Desire 700 Black", "HTC Desire 816 Dark Grey", "HTC Desire 816 White", "HTC Desire SV Stealth Black", "HTC Desire SV Yellow", "HTC Desire T329D XC Black Stone", "HTC Desire T329D XC Fabulous White", "HTC Desire T329W X Dual SIM White, with Dual SIM", "HTC E8 Dual SIM White", "HTC ONE E8 M8Sd Red", "HTC One 802d Black, with Dual SIM", "HTC One 802d Silver, with Dual SIM", "HTC One E8", "HTC One M8 Amber Gold", "HTC One M8 Glacial Silver", "HTC One M8 Gunmetal Grey", "HTC One Max Silver White", "HTC One Mini Black", "HTC One Mini Blue", "HTC One V T320 Jupitor Rock", "HTC T327W Desire U DS White", "Haier C380 Black", "Haier C380 White", "Hitech Air A1 White", "Hitech Amaze S-800 Black", "Hitech Amaze S410 White", "Hitech F2i Blue", "Hitech G11 Black", "Hitech G15 Black", "Hitech G5 Black", "Hitech H2i Red", "Hitech HT-850 Black", "Hitech HT820 Black", "Hitech HT830 Grey", "Hitech HT880 Black", "Hitech Kick 515 Black", "Hitech Micra - 110 Black", "Hitech Micra 115 Black", "Hitech Micra 120 Black", "Hitech Micra 150 Black", "Hitech Pride 302 Black \u0026 Silver", "Hitech Pride 313 Black", "Hitech Pride 325 Black", "Hitech Rocket G3i Black", "Hitech S210 Amaze Black", "Hitech S230 Amaze Black", "Hitech S3003G White", "Hitech Super X-9 Black", "Hitech Supreme F3 Black", "Hitech Tiny X-100 Black", "Hitech X-101 Black", "Hitech X10 Grey", "Hitech Xpaly 250 Black", "Hitech Xpaly G3i+ Black", "Hitech Xplay 245 Black", "Hitech Youth HT-810i Black", "Hitech kick 525 Black", "Hotpary Elegant H2 White", "Huawei Ascend G6 Black", "Huawei Ascend G610 Black", "Huawei Ascend G610 White", "Huawei Ascend G700 White", "Huawei Ascend P6 White", "Huawei Ascend Y200 Black", "Huawei Ascend Y210D Black", "Huawei Ascend Y220 Black", "Huawei Ascend Y600", "Huawei G730 Black", "Huawei G730 White", "Huawei Honor 3C White", "Huawei Honor 3X White", "Huawei Y320 Black", "Huawei Y511 Black", "Huawei Y600 Black \u0026 Blue", "ICE D3 Xphone Limited Edition Pearl White", "ICE Xphone Xphone Pearl White", "Icon G8 Dual SIM Qwerty Mobile Black", "Icon G9 Dual SIM Qwerty Mobile Black", "Intex AQUA Marvel + Aqua Marvel + Grey", "Intex AQUA Marvel + Aqua Marvel + White", "Intex Alpha Black", "Intex Alpha Mobile Black \u0026 Red", "Intex Aqua 3 G Black", "Intex Aqua 3G Black", "Intex Aqua 3G White", "Intex Aqua Curve Black", "Intex Aqua Curve Red", "Intex Aqua HD Aqua HD White", "Intex Aqua I 5 HD Black", "Intex Aqua I15 White", "Intex Aqua I5 HD Black", "Intex Aqua I5 HD White", "Intex Aqua N-2 Black", "Intex Aqua N15 Black", "Intex Aqua N15 Blue", "Intex Aqua N15 White", "Intex Aqua N17 Black", "Intex Aqua N2 White", "Intex Aqua N4 Black", "Intex Aqua N8 White", "Intex Aqua Octa Black", "Intex Aqua Octa White", "Intex Aqua Qwerty Blue", "Intex Aqua Qwerty White", "Intex Aqua Style Black", "Intex Aqua Style Black \u0026 Silver", "Intex Aqua Style Pro Black", "Intex Aqua Style Pro Grey", "Intex Aqua Style White \u0026 Silver", "Intex Aqua Swadesh White Black", "Intex Aqua T3 Black \u0026 Blue", "Intex Aqua T3 Grey", "Intex Aqua T3 White \u0026 Silver", "Intex Aqua T4 Black", "Intex Aqua T4 Blue", "Intex Aqua Trendy White", "Intex Aqua Y 2 Black", "Intex Aqua Y2 White", "Intex Aqua i 5 mini White", "Intex Aqua i14 Blue", "Intex Aqua i15 Black", "Intex Aqua i15 Blue", "Intex Aqua i3 Black", "Intex Aqua i3 Blue", "Intex Aqua i5 Black", "Intex Aqua i5 Mini Black", "Intex Aura NX Black", "Intex Bravo 2.6 Grey", "Intex Cloud X11 White", "Intex Cloud X12 Black", "Intex Cloud X2 Cloud X2 White", "Intex Cloud X3 Plus Black", "Intex Cloud X3 Plus White", "Intex Cloud X5 Black", "Intex Cloud X5 White", "Intex Cloud Y1 Black", "Intex Cloud Y1 White", "Intex Cloud Y12 White", "Intex Cloud Y13 White", "Intex Cloud Y17 White", "Intex Cloud Y4 Black", "Intex Cloud Y7 Black", "Intex Cloud Y7 White", "Intex Cloud Z5 Black", "Intex Focus V Silver", "Intex Focus-v Grey", "Intex Force Black \u0026 Grey", "Intex Force Black \u0026 Red", "Intex Force White \u0026 Grey", "Intex GC5050 Blue", "Intex GC5050 Red", "Intex GC5050 Silver", "Intex Gsm Hero Silver", "Intex Hero Black", "Intex IN 2010 NANO2", "Intex Jazz Grey", "Intex Jszz Black", "Intex Kobra Silver", "Intex Kobra White", "Intex Mega 10 Black", "Intex Nano 2 Black \u0026 Red", "Intex Nano 2 Blue", "Intex Nano 2S Black", "Intex Nano Star Black", "Intex Nano Star Black \u0026 Red", "Intex Neo-Vi Black \u0026 Red", "Intex Neo-vi Plus Red", "Intex Nova Black", "Intex Nova Silver", "Intex Nova White", "Intex Plasma Black", "Intex Plasma White", "Intex Platinum 201 Black", "Intex Platinum 201 Mobile Silver", "Intex Platinum 201 White", "Intex Platinum A6 Black \u0026 Silver", "Intex Platinum A6 White", "Intex Platinum Matrix Black", "Intex Platinum Matrix White", "Intex Pride Black", "Intex Rock Star Black \u0026 Grey", "Intex Shine 1800 Black", "Intex Shine 1800 Blue", "Intex Shine 1800 Red", "Intex Slimzz Black", "Intex Slimzz Silver", "Intex Star One Black", "Intex Turbo N Grey", "Intex Yuvi LX Black", "Intex Yuvi Pro Grey", "JIVI Dual Sim/Dual Standby Gsm + Cdma GC 1209 Black and White", "Jivi C3i Black", "Jivi CG1335 Black", "Jivi JV C300 CDMA Mobile Black", "Jivi JV21 Black", "Jivi JV21 White", "Jivi Jv X3i Black", "Jivi Slim X48 Black", "Jivi X390 Black", "Jivi X426 Black", "Jivi X480 Black", "Jivi X660 Black", "Josh A2700 Black", "Josh A2700 Blue", "Josh A2700 White", "Josh A999 White", "Josh Feather Black", "Josh JB 63+ Red", "Josh JB 63+ White", "Josh JB007 Silver", "Josh JB007-S Brown", "Josh JM 2800 Black", "Josh JM 2800 Golden", "Josh JM2400 Black", "Josh JM2400-R Red", "Josh Thunder Grey", "Karbonn A1 Plus Super White", "Karbonn A1+ Duple Black", "Karbonn A1+ Duple White", "Karbonn A101 Black", "Karbonn A11+ Black", "Karbonn A119 Black", "Karbonn A119 White", "Karbonn A15 Plus Black", "Karbonn A19 Black Silver", "Karbonn A19 White Silver", "Karbonn A21+ Black", "Karbonn A21+ White", "Karbonn A25 Plus White", "Karbonn A35 Black Silver", "Karbonn A35 White and Silver", "Karbonn A51 Black", "Karbonn A51 White", "Karbonn A6 Black White", "Karbonn A90 Black \u0026 Silver", "Karbonn A90 White Silver", "Karbonn A90S Black", "Karbonn A91 White", "Karbonn A93 Black", "Karbonn A93 White", "Karbonn A99 Black", "Karbonn A99 Star Black \u0026 White", "Karbonn A99 White", "Karbonn A99i Black", "Karbonn A99i White", "Karbonn Flair K102+ Gold White", "Karbonn Jumbo K9 Black \u0026 Red", "Karbonn K-Phone 1 Black Blue", "Karbonn K-Phone 1 Black Brown", "Karbonn K-Phone 1 White Silver", "Karbonn K101* Black \u0026 Red", "Karbonn K105s Black \u0026 Red", "Karbonn K112 Black", "Karbonn K39 Black \u0026 Grey", "Karbonn K39 Black \u0026 Red", "Karbonn K52 Groovster Black \u0026 Silver", "Karbonn K57 Black", "Karbonn K57 Silver", "Karbonn K62+ White", "Karbonn K63+ Black", "Karbonn K63+ Silver", "Karbonn K9 Plus Black", "Karbonn K9 Plus White Silver", "Karbonn KC540 White", "Karbonn KT 52 Black", "Karbonn KT 52 White", "Karbonn Karbonn The Legend Phone Beauty At Its Best Black Black", "Karbonn Kochadaiiyaan The Legend 2.4 Black \u0026 Red", "Karbonn Kochadaiiyaan The Legend A36 Black \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A36 White \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A6 Plus Black \u0026 White", "Karbonn Kochadaiiyaan The Legend S5i White", "Karbonn Opium N7 Black", "Karbonn Opium N9 Black", "Karbonn Opium N9 White", "Karbonn SPY K595 Black", "Karbonn SPY K595 Grey", "Karbonn Smart A1* Black", "Karbonn Smart A10 Black", "Karbonn Smart A10 White", "Karbonn Smart A11 Star Black", "Karbonn Smart A11 Star White", "Karbonn Smart A111 White", "Karbonn Smart A12 Star Black \u0026 Silver", "Karbonn Smart A12 Star White \u0026 Gold", "Karbonn Smart A26 Metallic Black", "Karbonn Smart A26 White Silver", "Karbonn Smart A29 Black", "Karbonn Smart A29 White", "Karbonn Smart A4+ Black", "Karbonn Smart A4+ White", "Karbonn Smart A5* Black", "Karbonn Smart A50s Black", "Karbonn Smart A50s White", "Karbonn Smart A51 Lite White", "Karbonn Smart A51+ Black", "Karbonn Smart A51+ White", "Karbonn Smart A52 Black Silver", "Karbonn Smart A52 Plus Black \u0026 Gold", "Karbonn Smart A52 Plus White \u0026 Silver", "Karbonn Smart A52 White Silver", "Karbonn Smart A5i Black", "Karbonn Smart A5i White", "Karbonn Smart A92 Black Silver", "Karbonn Smart A92 White Silver", "Karbonn Sound Wave K451+ Black", "Karbonn Sound Wave K451+ Champ Gold", "Karbonn Sound Wave K451+ Silver", "Karbonn The Star K61 Black", "Karbonn Titanium Hexa", "Karbonn Titanium K900 Black", "Karbonn Titanium Octane Black", "Karbonn Titanium Octane Red", "Karbonn Titanium Octane White", "Karbonn Titanium S1 Plus Black", "Karbonn Titanium S1 Plus Orange", "Karbonn Titanium S1 Plus White", "Karbonn Titanium S19 White", "Karbonn Titanium S2 Plus Black", "Karbonn Titanium S3 Black", "Karbonn Titanium S3 White", "Karbonn Titanium S4 Black", "Karbonn Titanium S4 White", "Karbonn Titanium S5 Plus Deep Blue", "Karbonn Titanium S5 Plus Pearl White", "Karbonn Titanium S5i Dark Blue", "Karbonn Titanium S7 Black", "Karbonn Titanium S9 Lite Black", "Karbonn Titanium S9 Lite White", "Karbonn Titanium S9 Pearl White", "Karbonn Titanium S99 Black", "Karbonn Titanium S99 White", "Karbonn Titanium X White", "Kingbell Basic M24 Black", "Kingbell Basic M3 Pink", "LG A390 Silver", "LG Cookie Smart T 375 Black", "LG Cookie Snap GM360i with 2 GB Memory Card", "LG D686 Gold", "LG E420 Black", "LG E612 Black", "LG G Pro 2 D838 Titan", "LG G Pro 2 D838 White", "LG G Pro E988 Black", "LG G Pro Lite D686 Black", "LG G Pro Lite D686 Black Gold", "LG G Pro Lite D686 White", "LG G-Flex Titan Silver", "LG G2 32 GB Black, with 32 GB", "LG G2 32 GB Gold", "LG G2 32 GB White, with 32 GB", "LG G2 Black", "LG G2 Black Gold, with 16gb", "LG G2 D802T Black", "LG G2 D802T Gold", "LG G2 D802T White", "LG G2 White", "LG G3 D855 Black Gold, with 32 GB", "LG G3 D855 Gold", "LG G3 D855 Titan Titan", "LG G3 D855 Titan Titan, with 32 GB", "LG G3 D855 White", "LG L4 II Dual E445 Black", "LG L4 II Dual E445 White", "LG L60 Dual White", "LG L60 X-147 Black", "LG L70 Black", "LG L70 Dual", "LG L70 White", "LG L80 Black", "LG L80 Dual Black", "LG L80 Dual White", "LG L80 White", "LG L90 Black", "LG L90 Dual", "LG L90 White", "LG Optimus 3D Max P725 Black", "LG Optimus 4X HD P880 White", "LG Optimus Black P970 Black Titan", "LG Optimus G E975 Blue", "LG Optimus GT540", "LG Optimus Hub E510 Black", "LG Optimus L3 Dual E405 Black", "LG Optimus L3 Dual E405 White", "LG Optimus L3 II E425 Black", "LG Optimus L3 II E425 White", "LG Optimus L3 II E435 Black", "LG Optimus L3 II E435 White", "LG Optimus L5 Dual E615 Black", "LG Optimus L5 Dual E615 White", "LG Optimus L5 II Dual E455 Black", "LG Optimus L5 II Dual E455 White", "LG Optimus L5 II E450 Black", "LG Optimus L5 II E450 White", "LG Optimus L7 II P715 Black", "LG Optimus L7 II P715 White", "LG Optimus L7 P705 Black", "LG Optimus L9 P765 Black", "LG Optimus Net Dual Sim P698 Titanium", "LG Optimus Pro C660 Black", "LG Optimus Sol E730 Black", "LG Optimus VU P895 Black", "LG Optimus VU P895 White", "LG P520 Black, with 2 GB Micro SD Card", "LG T500 Black", "LG T515 Wine Red", "LG T585 Black", "LG T585 White", "Lava ARC 11i Black", "Lava ARC Lite Black \u0026 Red", "Lava Arc 111 Black \u0026 Yellow", "Lava Arc 111 Grey \u0026 Green", "Lava Arc 12i Black", "Lava Arc 12i Grey", "Lava Arc 1star Black \u0026 Red", "Lava Arc 22 Black", "Lava Arc 22 Yellow", "Lava C11 Grey", "Lava CG141 Black", "Lava Discover 128 Star White", "Lava Discover 135 White", "Lava Discover 136S Champagne", "Lava Discover Neo Black", "Lava Discover Neo Grey", "Lava Iris 300 Style Dark Blue", "Lava Iris 310 Style Brown", "Lava Iris 349i Black", "Lava Iris 350M Grey", "Lava Iris 354 White", "Lava Iris 354e White", "Lava Iris 360 Music Black", "Lava Iris 3G 412 Grey", "Lava Iris 402 Grey", "Lava Iris 402 White", "Lava Iris 402+ Ivory White", "Lava Iris 402e Grey", "Lava Iris 404e Black", "Lava Iris 405+ Black", "Lava Iris 405+ White", "Lava Iris 406Q Black", "Lava Iris 406Q White", "Lava Iris 408e Frosted Silver", "Lava Iris 415 Black", "Lava Iris 450 Color Plus Black \u0026 Blue", "Lava Iris 450 Color Plus White \u0026 Blue", "Lava Iris 450 White \u0026 Blue", "Lava Iris 456 Black", "Lava Iris 458q Grey", "Lava Iris 504Q+ Gray", "Lava Iris 504Q+ White", "Lava Iris 550Q Black", "Lava Iris Pro 20 Metal Blue", "Lava Iris Pro 30 Grey", "Lava Iris X1 with 4 GB ROM Black", "Lava Iris X1 with 4 GB ROM White", "Lava Iris X1 with 8 GB ROM Black, with 8 GB ROM", "Lava Iris X1 with 8 GB ROM White, with 8 GB ROM", "Lava KKT 27i Blue", "Lava KKT 27i Grey", "Lava KKT 27i Silver", "Lava KKT 27s Grey", "Lava KKT 34i Black \u0026 Silver", "Lava KKT 34star Black \u0026 Red", "Lava KKT 40 Mini Blue", "Lava KKT 42 Black", "Lava KKT Uno Grey", "Lava Magnum X604 White", "Lava Spark 10 Black \u0026 Red", "Lava Spark 245e Black \u0026 Grey", "Lemon B149 Black", "Lemon B159 Multimedia Big Battery Black", "Lemon B169 Multimedia Big Battery Grey", "Lemon B229 Multimedia Big Battery Black", "Lemon B319I Multimedia Big Battery Black", "Lemon B579 Multimedia Big Battery with Box Speaker Black", "Lenovo A269i Black", "Lenovo A369i Black", "Lenovo A390 Black", "Lenovo A390 White", "Lenovo A516 Grey", "Lenovo A516 White", "Lenovo A526 Aurora Blue", "Lenovo A680 Black", "Lenovo A680 White", "Lenovo A800 Black", "Lenovo A850 Black", "Lenovo A850 White", "Lenovo A859 White", "Lenovo IdeaPhone S890 White", "Lenovo Ideaphone A706 Black", "Lenovo Ideaphone A706 White", "Lenovo Ideaphone S920 8 GB White, with 8 GB", "Lenovo K860 Black", "Lenovo K900 Steel Grey", "Lenovo P780 Deep Black", "Lenovo P780 Deep Black, with 8 GB", "Lenovo Reliance CDMA GSM 2 SIM Android SmartPhone A600E Black", "Lenovo S650 Silver", "Lenovo S660 Titanium", "Lenovo S720 White", "Lenovo S820 Red", "Lenovo S820 Red, with 8 GB", "Lenovo S850", "Lenovo S860 Titanium", "Lenovo S880 White", "Lenovo S920 Blue", "Lenovo S920 White", "Lenovo S930 Silver", "Lenovo Vibe X Silver", "Lenovo Vibe Z K910 Silver", "Lenovo Vibe Z K910 Titanium", "MTS Blaze 4", "MTS Blaze 4.5", "MTS Blaze 5.0 White", "MTS Dual CG 131", "MTS Dual CG 141", "MTS Rockstar M131", "MTS Rockstar M141 Red", "Magicon Senior Duo White", "Maxx AX3 Black", "Maxx AX8 Black", "Maxx GenxDroid7 - AX352 Black", "Maxx GenxDroid7 - AX407 Black", "Maxx MSD7 Smarty Black", "Maxx MX426 - Supremo Red", "Maxx Note I AX8 Black", "Maxx Race AX8 Black", "Maxx Race AX9Z White", "Maxx Zippy MT616 Coffee", "Micromax A069 Grey", "Micromax A069 White", "Micromax A069 Yellow", "Micromax A091 C Engage Grey", "Micromax A093 White \u0026 Gold", "Micromax Aisha A52 White", "Micromax Bling 3 A86 White", "Micromax Bolt A068 Blue", "Micromax Bolt A068 White", "Micromax Bolt A075 Blue", "Micromax Bolt A089 Black", "Micromax Bolt A089 White", "Micromax Bolt A24 Champange", "Micromax Bolt A36 Black", "Micromax Bolt A37 Black", "Micromax Bolt A37B Black", "Micromax Bolt A46 Black", "Micromax Bolt A47 Black", "Micromax Bolt A58 Black", "Micromax Bolt A58 Red", "Micromax Bolt A59 Grey", "Micromax Bolt A61 Grey", "Micromax Bolt A62 Black", "Micromax Bolt A62 White", "Micromax Bolt A66 Black", "Micromax Bolt A67 Black", "Micromax Bolt A67 White", "Micromax Bolt A69", "Micromax Bolt A71 Black", "Micromax Bolt A71 White", "Micromax Bolt GC232 Black \u0026 Silver", "Micromax Bolt X101 White", "Micromax Bolt X287 Grey", "Micromax C210 White", "Micromax CDMA C200 Black \u0026 White", "Micromax CG666 Black \u0026 Grey", "Micromax CG666 White", "Micromax Canvas 2 Colors A120 with 4 GB ROM Grey", "Micromax Canvas 2 Colors A120 with 4 GB ROM White", "Micromax Canvas 2 Colors A120 with 8 GB ROM Grey", "Micromax Canvas 2.2 A114 Black", "Micromax Canvas 2.2 A114 White", "Micromax Canvas 4 A210 Grey", "Micromax Canvas Blaze HD EG116 Black", "Micromax Canvas Blaze MT500", "Micromax Canvas Doodle 2 A240 Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM White", "Micromax Canvas Doodle 3 A102 with 512 MB RAM Blue", "Micromax Canvas Doodle 3 A102 with 512 MB RAM White", "Micromax Canvas Doodle A111 White", "Micromax Canvas Duet AE90 Black", "Micromax Canvas Ego A113 Grey", "Micromax Canvas Elanza 2 A121 Black", "Micromax Canvas Elanza A93 Black Silver", "Micromax Canvas Elanza A93 Blue \u0026 Grey", "Micromax Canvas Elanza A93 Coffee", "Micromax Canvas Entice A105 Grey", "Micromax Canvas Fire A093 Black \u0026 Gold", "Micromax Canvas Fire A104 Black Gold", "Micromax Canvas Fun A63 Blue", "Micromax Canvas Fun A63 Yellow", "Micromax Canvas Fun A76 Black", "Micromax Canvas Gold A300 Black Gold", "Micromax Canvas Gold A300 White Gold", "Micromax Canvas HD Plus A190 Black", "Micromax Canvas Juice A177 Black", "Micromax Canvas Juice A77 White", "Micromax Canvas Knight A350 Black", "Micromax Canvas Knight A350 Black \u0026 Gold", "Micromax Canvas Knight A350 White \u0026 Gold", "Micromax Canvas Knight Cameo A290 White \u0026 Gold", "Micromax Canvas L A108 Blue", "Micromax Canvas Magnus A117 Blue", "Micromax Canvas Music A88 Black", "Micromax Canvas Music A88 White", "Micromax Canvas Power A96 Black", "Micromax Canvas Turbo A250 White", "Micromax Canvas Turbo Mini A200 Black", "Micromax Canvas Turbo Mini A200 White", "Micromax Canvas Win W121", "Micromax Canvas XL A119 White", "Micromax Canvas XL2 A109 White", "Micromax EG111 Black", "Micromax Fire 2 A104 White", "Micromax GC222 Black", "Micromax GC222 White", "Micromax GC666 Black \u0026 Grey", "Micromax Knight Cameo A290 White", "Micromax MAd A94 Grey", "Micromax Ninja A91 Black", "Micromax Rockstar C192 Black", "Micromax Smarty 3.0 A30 Black", "Micromax Smarty 4.3 A65 White", "Micromax Unite 2 A106 with 4 GB ROM Green", "Micromax Unite 2 A106 with 4 GB ROM Grey", "Micromax Unite 2 A106 with 4 GB ROM Red", "Micromax Unite 2 A106 with 4 GB ROM White", "Micromax Unite 2 A106 with 8 GB ROM Grey, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM Red, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM White, with 8 GB ROM", "Micromax Unite A092 Black", "Micromax Unite A092 Grey", "Micromax Unite A092 Red", "Micromax Unite A092 White", "Micromax Unite A092 Yellow", "Micromax X084 Black \u0026 Red", "Micromax X084 White Silver", "Micromax X085 Black \u0026 Red", "Micromax X086 White", "Micromax X088 Black \u0026 Red", "Micromax X088 Black \u0026 Silver", "Micromax X089 Black", "Micromax X096 Black", "Micromax X096 White", "Micromax X097 Black", "Micromax X098 Grey", "Micromax X098 Red", "Micromax X101i White", "Micromax X101i Yellow", "Micromax X103i White", "Micromax X103i Yellow", "Micromax X247 Black", "Micromax X249 Black", "Micromax X251 Grey", "Micromax X253 Black", "Micromax X254 Grey", "Micromax X258 Black", "Micromax X267 Black", "Micromax X267 White", "Micromax X279i Grey", "Micromax X281 Grey", "Micromax X282 Grey", "Micromax X325 Grey", "Micromax X328 Grey", "Micromax X329 Black", "Micromax X337 Grey", "Micromax X351 Black Silver", "Micromax X367 Grey", "Micromax X44 Pearl White", "Micromax X455i White", "Micromax X55 Coffee", "Moto E Black", "Moto E White", "Moto X 16 GB Bamboo", "Moto X 16 GB Black", "Moto X 16 GB Red", "Moto X 16 GB Teak", "Moto X 16 GB Walnut", "Moto X 16 GB White", "Mtech A6 Infinity Black", "Mtech A6 Infinity White", "Mtech Fusion Black", "Mtech Fusion Blue", "Mtech G 14 Black", "Mtech G22 Black", "Mtech G22 White", "Mtech G4 Black", "Mtech Jazz Black", "Mtech Jazz White", "Mtech L6 Black", "Mtech L6 Blue", "Mtech L6 Brown", "Mtech Lotus Black", "Mtech Opal 3G Black \u0026 White", "Mtech Pride Blue", "Mtech Pride Red", "Mtech Rock Black", "Mtech Sharp Black", "Mtech Sharp Cyan", "Mtech Sharp Golden", "Mtech Spark Black", "Mtech Spark Black \u0026 White", "Mtech Spark Blue", "Mtech Touch Opal PRO Grey", "Mtech Touch Opal PRO White", "Mtech V22 Black", "Mtech V22 White", "Nokia 105 Black", "Nokia 105 Cyan", "Nokia 106 Black", "Nokia 106 Red", "Nokia 106 White", "Nokia 107 Black", "Nokia 107 Red", "Nokia 107 White", "Nokia 108 Black", "Nokia 108 Cyan", "Nokia 108 Red", "Nokia 108 White", "Nokia 108 Yellow", "Nokia 112 Red", "Nokia 112 White", "Nokia 114 Black", "Nokia 114 Cyan", "Nokia 206 Black, with Dual SIM", "Nokia 206 Cyan, with Dual SIM", "Nokia 206 White, with Dual SIM", "Nokia 208DS Black, with Dual SIM", "Nokia 208DS Red, with Dual SIM", "Nokia 220 Black", "Nokia 220 Red", "Nokia 220 White", "Nokia 220 Yellow", "Nokia 225 Black", "Nokia 225 Bright Red", "Nokia 225 Bright Yellow", "Nokia 225 White", "Nokia 301 Black", "Nokia 301 White", "Nokia 515 Black", "Nokia 515 White", "Nokia Asha 210 Black", "Nokia Asha 210 Cyan", "Nokia Asha 210 Yellow", "Nokia Asha 230 Black", "Nokia Asha 230 Bright Red", "Nokia Asha 230 White", "Nokia Asha 305 Dark Grey", "Nokia Asha 305 Mid Blue", "Nokia Asha 305 Silver White", "Nokia Asha 308 Golden Light", "Nokia Asha 310 White", "Nokia Asha 311 Dark Grey", "Nokia Asha 311 Sand White", "Nokia Asha 500 Black", "Nokia Asha 500 Bright Red", "Nokia Asha 500 White", "Nokia Asha 500 Yellow", "Nokia Asha 501 Black", "Nokia Asha 501 Bright Red", "Nokia Asha 501 White", "Nokia Asha 501 Yellow", "Nokia Asha 502 Black", "Nokia Asha 502 Bright Red", "Nokia Asha 502 White", "Nokia Asha 502 Yellow", "Nokia Asha 503 Black", "Nokia Asha 503 Bright Red", "Nokia Asha 503 White", "Nokia Asha 503 Yellow", "Nokia Lumia 1320 Black", "Nokia Lumia 1320 Orange", "Nokia Lumia 1320 White", "Nokia Lumia 1320 Yellow", "Nokia Lumia 1520 Black", "Nokia Lumia 1520 Red", "Nokia Lumia 1520 White", "Nokia Lumia 1520 Yellow", "Nokia Lumia 520 Black", "Nokia Lumia 520 Cyan", "Nokia Lumia 520 Red", "Nokia Lumia 520 White", "Nokia Lumia 520 Yellow", "Nokia Lumia 525 Black", "Nokia Lumia 525 Orange", "Nokia Lumia 525 White", "Nokia Lumia 525 Yellow", "Nokia Lumia 530 Dual SIM Bright Orange", "Nokia Lumia 530 Dual SIM Dark Grey", "Nokia Lumia 530 Dual SIM White", "Nokia Lumia 610 Cyan", "Nokia Lumia 610 White", "Nokia Lumia 620 Black", "Nokia Lumia 620 White", "Nokia Lumia 620 Yellow", "Nokia Lumia 625 Black", "Nokia Lumia 625 Green", "Nokia Lumia 625 Orange", "Nokia Lumia 625 White", "Nokia Lumia 625 Yellow", "Nokia Lumia 630 Dual SIM Black", "Nokia Lumia 630 Dual SIM Bright Green", "Nokia Lumia 630 Dual SIM Bright Orange", "Nokia Lumia 630 Dual SIM Bright Yellow", "Nokia Lumia 630 Dual SIM White", "Nokia Lumia 630 Single SIM Black", "Nokia Lumia 630 Single SIM Bright Green", "Nokia Lumia 630 Single SIM Bright Orange", "Nokia Lumia 630 Single SIM Bright Yellow", "Nokia Lumia 630 Single SIM White", "Nokia Lumia 920 White", "Nokia Lumia 925 Black", "Nokia Lumia 925 Grey", "Nokia Lumia 925 White", "Nokia X Black", "Nokia X Bright Green", "Nokia X Bright Red", "Nokia X Cyan", "Nokia X White", "Nokia X Yellow", "Nokia X+ Black", "Nokia X+ Bright Green", "Nokia X+ Yellow", "Nokia XL Black", "Nokia XL Bright Green", "Nokia XL Bright Orange", "Nokia XL Bright Yellow", "Nokia XL Cyan", "Nokia XL White", "Nuclear SX 5.3i Smartphone Black", "OPPO Find 5 Mini R827 Black", "OPPO Find 5 Mini R827 White", "OPPO Find 7 X9076 Black", "OPPO Find 7 X9076 White", "OPPO Find 7a X9006 Black", "OPPO Find 7a X9006 White", "OPPO Joy R1001 Black", "OPPO Joy R1001 White", "OPPO N1 Mini Lemon", "OPPO N1 Mini Mint", "OPPO N1 Mini White", "OPPO N1 White", "OPPO Neo 3 R831K Grey", "OPPO Neo 3 R831K White", "OPPO R1 829 Black", "OPPO R1 829 White", "OPPO Yoyo R2001 Black", "OPPO Yoyo R2001 White", "Olive V-C2130 Black", "Onida G Series G180 Black", "Onida G Series G181 Black \u0026 Red", "Onida G007S Black", "Onida G182 Black", "Onida G183 Black \u0026 Red", "Onida G183 Multicolor", "Onida G242 Black \u0026 Red", "Onida G640A Grey \u0026 Silver", "Onida i011 Black", "Onida i011 White", "Onida i099 Black", "Onida i666 W4413 White", "Onida i666 White", "Onida i777 W4213 White", "Panasonic Eluga A White", "Panasonic Eluga U Black", "Panasonic Eluga U White", "Panasonic GD 28 Black", "Panasonic GD21 Grey", "Panasonic GD31 Black", "Panasonic GD31 White", "Panasonic P11 with Changeable Back Covers", "Panasonic P31 Midnight Blue", "Panasonic P31 Pure White", "Panasonic P41 Black", "Panasonic P51 Black", "Panasonic P51 White", "Panasonic P61 Black", "Panasonic P61 White", "Panasonic P81 Black", "Panasonic T11 White", "Panasonic T21", "Panasonic T31 Black", "Panasonic T31 White", "Panasonic T41 Black", "Panasonic T41 White", "Rage Ace_Black Red", "Rage Ace_Blue Black", "Rage Ace_Green Black", "Rage Ace_White White", "Rage Duke_Green Green", "Rage Glory_Black Silver", "Rage Hero Black \u0026 Grey", "Rage Hero Black \u0026 Red", "Rage Hero White \u0026 Blue", "Rage Magic-50 Black", "Rage Magic-50 White", "Rage Minni_White White", "Rage OPS 35g Blue", "Rage OPS 60dn White", "Rage OPS 80 White", "Rage OPS 80d Black", "Rage OPS 80d White", "Rage OPS 80q Black", "Rage Ps16 Black \u0026 Silver", "Rage Ps16 White \u0026 Silver", "Rage Ps20 White \u0026 Red", "Rage Silk_Blue Black", "Rage Silk_Golden Black", "Rage Storm_Blue Blue", "Rage Storm_White White", "Rage Ultra Black", "Rage Vega White", "Salora SM204 Red", "Salora SM508 Blue \u0026 Black", "Salora SM601 Black \u0026 Gold", "Samsung E2252 Metallic Silver", "Samsung E2252 Pure White", "Samsung G350 White", "Samsung GT 1200 R/I/M", "Samsung Galaxy Ace NXT-G313H White", "Samsung Galaxy Core 2 SM-G355H Black", "Samsung Galaxy Core 2 SM-G355H White", "Samsung Galaxy Core I8262 Chic White", "Samsung Galaxy Golden I9230 Champagne Gold", "Samsung Galaxy Grand 2 Black", "Samsung Galaxy Grand 2 White", "Samsung Galaxy Grand Duos I9082 Elegant White, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Duos I9082 Metallic Blue, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Neo GT-I9060 Midnight Black", "Samsung Galaxy Grand Neo GT-I9060 White", "Samsung Galaxy Mega 5.8 I9152 White", "Samsung Galaxy Note 2 N7100 Marble White", "Samsung Galaxy Note 2 N7100 Titanium Grey", "Samsung Galaxy Note 3 N9000 Blush Pink", "Samsung Galaxy Note 3 N9000 Classic White", "Samsung Galaxy Note 3 N9000 Jet Black", "Samsung Galaxy Note 3 Neo Black", "Samsung Galaxy Note 3 Neo White", "Samsung Galaxy S Duos 2 S7582 Black", "Samsung Galaxy S Duos 2 S7582 Pure White", "Samsung Galaxy S3 Marble White, with 16GB", "Samsung Galaxy S3 Neo GT-I9300I Blue", "Samsung Galaxy S3 Neo GT-I9300I Marble White", "Samsung Galaxy S4 I9500 Black Mist", "Samsung Galaxy S4 I9500 Deep Black", "Samsung Galaxy S4 I9500 White Frost", "Samsung Galaxy S4 Mini I9192 Black Mist", "Samsung Galaxy S4 Mini I9192 White Frost", "Samsung Galaxy S4 Zoom SM-C1010 White", "Samsung Galaxy S5 Charcoal Black", "Samsung Galaxy S5 Copper Gold", "Samsung Galaxy S5 Electric Blue", "Samsung Galaxy S5 Shimmery White", "Samsung Galaxy Star Pro S7262 Midnight Black", "Samsung Galaxy Star Pro S7262 White", "Samsung Galaxy Star S5282 Ceramic White", "Samsung Galaxy Star S5282 Noble Black", "Samsung Galaxy Star S5282 Silver", "Samsung Galaxy Trend S7392 Ceramic White, with 4 GB", "Samsung Galaxy Trend S7392 Midnight Black", "Samsung Galaxy Y S5360 Pure White", "Samsung Guru 1200 Black", "Samsung Guru 1200 Indigo Blue", "Samsung Guru 1200 White", "Samsung Guru E1207T Black", "Samsung I8552 - Galaxy Grand Quattro Ceramic White", "Samsung I8552 - Galaxy Grand Quattro Titan Gray", "Samsung Keystone 2 E1207Y Black", "Samsung Metro DUOS C3322 Deep Black", "Samsung Omnia M S7530 Deep Gray", "Samsung S6812 - Galaxy Fame Metallic Blue", "Samsung S7262 Wine Red", "Sansui SA40 Black", "Sansui SA50 Plus Grey", "Simmtronics Xpad M1 Black", "Simmtronics Xpad Q1 Black", "Simmtronics Xpad Q4", "Simmtronics Xpad Q4 Black", "Simmtronics Xpad Q5 Black", "Sony Xperia C Black", "Sony Xperia C Purple", "Sony Xperia C White", "Sony Xperia C3 Black", "Sony Xperia C3 White", "Sony Xperia E Black", "Sony Xperia E Dual Champagne", "Sony Xperia E White", "Sony Xperia E1 Black", "Sony Xperia E1 Dual Black", "Sony Xperia E1 Dual Purple", "Sony Xperia E1 Dual White", "Sony Xperia E1 Purple", "Sony Xperia E1 White", "Sony Xperia Go Warm Yellow", "Sony Xperia L Rose Red", "Sony Xperia L Starry Black", "Sony Xperia M Black", "Sony Xperia M Dual Black", "Sony Xperia M Dual Purple", "Sony Xperia M Dual White", "Sony Xperia M Purple", "Sony Xperia M White", "Sony Xperia M2 Dual Black", "Sony Xperia M2 Dual Purple", "Sony Xperia M2 Dual White", "Sony Xperia Miro Black", "Sony Xperia Miro White with Silver Strip", "Sony Xperia Neo L Glossy Black", "Sony Xperia P Black", "Sony Xperia P Red", "Sony Xperia P Silver", "Sony Xperia SP Black", "Sony Xperia SP Red", "Sony Xperia SP White", "Sony Xperia T2 Ultra Black", "Sony Xperia T2 Ultra Purple", "Sony Xperia T2 Ultra White", "Sony Xperia T3 Black", "Sony Xperia T3 Purple", "Sony Xperia T3 White", "Sony Xperia Tipo Classic White", "Sony Xperia Tipo Dual Classic Silver", "Sony Xperia Z Black", "Sony Xperia Z Purple", "Sony Xperia Z Ultra Black", "Sony Xperia Z Ultra Purple", "Sony Xperia Z Ultra White", "Sony Xperia Z White", "Sony Xperia Z1 Black", "Sony Xperia Z1 Compact Black", "Sony Xperia Z1 Compact Lime", "Sony Xperia Z1 Compact Pink", "Sony Xperia Z1 Compact White", "Sony Xperia Z1 Purple", "Sony Xperia Z1 White", "Sony Xperia Z2 Black", "Sony Xperia Z2 Purple", "Sony Xperia Z2 White", "Sony Xperia ZR White", "Spice Boss Champion 2 M-5008 Black", "Spice Boss Chocolate M-5373 Black", "Spice Boss Delite M-5162 White", "Spice Boss Link M-5621 Black", "Spice Boss M-5470 Grey", "Spice Boss Slender 2 M-5404 White", "Spice Boss Slender M-5371", "Spice Boss Trendy 4 M-5004 Black", "Spice Boss Trendy 5 M-5032 White", "Spice Boss Trio M-5025 Black", "Spice Buddy N-300 Midnight Black", "Spice Coolpad 2 Mi-496 White", "Spice Flo Rainbow M-6111", "Spice Flo Sleek M-5915", "Spice M-5415 Black", "Spice Smart Flo Edge Mi-349 White", "Spice Smart Flo Mettle 3.5X Mi-356 White", "Spice Smart Flo Mettle 4X Mi-426 White", "Spice Smart Flo Mettle 5X Mi-504 Black", "Spice Smart Flo Mettle 5X Mi-504 White", "Spice Smart Flo Pace 3 Mi-502n White", "Spice Smart Flo Pace Mi-422 White", "Spice Smart Flo Poise Mi-451", "Spice Stellar 360", "Spice Stellar 361 Black", "Spice Stellar 361 White", "Spice Stellar 445 Black", "Spice Stellar 497 White", "Spice Stellar 506 Titanium Grey", "Spice Stellar 509", "Spice Stellar 520 Red", "Spice Stellar 520 Yellow", "Spice Stellar Glamor Mi-436", "Spice Stellar Glide Mi-438 Silver", "Spice Stellar Horizon Pro Mi-505 White", "Spice Stellar Mettle Icon Mi-506 Silver", "Spice Stellar Nhance 2 Mi-437", "Spice Stellar Pinnacle Pro Mi-535 Brown", "Spice Stellar Virtuoso Pro Mi-491 Black", "Spice Steller Virtuoso Pro+ Mi-492 White", "Swingtel Mini SX3 White", "Swingtel SW27 Black", "Swingtel SW27 White", "Swingtel SW30 Black", "Swingtel SW30 Silver", "Swingtel SW30 White", "Swingtel SW50+ Black", "Swingtel SW50+ Red", "Swingtel Superb White", "Swingtel Tigertab White, Red, Grey", "Swipe Fablet F2 White", "Swipe Konnect 5.0 Black", "Swipe Konnect 5.0 White", "Swipe Sense Black", "Swipe Sonic Black", "cameraC Android 2.2 Smartphone Black", "Trio T2020L Black \u0026 Blue", "Trio T2020L Black \u0026 Grey", "Trio T2020L White \u0026 Blue", "Trio T2020XL Black \u0026 Blue", "Trio T2020XL Black \u0026 Gold", "Trio T2020XL Black White", "Trio T2424 Black \u0026 Green", "Trio T2424 Black \u0026 Red", "Trio T2424 White \u0026 Blue", "Trio T2424XL Black \u0026 Blue", "Trio T2424n Black \u0026 Blue", "Trio T2424n Black White", "Trio T2626 Black", "Trio T2626 White \u0026 Blue", "Trio T2626 White \u0026 Yellow", "Trio T2828 Black \u0026 Grey", "Trio T2828 Black White", "V3 Bizz GQ225 Grey", "Videocon A 54 White", "Videocon A 55q HD Black", "Videocon A15 Black", "Videocon A15 White Chrome", "Videocon A16 Black", "Videocon A16 White", "Videocon A42 Black", "Videocon A48 White", "Videocon A52 White", "Videocon A53 White Chrome", "Videocon A55 HD Black \u0026 Silver", "Videocon A55HD White", "Videocon Dost V1539 N Black Silver", "Videocon Dost V1615 Black", "Videocon Dost V1615 Silver", "Videocon V1508 Black", "Videocon V1544 Black \u0026 Silver", "Videocon vphone Gold", "Videocon vphone White", "Vox Kick 5 Black", "Vox Kick 5 White", "Vox V-3100 Black", "Vox V-3100 White", "Wham W20i Black", "Wham W24i Black", "Wham W26i Black", "Wynncom W101 Black", "Wynncom WYNNW412 Black", "XElectron AN1 Black", "XElectron BluEye Black", "XElectron M007 Black", "XElectron M998 Black", "XElectron N100 Black", "XElectron X1 White", "XElectron X1Black Black", "XOLO 8X-1000 Black", "XOLO A500 Club Black", "XOLO A500 Club White", "XOLO A500S Black", "XOLO A500S IPS Black", "XOLO A500S IPS Green", "XOLO A500S IPS Red", "XOLO A500S White", "XOLO A500s Lite Black", "XOLO A500s Lite White", "XOLO A550S IPS Black", "XOLO A600 Black", "XOLO A600 Blue", "XOLO A600 White", "XOLO A600 Yellow", "XOLO A700S Black", "XOLO LT900 Black", "XOLO Opus 2 Q1000 Black", "XOLO Play 6X-1000 Black", "XOLO Play 6X-1000 White", "XOLO Play Black", "XOLO Q1000 Black", "XOLO Q1000 Opus Black", "XOLO Q1000 Opus White", "XOLO Q1000 White", "XOLO Q1000S Black", "XOLO Q1000S Plus Black", "XOLO Q1010 White", "XOLO Q1010i Black", "XOLO Q1010i Coffee Brown", "XOLO Q1010i White", "XOLO Q1011 Black", "XOLO Q1011 White", "XOLO Q1100 Black", "XOLO Q1200 Black", "XOLO Q1200 White", "XOLO Q2000 White", "XOLO Q2000L White", "XOLO Q2500 Black", "XOLO Q3000 Black", "XOLO Q3000 White", "XOLO Q500S IPS Black", "XOLO Q500S IPS Green", "XOLO Q500S IPS Red", "XOLO Q600 White", "XOLO Q600S Black", "XOLO Q600S White", "XOLO Q700S Gold", "XOLO Q700S Plus Gold", "XOLO Q700S Silver", "XOLO Q700i Black", "XOLO Q900 White", "XOLO Q900S Black", "XOLO Q900T", "XOLO Win Q900s Black", "XOLO X1000 Black", "Y King Y 10 Black", "Y King Y 10 White", "Y King Y 20 Black", "Y King Y 30 Black", "Y King Y 30 White", "ZTE Blade C V807 Black", "ZTE Blade L V887", "ZTE Grand X Quad Lite Blue", "ZTE Grand X Quad Lite White", "ZTE Reliance d286 Black", "ZTE Reliance d286 White", "ZTE S183Reliance CDMA Only Black", "Zen 303 Power Black", "Zen 306 Ultrafone 306 Play Black \u0026 Red", "Zen 701 Amaze 701 Full Hd Black", "Zen P36 Black", "Zen U 504 B Black", "Zen U 504 W White", "Zen Ultrafone 502qHD Black", "Zook Boss Black", "Zook Brave Brown", "Zook Brilliant Grey", "Zook IMAX Blue", "Zook Iconic Black", "Zook Iconic Gold", "Zook Ideal Black", "Zook Ideal Gold", "Zook Keypad Sliver", "Zook Keypad White", "Zync Cloud Z401", "Zync X108 White", "Zync X207 Black", "iBall 4PIPS Gem Black", "iBall Andi 3.5 Classique With 1.3 Ghz Processor White", "iBall Andi 4.5 2G Grey", "iBall Andi 4.5 2G Ripple White", "iBall Andi 4.5 3G Ripple White", "iBall Andi 4.5 3G Wine \u0026 Gunmetal", "iBall Andi 4.5D Royale", "iBall Andi 4.7G Cobalt", "iBall Andi 5-M8 Black", "iBall Andi 5.5N2 Quadro", "iBall Andi 5K Sparkle White White", "iBall Andi 5K Sparkle Wine Special Wine", "iBall Andi 5T Cobalt 2", "iBall Andi Uddaan", "iBall Andi3.5kke Genius Black", "iBall Andi3.5kke Genius White", "iBall Andi3.5kke Winner Black", "iBall Andi3.5kke Winner White", "iBall Andi4 B2 Black", "iBall Andi4 Gem Black", "iBall Andi4 Gem White", "iBall Andi4 Velvet Black", "iBall Andi4 Velvet White", "iBall Andi4.5P Glitter White", "iBall Andi4.5P Glitter Yellow", "iBall Andi4.5Q White", "iBall Andi4.5d Royale White", "iBall Andi5-E7 Grey", "iBall IPS Tiger Andi4 Royal Blue", "iBall Iball Vogue 2.8A Slim Bar Design White White", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Black", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Yellow", "iBall King1.8D White", "iBall Senior Aasaan2 White", "iBall Shaan Fab2.4V8 Black \u0026 Blue", "iBall Shaan Fab2.4V8 Black \u0026 Yellow", "iBall Vogue 1.8-KK18 Black", "iBall Vogue 1.8-KK7 Yellow", "iBall Vogue 2.4 kk1 Grey", "iBall Vogue2.4e Black", "iBall iBall Andi 3.5kke Glory Special Wine", "iBall iBall Vogue 2.8A Slim Bar Design Grey Grey"]


        $scope.pricedivisionscamera = [
            {
                price: "Rs. 2000 and below"
            },
            {
                price: "Rs 2001 - 5000"
            },
            {
                price: "Rs 5001 - 10000"
            },
            {
                price: "Rs 10001 - 18000"
            },
            {
                price: "Rs 18001 - 25000"
            },
            {
                price: "Rs 25001 - 35000"
            },
            {
                price: "Rs 35001 and above"
            }
        ];


        // camera divisions for changes
        $scope.$watch('cameraesdivisions|filter:{selected:true}', function (nv) {
            $scope.cameratradeshow.cameraDivisions = nv.map(function (division) {
                //alert(division.brand);
                console.log({name: division.brand});
                return {name: division.brand};
            });

            var display = 0;
            if (angular.toJson($scope.cameratradeshow.cameraDivisions).length > 0 && angular.toJson($scope.colortradeshowcamera.colorDivisionscamera).length > 0
                && angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera).length > 0) {
                //show brand, color and price
                display = 1;
            } else if (angular.toJson($scope.cameratradeshow.cameraDivisions).length > 0 && angular.toJson($scope.colortradeshowcamera.colorDivisionscamera).length > 0
                && angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera).length < 0) {
                //show only brand and color
                display = 2;
            } else if (angular.toJson($scope.cameratradeshow.cameraDivisions).length > 0 && angular.toJson($scope.colortradeshowcamera.colorDivisionscamera).length < 0
                && angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera).length < 0) {
                //show only brand
                display = 3;
            } else if (angular.toJson($scope.cameratradeshow.cameraDivisions).length < 0 && angular.toJson($scope.colortradeshowcamera.colorDivisionscamera).length > 0
                && angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera).length > 0) {
                //show only color and price
                display = 4;
            } else if (angular.toJson($scope.cameratradeshow.cameraDivisions).length < 0 && angular.toJson($scope.colortradeshowcamera.colorDivisionscamera).length > 0
                && angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera).length < 0) {
                //show only color
                display = 5;
            } else if (angular.toJson($scope.cameratradeshow.cameraDivisions).length < 0 && angular.toJson($scope.colortradeshowcamera.colorDivisionscamera).length < 0
                && angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera).length < 0) {
                //show none
                display = 6;
            } else if (angular.toJson($scope.cameratradeshow.cameraDivisions).length < 0 && angular.toJson($scope.colortradeshowcamera.colorDivisionscamera).length < 0
                && angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera).length > 0) {
                //show price
                display = 7;
            }

            switch (display) {
                case 1:
                    $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                        color: angular.toJson($scope.colortradeshowcamera.colorDivisionscamera), price: angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera), productType: 'Camera'});
                    break;
                case 2:
                    $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                        color: angular.toJson($scope.colortradeshowcamera.colorDivisionscamera), price: angular.toJson($scope.priceDivisionscamera), productType: 'Camera'});
                    break;
                case 3:
                    $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                        color: angular.toJson($scope.colorDivisionscamera), price: angular.toJson($scope.priceDivisionscamera), productType: 'Camera'});
                    break;
                case 4:
                    $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                        color: angular.toJson($scope.colortradeshowcamera.colorDivisions), price: angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera), productType: 'Camera'});
                    break;
                case 5:
                    $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                        color: angular.toJson($scope.colortradeshowcamera.colorDivisionscamera), price: angular.toJson($scope.priceDivisionscamera), productType: 'Camera'});
                    break;
                case 6:
                    //  $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                    //    color: angular.toJson($scope.colortradeshowcamera.colorDivisionscamera), price: angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera), productType: productType});
                    break;
                case 7:
                    $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                        color: angular.toJson($scope.colorDivisionscamera), price: angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera), productType: 'Camera'});
                    break;
                default:
                    break;
            }


            console.log("tradeshowcamera" + angular.toJson($scope.cameratradeshow.cameraDivisions));
            //$location.path('/view2');
        }, true);


        $scope.colortradeshowcamera = { };
        $scope.colortradeshowcamera.colorDivisionscamera = [];


        // helper method
        $scope.selectedColorDivisionscamera = function selectedColorDivisionscamera() {
            return filterFilter($scope.colortradeshowcamera.colorDivisionscamera, { selected: true });
        };

        // camera divisions for changes
        $scope.$watch('colordivisionscamera|filter:{selected:true}', function (nv1) {
            $scope.colortradeshowcamera.colorDivisionscamera = nv1.map(function (colordivisioncamera) {
                //alert(division.brand);
                console.log({color: colordivisioncamera.color});
                return {color: colordivisioncamera.color};
            });
            $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                color: angular.toJson($scope.colortradeshowcamera.colorDivisionscamera), price: angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera), productType: 'Camera'});
            console.log("colortradeshowcamera" + angular.toJson($scope.colortradeshowcamera.colorDivisionscamera));
            //  $location.path('/view2');
        }, true);


        $scope.pricetradeshowcamera = { };
        $scope.pricetradeshowcamera.priceDivisionscamera = [];


        // helper method
        $scope.selectedPriceDivisionscamera = function selectedPriceDivisionscamera() {
            return filterFilter($scope.pricetradeshowcamera.priceDivisionscamera, { selected: true });
        };


        // camera divisions for changes
        $scope.$watch('pricedivisionscamera|filter:{selected:true}', function (nv2) {
            $scope.pricetradeshowcamera.priceDivisionscamera = nv2.map(function (pricedivisioncamera) {
                //alert(division.brand);
                console.log({price: pricedivisioncamera.price});
                return {price: pricedivisioncamera.price};
            });
            $rootScope.cameralist = CameraFactory.brandName.query({brands: angular.toJson($scope.cameratradeshow.cameraDivisions),
                color: angular.toJson($scope.colortradeshowcamera.colorDivisionscamera), price: angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera), productType: 'Camera'});
            console.log("pricetradeshowcamera" + angular.toJson($scope.pricetradeshowcamera.priceDivisionscamera));
            // $location.path('/view2');
        }, true);


        $scope.getcameraInfo = function (product) {
            console.log("getProductInfo - " + product.productName);
            //$rootScope.productInfo = UserFactory.productdetails.query({key: product.productName, productType: productType});

            $rootScope.pricecompare = {productName: ""};
            $rootScope.pricecompare = CameraFactory.productdetails.query({key: product.productName, productType: 'Camera'});
            console.log("price compare - " + $rootScope.pricecompare.length);

            $rootScope.productInfo = product;
            $rootScope.image = product.productImage;
            console.log("productInfo length - " + product.productImage);
            console.log("productInfo length - " + $rootScope.image);
            console.log("productInfo length - " + $scope.productInfo.productName);

            $scope.$watch($rootScope.productInfo, function (newVal) {
                //alert("Changed an input");
            }, true);

            $scope.$watch($rootScope.pricecompare, function (newVal) {
                //alert("Changed an input");
            }, true);

            //  $location.path('/view2');
        }


    }]);


app.controller('mentshirtesCtrl', ['$scope', '$rootScope', '$location', 'UserFactory', 'CameraFactory', '$q',
    function ($scope, $rootScope, $location, UserFactory, CameraFactory, $q) {


        $scope.items = [
            { id: 1, name: 'Books'},
            { id: 2, name: 'Mobile'}
        ];

        var productType = 'mentshirt';

        $scope.menmentshirtes = function (productType) {
            console.log("menmentshirtes");
            $rootScope.mentshirtlist = CameraFactory.home.query({productType: 'mentshirt'});

            console.log("menmentshirtes ############### " + $rootScope.mentshirtlist.length);

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.mentshirtlist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.mentshirtlist, function (newVal) {
                //alert("Changed an input");
                console.log("menmentshirtes ############### " + $rootScope.mentshirtlist.length);
            }, true);

            $location.path('/mentshirtes');
        }

        console.log("productType - " + productType);

        $scope.womenmentshirtes = function () {
            console.log("womenmentshirtes");
            console.log("menmentshirtes");
            $rootScope.mentshirtlist = CameraFactory.home.query({productcategory: 'Women mentshirtes'});
            console.log("menmentshirtes ############### " + $rootScope.mentshirtlist.length);
            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.mentshirtlist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.mentshirtlist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/mentshirtes');
        }


        $scope.mentshirtesdivisions = CameraFactory.productbrands.query({productType: productType});

        $scope.mentshirttradeshow = { };
        $scope.mentshirttradeshow.mentshirtDivisions = [];

        // selected divisions
        //$scope.selection = [];

        // helper method
        $scope.selectedDivisionsmentshirt = function selectedDivisionsmentshirt() {
            return filterFilter($scope.mentshirttradeshow.mentshirtDivisions, { selected: true });
        };


        $scope.colordivisionsmentshirt = [
            {
                color: "White"
            },
            {
                color: "Yellow"
            },
            {
                color: "Pink"
            },
            {
                color: "Black"
            },
            {
                color: "Grey"
            }
        ];


        $scope.typeahead = ["ADCOM A-430I PS Black", "ADCOM Smartphone A-350i Black", "ADCOM Smartphone A-350i White", "ADCOM Smartphone A-500 Black", "ADCOM Smartphone A-500 White", "ADCOM Thunder A-350 Black", "ADCOM Thunder A-350 White", "ADCOM Thunder A-400 Black", "ADCOM Thunder A-400 White", "ADCOM Thunder A-400i Black", "ADCOM Thunder A-400i White", "ADCOM Thunder A-430 White", "ADCOM X8 Black", "ADCOM X8 White", "ADCOM X9 Black", "ADCOM X9 Red", "Adcom X10 Black", "Adcom X10 White", "Adcom X11 Black", "Adcom X12 Black", "Adcom X14 Black", "Adcom X14 Grey", "Adcom X28 Silver", "Alcatel 890D Silver", "Alcatel One Touch J636d+ Black", "Alcatel Onetouch Idol Mini 6012D", "Alcatel Onetouch Idol X+ Bluish Black, with 16 GB", "Alcatel Onetouch Idol X+ White, with 16 GB", "Apple iPhone 4 Black, with 16 GB", "Apple iPhone 4 Black, with 8 GB", "Apple iPhone 4 White, with 16 GB", "Apple iPhone 4 White, with 8 GB", "Apple iPhone 4S Black, with 8 GB", "Apple iPhone 4S White, with 8 GB", "Apple iPhone 5C 8 GB Blue, with 8 GB", "Apple iPhone 5C 8 GB Green, with 8 GB", "Apple iPhone 5C 8 GB Pink, with 8 GB", "Apple iPhone 5C 8 GB White, with 8 GB", "Apple iPhone 5C 8 GB Yellow, with 8 GB", "Apple iPhone 5C Blue, with 16 GB", "Apple iPhone 5C Blue, with 32 GB", "Apple iPhone 5C Green, with 16 GB", "Apple iPhone 5C Green, with 32GB", "Apple iPhone 5C Pink, with 16 GB", "Apple iPhone 5C Pink, with 32GB", "Apple iPhone 5C White, with 16 GB", "Apple iPhone 5C White, with 32GB", "Apple iPhone 5C Yellow, with 16 GB", "Apple iPhone 5C Yellow, with 32GB", "Apple iPhone 5S Gold, with 16 GB", "Apple iPhone 5S Gold, with 32 GB", "Apple iPhone 5S Gold, with 64 GB", "Apple iPhone 5S Silver, with 16 GB", "Apple iPhone 5S Silver, with 32 GB", "Apple iPhone 5S Silver, with 64 GB", "Apple iPhone 5S Space Grey, with 16 GB", "Apple iPhone 5S Space Grey, with 32 GB", "Apple iPhone 5S Space Grey, with 64 GB", "Arise Bingo AX111 Black", "Arise Imperia AX282 Black", "Arise Magnet AX251 Black", "Asus Zenfone 4 A400CG Black, with 8 GB", "Asus Zenfone 4 A400CG Blue, with 8 GB", "Asus Zenfone 4 A400CG Red, with 8 GB", "Asus Zenfone 4 A400CG White, with 8 GB", "Asus Zenfone 4 A400CG Yellow, with 8 GB", "Asus Zenfone 4 A450CG Black, with 8 GB", "Asus Zenfone 4 A450CG Solar Yellow, with 8 GB", "Asus Zenfone 4 A450CG White, with 8 GB", "Asus Zenfone 6 A600CG / A601CG Black, with 16 GB", "Asus Zenfone 6 A600CG / A601CG Red, with 16 GB", "Atom Supremus White", "Atom Ultimus White", "BLU B10 BLK Black", "BLU B10 JUMBO R Black", "BLU B10 JUMBO Y Black", "BLU B10 R Black", "BLU B10 Y Black", "BLU B10+ B Blue", "BLU B10+ O Orange", "BLU B10+ R Red", "BLU B10+ Y Yellow", "BLU B23 B Black", "BLU B23 G Black", "BLU B23 R Black", "BLU B23 Y Black", "BLU B306A BLK Black", "BLU B306A W White", "BLU B307 BLK Black", "BLU B307 W White", "BLU B309A W White", "BLU B41 BLK Grey", "BLU B41 Gry Black", "BQ K12 Grey", "BQ K15 Grey", "BQ K18 Blue", "BQ K26 Green", "BQ K27 Gold", "BQ K28 White", "BQ K29 Black", "BQ K50 Grey", "BQ K80 Blue", "BQ S35 Red", "BQ S36 Black", "BQ S37 Black", "BQ S37 White", "BQ S60 Black", "BSNL-Champion Champion Apna Phone SQ241 Power Black", "BSNL-Champion Champion My Phone 51 Black", "BSNL-Champion Champion My Phone 51 White", "BSNL-Champion DM6513 White", "BSNL-Champion Myphone 41 Black", "BSNL-Champion Pro SQ181 Black", "BSNL-Champion SM3513 Black", "BSNL-Champion SQ 181 power Black", "BSNL-Champion SQ 181 power White", "BSNL-Champion SQ 241 Sleek Black", "BSNL-Champion SQ 241 Sleek White", "BSNL-Champion SQ241 SQ241 Black", "BSNL-Champion SQ281 SQ281 Black", "Belkin Skype V1000 Black", "BlackBerry 9720 Black", "BlackBerry 9720 White", "BlackBerry Bold 9790 Pink", "BlackBerry Curve 3G 9300 Pink", "BlackBerry Curve 9220 Black", "BlackBerry Q10 Black", "BlackBerry Q10 White", "BlackBerry Torch 9810 White", "BlackBerry Torch 9810 Zinc Grey", "BlackBerry Torch 9860 Shadow Grey", "BlackBerry Z10 Charcoal Black", "BlackBerry Z10 Pure White", "BlackBerry Z3 Black, with 8 GB", "BlackBerry Z30 Black", "BlackBerry Z30 White", "Blackberry Curve 9320 Black", "Byond B50 Black", "Celkon A10 3G Campus Series Black", "Celkon A107+ Smart Phone White", "Celkon A112 Signature Swift Black", "Celkon A112 White", "Celkon A119Q A 119 Q Smart Phone Black", "Celkon C349* Black", "Celkon C5 Star White", "Celkon C56 Black", "Celkon C6* Black \u0026 Red", "Celkon C605 Black", "Celkon C7045 Black", "Celkon Campus A20 White", "Celkon Campus A225 White", "Celkon Campus A35K Blue", "Celkon Campus A40 Yellow", "Celkon Campus A42 Black", "Celkon Campus A43 Black", "Celkon Campus A66 Black", "Celkon Campus A66 White", "Celkon Campus A9Dual White \u0026 Black", "Celkon Campus Mini A350 White", "Celkon Campus Series A20 Smart Phone Black", "Celkon Celkon Campus Series A 63 Smart Phone Campus Series A63 Black", "Celkon Feature Phone C297 Black", "Celkon Feature Phone C297 White", "Celkon Feature Phone C9 Jumbo White", "Celkon Millennium Q44 Black", "Celkon Millennium Q455 Black", "Celkon Millennium Q455 Blue", "Celkon Millennium Q455 White", "Celkon Millennium Q470 White", "Celkon Signature 118 HD Black", "Celkon Signature A115 White", "Celkon Signature Two A500 Black", "DOMO nTice G12 Phablet Mobile Smartphone White", "Datawind PocketSurfer3G5", "Datawind PocketSurfer5 White", "Datawind PocketSurfer5X Black", "Dell Venue V03B Black", "Devante Boss 1 Black", "Devante Boss 1 White", "Devante Boss 2 Black", "Devante Boss 2 Blue", "Devante Boss 2 White", "Devante Dynamite White", "Devante Hero 1 Subway Series S1 Black", "Devante Hero 1 Subway Series S1 White", "Devante Thunder Black", "Digimac 3X Black", "Digimac 3X White", "Digimac EXI Black", "Digimac EXI White", "Digimac Fusion Black", "Digimac Fusion White", "Digimac VIVO Black", "Digimac VIVO White", "Forme C101 Black", "Forme Coke A1 Red", "Forme D516 Black", "Forme D516 Black \u0026 Red", "Forme D516 Champagne", "Forme D555+ Grey", "Forme D555+ Red", "Forme D556 Black \u0026 Red", "Forme D815 Black", "Forme D815 Red", "Forme Discovery P9 Black", "Forme Discovery P9 Blue", "Forme Discovery P9 plus Black", "Forme Discovery P9 plus Blue", "Forme Energy D9 Black", "Forme F10 Black \u0026 Red", "Forme F8+ Silver", "Forme Fantasy F10 Black", "Forme Fantasy F10 Red", "Forme Find F105 Red", "Forme Forever F8 Red", "Forme Forever F8 Silver", "Forme Hero Blue", "Forme Honey Hero Black", "Forme Hope H1 Black", "Forme Hope H1 Blue \u0026 Black", "Forme Inspire V8 Black", "Forme Inspire V8 Brown", "Forme Inspire V8 Silver", "Forme K1 Black \u0026 Red", "Forme King K1 Red", "Forme L100 White \u0026 Silver", "Forme L600 Red", "Forme L900 Red", "Forme L900 White", "Forme L900 White \u0026 Red", "Forme Love One Black", "Forme Love One Brown", "Forme Love One Red", "Forme M20 White", "Forme M60 Pink", "Forme M600 Red", "Forme M600 White", "Forme M660 Red", "Forme M660 White", "Forme M80 Red", "Forme M90 Black", "Forme Mini 5130 Black", "Forme Onion K806 Black", "Forme Onion K806 White", "Forme P9 Plus Black", "Forme Power One A60 Black", "Forme Power Two M22 Grey", "Forme Power Two M22 Red", "Forme Queen K08-grey Grey", "Forme Queen K08-red Red", "Forme Queen K08-white White", "Forme S10 Silver \u0026 Green", "Forme Summer S700 Pink", "Forme Summer S700 Purple", "Forme Summer S700 Red", "Forme Summer S700 White", "Forme Sunny S60 Black", "Forme Sunny S60 Blue", "Forme Sunny S60 Orange", "Forme Surprise P10 Black", "Forme Surprise S10 Green", "Forme Surprise S10 Red", "Forme Surprise S11 Black", "Forme Surprise S11 Red", "Forme T4 Silver", "Forme Teddy T2 Green", "Forme Teddy T2 White", "Forme Teddy T3 Black", "Forme Teddy T3 Red", "Forme Teddy T4 Green", "Forme Teddy T4 Silver", "Forme V8 White", "Forme Venus V11 Black", "Forme Venus V11 Red", "Forme W3 Gold", "Forme Winner W3 Blue \u0026 Silver", "Forme Winner W3 Gold", "Forme Winner W3 Grey", "Funtab Phablet Fone PHA6.4 White", "Gee Pee 3dh 4430 Black", "Gionee CTRL V5 White", "Gionee E7 Mini", "Gionee Elife E3 Black", "Gionee Elife E6 Black", "Gionee Elife E7 16 GB Black, with 16 GB", "Gionee Elife E7 16 GB White, with 16 GB", "Gionee Elife E7 32 GB Black, with 32 GB", "Gionee Elife E7 32 GB White, with 32 GB", "Gionee Elife S5.5 Black", "Gionee Elife S5.5 White", "Gionee G1 Black", "Gionee Gpad G3 White", "Gionee Gpad G4 Black", "Gionee Gpad G4 White", "Gionee Long L700 Black", "Gionee Long L700 Silver", "Gionee M2 Black", "Gionee M2 White", "Gionee P2 Black", "Gionee P2S Black", "Gionee P2S White", "Gionee Pioneer P3 Black", "Gionee Pioneer P3 White", "Gionee Pioneer P4 Black", "Gionee Pioneer P4 White", "Gionee Slim S80 Black", "Gionee Slim S80 Grey", "Gionee V5 Black", "Google Nexus 4 Black", "Google Nexus 4 White, with Headphone", "Google Nexus 5 Black, with 16 GB", "Google Nexus 5 Black, with 32 GB", "Google Nexus 5 White, with 16 GB", "Google Nexus 5 White, with 32 GB", "HP Slate 6 Voice Tab", "HTC 709D Desire 700 White", "HTC A620E 8S Fiesta Red", "HTC Desire 210 Dual SIM D210h Black", "HTC Desire 210 Dual SIM D210h White", "HTC Desire 310 Dual SIM Arctic White", "HTC Desire 310 Dual SIM Matte Blue", "HTC Desire 310 Flipcovers Blue", "HTC Desire 500 Glacier Blue", "HTC Desire 500 Glossy Black", "HTC Desire 500 Passion Red", "HTC Desire 516 Dark Grey", "HTC Desire 516 Grey", "HTC Desire 516 Pearl White", "HTC Desire 516 White", "HTC Desire 600 Stealth Black", "HTC Desire 600 White", "HTC Desire 600C Black, with Dual SIM", "HTC Desire 600C White, with Dual SIM", "HTC Desire 601 Black, with Dual SIM", "HTC Desire 616 Dual Sim Dark Gray", "HTC Desire 616 Dual Sim White", "HTC Desire 700 Black", "HTC Desire 816 Dark Grey", "HTC Desire 816 White", "HTC Desire SV Stealth Black", "HTC Desire SV Yellow", "HTC Desire T329D XC Black Stone", "HTC Desire T329D XC Fabulous White", "HTC Desire T329W X Dual SIM White, with Dual SIM", "HTC E8 Dual SIM White", "HTC ONE E8 M8Sd Red", "HTC One 802d Black, with Dual SIM", "HTC One 802d Silver, with Dual SIM", "HTC One E8", "HTC One M8 Amber Gold", "HTC One M8 Glacial Silver", "HTC One M8 Gunmetal Grey", "HTC One Max Silver White", "HTC One Mini Black", "HTC One Mini Blue", "HTC One V T320 Jupitor Rock", "HTC T327W Desire U DS White", "Haier C380 Black", "Haier C380 White", "Hitech Air A1 White", "Hitech Amaze S-800 Black", "Hitech Amaze S410 White", "Hitech F2i Blue", "Hitech G11 Black", "Hitech G15 Black", "Hitech G5 Black", "Hitech H2i Red", "Hitech HT-850 Black", "Hitech HT820 Black", "Hitech HT830 Grey", "Hitech HT880 Black", "Hitech Kick 515 Black", "Hitech Micra - 110 Black", "Hitech Micra 115 Black", "Hitech Micra 120 Black", "Hitech Micra 150 Black", "Hitech Pride 302 Black \u0026 Silver", "Hitech Pride 313 Black", "Hitech Pride 325 Black", "Hitech Rocket G3i Black", "Hitech S210 Amaze Black", "Hitech S230 Amaze Black", "Hitech S3003G White", "Hitech Super X-9 Black", "Hitech Supreme F3 Black", "Hitech Tiny X-100 Black", "Hitech X-101 Black", "Hitech X10 Grey", "Hitech Xpaly 250 Black", "Hitech Xpaly G3i+ Black", "Hitech Xplay 245 Black", "Hitech Youth HT-810i Black", "Hitech kick 525 Black", "Hotpary Elegant H2 White", "Huawei Ascend G6 Black", "Huawei Ascend G610 Black", "Huawei Ascend G610 White", "Huawei Ascend G700 White", "Huawei Ascend P6 White", "Huawei Ascend Y200 Black", "Huawei Ascend Y210D Black", "Huawei Ascend Y220 Black", "Huawei Ascend Y600", "Huawei G730 Black", "Huawei G730 White", "Huawei Honor 3C White", "Huawei Honor 3X White", "Huawei Y320 Black", "Huawei Y511 Black", "Huawei Y600 Black \u0026 Blue", "ICE D3 Xphone Limited Edition Pearl White", "ICE Xphone Xphone Pearl White", "Icon G8 Dual SIM Qwerty Mobile Black", "Icon G9 Dual SIM Qwerty Mobile Black", "Intex AQUA Marvel + Aqua Marvel + Grey", "Intex AQUA Marvel + Aqua Marvel + White", "Intex Alpha Black", "Intex Alpha Mobile Black \u0026 Red", "Intex Aqua 3 G Black", "Intex Aqua 3G Black", "Intex Aqua 3G White", "Intex Aqua Curve Black", "Intex Aqua Curve Red", "Intex Aqua HD Aqua HD White", "Intex Aqua I 5 HD Black", "Intex Aqua I15 White", "Intex Aqua I5 HD Black", "Intex Aqua I5 HD White", "Intex Aqua N-2 Black", "Intex Aqua N15 Black", "Intex Aqua N15 Blue", "Intex Aqua N15 White", "Intex Aqua N17 Black", "Intex Aqua N2 White", "Intex Aqua N4 Black", "Intex Aqua N8 White", "Intex Aqua Octa Black", "Intex Aqua Octa White", "Intex Aqua Qwerty Blue", "Intex Aqua Qwerty White", "Intex Aqua Style Black", "Intex Aqua Style Black \u0026 Silver", "Intex Aqua Style Pro Black", "Intex Aqua Style Pro Grey", "Intex Aqua Style White \u0026 Silver", "Intex Aqua Swadesh White Black", "Intex Aqua T3 Black \u0026 Blue", "Intex Aqua T3 Grey", "Intex Aqua T3 White \u0026 Silver", "Intex Aqua T4 Black", "Intex Aqua T4 Blue", "Intex Aqua Trendy White", "Intex Aqua Y 2 Black", "Intex Aqua Y2 White", "Intex Aqua i 5 mini White", "Intex Aqua i14 Blue", "Intex Aqua i15 Black", "Intex Aqua i15 Blue", "Intex Aqua i3 Black", "Intex Aqua i3 Blue", "Intex Aqua i5 Black", "Intex Aqua i5 Mini Black", "Intex Aura NX Black", "Intex Bravo 2.6 Grey", "Intex Cloud X11 White", "Intex Cloud X12 Black", "Intex Cloud X2 Cloud X2 White", "Intex Cloud X3 Plus Black", "Intex Cloud X3 Plus White", "Intex Cloud X5 Black", "Intex Cloud X5 White", "Intex Cloud Y1 Black", "Intex Cloud Y1 White", "Intex Cloud Y12 White", "Intex Cloud Y13 White", "Intex Cloud Y17 White", "Intex Cloud Y4 Black", "Intex Cloud Y7 Black", "Intex Cloud Y7 White", "Intex Cloud Z5 Black", "Intex Focus V Silver", "Intex Focus-v Grey", "Intex Force Black \u0026 Grey", "Intex Force Black \u0026 Red", "Intex Force White \u0026 Grey", "Intex GC5050 Blue", "Intex GC5050 Red", "Intex GC5050 Silver", "Intex Gsm Hero Silver", "Intex Hero Black", "Intex IN 2010 NANO2", "Intex Jazz Grey", "Intex Jszz Black", "Intex Kobra Silver", "Intex Kobra White", "Intex Mega 10 Black", "Intex Nano 2 Black \u0026 Red", "Intex Nano 2 Blue", "Intex Nano 2S Black", "Intex Nano Star Black", "Intex Nano Star Black \u0026 Red", "Intex Neo-Vi Black \u0026 Red", "Intex Neo-vi Plus Red", "Intex Nova Black", "Intex Nova Silver", "Intex Nova White", "Intex Plasma Black", "Intex Plasma White", "Intex Platinum 201 Black", "Intex Platinum 201 Mobile Silver", "Intex Platinum 201 White", "Intex Platinum A6 Black \u0026 Silver", "Intex Platinum A6 White", "Intex Platinum Matrix Black", "Intex Platinum Matrix White", "Intex Pride Black", "Intex Rock Star Black \u0026 Grey", "Intex Shine 1800 Black", "Intex Shine 1800 Blue", "Intex Shine 1800 Red", "Intex Slimzz Black", "Intex Slimzz Silver", "Intex Star One Black", "Intex Turbo N Grey", "Intex Yuvi LX Black", "Intex Yuvi Pro Grey", "JIVI Dual Sim/Dual Standby Gsm + Cdma GC 1209 Black and White", "Jivi C3i Black", "Jivi CG1335 Black", "Jivi JV C300 CDMA Mobile Black", "Jivi JV21 Black", "Jivi JV21 White", "Jivi Jv X3i Black", "Jivi Slim X48 Black", "Jivi X390 Black", "Jivi X426 Black", "Jivi X480 Black", "Jivi X660 Black", "Josh A2700 Black", "Josh A2700 Blue", "Josh A2700 White", "Josh A999 White", "Josh Feather Black", "Josh JB 63+ Red", "Josh JB 63+ White", "Josh JB007 Silver", "Josh JB007-S Brown", "Josh JM 2800 Black", "Josh JM 2800 Golden", "Josh JM2400 Black", "Josh JM2400-R Red", "Josh Thunder Grey", "Karbonn A1 Plus Super White", "Karbonn A1+ Duple Black", "Karbonn A1+ Duple White", "Karbonn A101 Black", "Karbonn A11+ Black", "Karbonn A119 Black", "Karbonn A119 White", "Karbonn A15 Plus Black", "Karbonn A19 Black Silver", "Karbonn A19 White Silver", "Karbonn A21+ Black", "Karbonn A21+ White", "Karbonn A25 Plus White", "Karbonn A35 Black Silver", "Karbonn A35 White and Silver", "Karbonn A51 Black", "Karbonn A51 White", "Karbonn A6 Black White", "Karbonn A90 Black \u0026 Silver", "Karbonn A90 White Silver", "Karbonn A90S Black", "Karbonn A91 White", "Karbonn A93 Black", "Karbonn A93 White", "Karbonn A99 Black", "Karbonn A99 Star Black \u0026 White", "Karbonn A99 White", "Karbonn A99i Black", "Karbonn A99i White", "Karbonn Flair K102+ Gold White", "Karbonn Jumbo K9 Black \u0026 Red", "Karbonn K-Phone 1 Black Blue", "Karbonn K-Phone 1 Black Brown", "Karbonn K-Phone 1 White Silver", "Karbonn K101* Black \u0026 Red", "Karbonn K105s Black \u0026 Red", "Karbonn K112 Black", "Karbonn K39 Black \u0026 Grey", "Karbonn K39 Black \u0026 Red", "Karbonn K52 Groovster Black \u0026 Silver", "Karbonn K57 Black", "Karbonn K57 Silver", "Karbonn K62+ White", "Karbonn K63+ Black", "Karbonn K63+ Silver", "Karbonn K9 Plus Black", "Karbonn K9 Plus White Silver", "Karbonn KC540 White", "Karbonn KT 52 Black", "Karbonn KT 52 White", "Karbonn Karbonn The Legend Phone Beauty At Its Best Black Black", "Karbonn Kochadaiiyaan The Legend 2.4 Black \u0026 Red", "Karbonn Kochadaiiyaan The Legend A36 Black \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A36 White \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A6 Plus Black \u0026 White", "Karbonn Kochadaiiyaan The Legend S5i White", "Karbonn Opium N7 Black", "Karbonn Opium N9 Black", "Karbonn Opium N9 White", "Karbonn SPY K595 Black", "Karbonn SPY K595 Grey", "Karbonn Smart A1* Black", "Karbonn Smart A10 Black", "Karbonn Smart A10 White", "Karbonn Smart A11 Star Black", "Karbonn Smart A11 Star White", "Karbonn Smart A111 White", "Karbonn Smart A12 Star Black \u0026 Silver", "Karbonn Smart A12 Star White \u0026 Gold", "Karbonn Smart A26 Metallic Black", "Karbonn Smart A26 White Silver", "Karbonn Smart A29 Black", "Karbonn Smart A29 White", "Karbonn Smart A4+ Black", "Karbonn Smart A4+ White", "Karbonn Smart A5* Black", "Karbonn Smart A50s Black", "Karbonn Smart A50s White", "Karbonn Smart A51 Lite White", "Karbonn Smart A51+ Black", "Karbonn Smart A51+ White", "Karbonn Smart A52 Black Silver", "Karbonn Smart A52 Plus Black \u0026 Gold", "Karbonn Smart A52 Plus White \u0026 Silver", "Karbonn Smart A52 White Silver", "Karbonn Smart A5i Black", "Karbonn Smart A5i White", "Karbonn Smart A92 Black Silver", "Karbonn Smart A92 White Silver", "Karbonn Sound Wave K451+ Black", "Karbonn Sound Wave K451+ Champ Gold", "Karbonn Sound Wave K451+ Silver", "Karbonn The Star K61 Black", "Karbonn Titanium Hexa", "Karbonn Titanium K900 Black", "Karbonn Titanium Octane Black", "Karbonn Titanium Octane Red", "Karbonn Titanium Octane White", "Karbonn Titanium S1 Plus Black", "Karbonn Titanium S1 Plus Orange", "Karbonn Titanium S1 Plus White", "Karbonn Titanium S19 White", "Karbonn Titanium S2 Plus Black", "Karbonn Titanium S3 Black", "Karbonn Titanium S3 White", "Karbonn Titanium S4 Black", "Karbonn Titanium S4 White", "Karbonn Titanium S5 Plus Deep Blue", "Karbonn Titanium S5 Plus Pearl White", "Karbonn Titanium S5i Dark Blue", "Karbonn Titanium S7 Black", "Karbonn Titanium S9 Lite Black", "Karbonn Titanium S9 Lite White", "Karbonn Titanium S9 Pearl White", "Karbonn Titanium S99 Black", "Karbonn Titanium S99 White", "Karbonn Titanium X White", "Kingbell Basic M24 Black", "Kingbell Basic M3 Pink", "LG A390 Silver", "LG Cookie Smart T 375 Black", "LG Cookie Snap GM360i with 2 GB Memory Card", "LG D686 Gold", "LG E420 Black", "LG E612 Black", "LG G Pro 2 D838 Titan", "LG G Pro 2 D838 White", "LG G Pro E988 Black", "LG G Pro Lite D686 Black", "LG G Pro Lite D686 Black Gold", "LG G Pro Lite D686 White", "LG G-Flex Titan Silver", "LG G2 32 GB Black, with 32 GB", "LG G2 32 GB Gold", "LG G2 32 GB White, with 32 GB", "LG G2 Black", "LG G2 Black Gold, with 16gb", "LG G2 D802T Black", "LG G2 D802T Gold", "LG G2 D802T White", "LG G2 White", "LG G3 D855 Black Gold, with 32 GB", "LG G3 D855 Gold", "LG G3 D855 Titan Titan", "LG G3 D855 Titan Titan, with 32 GB", "LG G3 D855 White", "LG L4 II Dual E445 Black", "LG L4 II Dual E445 White", "LG L60 Dual White", "LG L60 X-147 Black", "LG L70 Black", "LG L70 Dual", "LG L70 White", "LG L80 Black", "LG L80 Dual Black", "LG L80 Dual White", "LG L80 White", "LG L90 Black", "LG L90 Dual", "LG L90 White", "LG Optimus 3D Max P725 Black", "LG Optimus 4X HD P880 White", "LG Optimus Black P970 Black Titan", "LG Optimus G E975 Blue", "LG Optimus GT540", "LG Optimus Hub E510 Black", "LG Optimus L3 Dual E405 Black", "LG Optimus L3 Dual E405 White", "LG Optimus L3 II E425 Black", "LG Optimus L3 II E425 White", "LG Optimus L3 II E435 Black", "LG Optimus L3 II E435 White", "LG Optimus L5 Dual E615 Black", "LG Optimus L5 Dual E615 White", "LG Optimus L5 II Dual E455 Black", "LG Optimus L5 II Dual E455 White", "LG Optimus L5 II E450 Black", "LG Optimus L5 II E450 White", "LG Optimus L7 II P715 Black", "LG Optimus L7 II P715 White", "LG Optimus L7 P705 Black", "LG Optimus L9 P765 Black", "LG Optimus Net Dual Sim P698 Titanium", "LG Optimus Pro C660 Black", "LG Optimus Sol E730 Black", "LG Optimus VU P895 Black", "LG Optimus VU P895 White", "LG P520 Black, with 2 GB Micro SD Card", "LG T500 Black", "LG T515 Wine Red", "LG T585 Black", "LG T585 White", "Lava ARC 11i Black", "Lava ARC Lite Black \u0026 Red", "Lava Arc 111 Black \u0026 Yellow", "Lava Arc 111 Grey \u0026 Green", "Lava Arc 12i Black", "Lava Arc 12i Grey", "Lava Arc 1star Black \u0026 Red", "Lava Arc 22 Black", "Lava Arc 22 Yellow", "Lava C11 Grey", "Lava CG141 Black", "Lava Discover 128 Star White", "Lava Discover 135 White", "Lava Discover 136S Champagne", "Lava Discover Neo Black", "Lava Discover Neo Grey", "Lava Iris 300 Style Dark Blue", "Lava Iris 310 Style Brown", "Lava Iris 349i Black", "Lava Iris 350M Grey", "Lava Iris 354 White", "Lava Iris 354e White", "Lava Iris 360 Music Black", "Lava Iris 3G 412 Grey", "Lava Iris 402 Grey", "Lava Iris 402 White", "Lava Iris 402+ Ivory White", "Lava Iris 402e Grey", "Lava Iris 404e Black", "Lava Iris 405+ Black", "Lava Iris 405+ White", "Lava Iris 406Q Black", "Lava Iris 406Q White", "Lava Iris 408e Frosted Silver", "Lava Iris 415 Black", "Lava Iris 450 Color Plus Black \u0026 Blue", "Lava Iris 450 Color Plus White \u0026 Blue", "Lava Iris 450 White \u0026 Blue", "Lava Iris 456 Black", "Lava Iris 458q Grey", "Lava Iris 504Q+ Gray", "Lava Iris 504Q+ White", "Lava Iris 550Q Black", "Lava Iris Pro 20 Metal Blue", "Lava Iris Pro 30 Grey", "Lava Iris X1 with 4 GB ROM Black", "Lava Iris X1 with 4 GB ROM White", "Lava Iris X1 with 8 GB ROM Black, with 8 GB ROM", "Lava Iris X1 with 8 GB ROM White, with 8 GB ROM", "Lava KKT 27i Blue", "Lava KKT 27i Grey", "Lava KKT 27i Silver", "Lava KKT 27s Grey", "Lava KKT 34i Black \u0026 Silver", "Lava KKT 34star Black \u0026 Red", "Lava KKT 40 Mini Blue", "Lava KKT 42 Black", "Lava KKT Uno Grey", "Lava Magnum X604 White", "Lava Spark 10 Black \u0026 Red", "Lava Spark 245e Black \u0026 Grey", "Lemon B149 Black", "Lemon B159 Multimedia Big Battery Black", "Lemon B169 Multimedia Big Battery Grey", "Lemon B229 Multimedia Big Battery Black", "Lemon B319I Multimedia Big Battery Black", "Lemon B579 Multimedia Big Battery with Box Speaker Black", "Lenovo A269i Black", "Lenovo A369i Black", "Lenovo A390 Black", "Lenovo A390 White", "Lenovo A516 Grey", "Lenovo A516 White", "Lenovo A526 Aurora Blue", "Lenovo A680 Black", "Lenovo A680 White", "Lenovo A800 Black", "Lenovo A850 Black", "Lenovo A850 White", "Lenovo A859 White", "Lenovo IdeaPhone S890 White", "Lenovo Ideaphone A706 Black", "Lenovo Ideaphone A706 White", "Lenovo Ideaphone S920 8 GB White, with 8 GB", "Lenovo K860 Black", "Lenovo K900 Steel Grey", "Lenovo P780 Deep Black", "Lenovo P780 Deep Black, with 8 GB", "Lenovo Reliance CDMA GSM 2 SIM Android SmartPhone A600E Black", "Lenovo S650 Silver", "Lenovo S660 Titanium", "Lenovo S720 White", "Lenovo S820 Red", "Lenovo S820 Red, with 8 GB", "Lenovo S850", "Lenovo S860 Titanium", "Lenovo S880 White", "Lenovo S920 Blue", "Lenovo S920 White", "Lenovo S930 Silver", "Lenovo Vibe X Silver", "Lenovo Vibe Z K910 Silver", "Lenovo Vibe Z K910 Titanium", "MTS Blaze 4", "MTS Blaze 4.5", "MTS Blaze 5.0 White", "MTS Dual CG 131", "MTS Dual CG 141", "MTS Rockstar M131", "MTS Rockstar M141 Red", "Magicon Senior Duo White", "Maxx AX3 Black", "Maxx AX8 Black", "Maxx GenxDroid7 - AX352 Black", "Maxx GenxDroid7 - AX407 Black", "Maxx MSD7 Smarty Black", "Maxx MX426 - Supremo Red", "Maxx Note I AX8 Black", "Maxx Race AX8 Black", "Maxx Race AX9Z White", "Maxx Zippy MT616 Coffee", "Micromax A069 Grey", "Micromax A069 White", "Micromax A069 Yellow", "Micromax A091 C Engage Grey", "Micromax A093 White \u0026 Gold", "Micromax Aisha A52 White", "Micromax Bling 3 A86 White", "Micromax Bolt A068 Blue", "Micromax Bolt A068 White", "Micromax Bolt A075 Blue", "Micromax Bolt A089 Black", "Micromax Bolt A089 White", "Micromax Bolt A24 Champange", "Micromax Bolt A36 Black", "Micromax Bolt A37 Black", "Micromax Bolt A37B Black", "Micromax Bolt A46 Black", "Micromax Bolt A47 Black", "Micromax Bolt A58 Black", "Micromax Bolt A58 Red", "Micromax Bolt A59 Grey", "Micromax Bolt A61 Grey", "Micromax Bolt A62 Black", "Micromax Bolt A62 White", "Micromax Bolt A66 Black", "Micromax Bolt A67 Black", "Micromax Bolt A67 White", "Micromax Bolt A69", "Micromax Bolt A71 Black", "Micromax Bolt A71 White", "Micromax Bolt GC232 Black \u0026 Silver", "Micromax Bolt X101 White", "Micromax Bolt X287 Grey", "Micromax C210 White", "Micromax CDMA C200 Black \u0026 White", "Micromax CG666 Black \u0026 Grey", "Micromax CG666 White", "Micromax Canvas 2 Colors A120 with 4 GB ROM Grey", "Micromax Canvas 2 Colors A120 with 4 GB ROM White", "Micromax Canvas 2 Colors A120 with 8 GB ROM Grey", "Micromax Canvas 2.2 A114 Black", "Micromax Canvas 2.2 A114 White", "Micromax Canvas 4 A210 Grey", "Micromax Canvas Blaze HD EG116 Black", "Micromax Canvas Blaze MT500", "Micromax Canvas Doodle 2 A240 Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM White", "Micromax Canvas Doodle 3 A102 with 512 MB RAM Blue", "Micromax Canvas Doodle 3 A102 with 512 MB RAM White", "Micromax Canvas Doodle A111 White", "Micromax Canvas Duet AE90 Black", "Micromax Canvas Ego A113 Grey", "Micromax Canvas Elanza 2 A121 Black", "Micromax Canvas Elanza A93 Black Silver", "Micromax Canvas Elanza A93 Blue \u0026 Grey", "Micromax Canvas Elanza A93 Coffee", "Micromax Canvas Entice A105 Grey", "Micromax Canvas Fire A093 Black \u0026 Gold", "Micromax Canvas Fire A104 Black Gold", "Micromax Canvas Fun A63 Blue", "Micromax Canvas Fun A63 Yellow", "Micromax Canvas Fun A76 Black", "Micromax Canvas Gold A300 Black Gold", "Micromax Canvas Gold A300 White Gold", "Micromax Canvas HD Plus A190 Black", "Micromax Canvas Juice A177 Black", "Micromax Canvas Juice A77 White", "Micromax Canvas Knight A350 Black", "Micromax Canvas Knight A350 Black \u0026 Gold", "Micromax Canvas Knight A350 White \u0026 Gold", "Micromax Canvas Knight Cameo A290 White \u0026 Gold", "Micromax Canvas L A108 Blue", "Micromax Canvas Magnus A117 Blue", "Micromax Canvas Music A88 Black", "Micromax Canvas Music A88 White", "Micromax Canvas Power A96 Black", "Micromax Canvas Turbo A250 White", "Micromax Canvas Turbo Mini A200 Black", "Micromax Canvas Turbo Mini A200 White", "Micromax Canvas Win W121", "Micromax Canvas XL A119 White", "Micromax Canvas XL2 A109 White", "Micromax EG111 Black", "Micromax Fire 2 A104 White", "Micromax GC222 Black", "Micromax GC222 White", "Micromax GC666 Black \u0026 Grey", "Micromax Knight Cameo A290 White", "Micromax MAd A94 Grey", "Micromax Ninja A91 Black", "Micromax Rockstar C192 Black", "Micromax Smarty 3.0 A30 Black", "Micromax Smarty 4.3 A65 White", "Micromax Unite 2 A106 with 4 GB ROM Green", "Micromax Unite 2 A106 with 4 GB ROM Grey", "Micromax Unite 2 A106 with 4 GB ROM Red", "Micromax Unite 2 A106 with 4 GB ROM White", "Micromax Unite 2 A106 with 8 GB ROM Grey, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM Red, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM White, with 8 GB ROM", "Micromax Unite A092 Black", "Micromax Unite A092 Grey", "Micromax Unite A092 Red", "Micromax Unite A092 White", "Micromax Unite A092 Yellow", "Micromax X084 Black \u0026 Red", "Micromax X084 White Silver", "Micromax X085 Black \u0026 Red", "Micromax X086 White", "Micromax X088 Black \u0026 Red", "Micromax X088 Black \u0026 Silver", "Micromax X089 Black", "Micromax X096 Black", "Micromax X096 White", "Micromax X097 Black", "Micromax X098 Grey", "Micromax X098 Red", "Micromax X101i White", "Micromax X101i Yellow", "Micromax X103i White", "Micromax X103i Yellow", "Micromax X247 Black", "Micromax X249 Black", "Micromax X251 Grey", "Micromax X253 Black", "Micromax X254 Grey", "Micromax X258 Black", "Micromax X267 Black", "Micromax X267 White", "Micromax X279i Grey", "Micromax X281 Grey", "Micromax X282 Grey", "Micromax X325 Grey", "Micromax X328 Grey", "Micromax X329 Black", "Micromax X337 Grey", "Micromax X351 Black Silver", "Micromax X367 Grey", "Micromax X44 Pearl White", "Micromax X455i White", "Micromax X55 Coffee", "Moto E Black", "Moto E White", "Moto X 16 GB Bamboo", "Moto X 16 GB Black", "Moto X 16 GB Red", "Moto X 16 GB Teak", "Moto X 16 GB Walnut", "Moto X 16 GB White", "Mtech A6 Infinity Black", "Mtech A6 Infinity White", "Mtech Fusion Black", "Mtech Fusion Blue", "Mtech G 14 Black", "Mtech G22 Black", "Mtech G22 White", "Mtech G4 Black", "Mtech Jazz Black", "Mtech Jazz White", "Mtech L6 Black", "Mtech L6 Blue", "Mtech L6 Brown", "Mtech Lotus Black", "Mtech Opal 3G Black \u0026 White", "Mtech Pride Blue", "Mtech Pride Red", "Mtech Rock Black", "Mtech Sharp Black", "Mtech Sharp Cyan", "Mtech Sharp Golden", "Mtech Spark Black", "Mtech Spark Black \u0026 White", "Mtech Spark Blue", "Mtech Touch Opal PRO Grey", "Mtech Touch Opal PRO White", "Mtech V22 Black", "Mtech V22 White", "Nokia 105 Black", "Nokia 105 Cyan", "Nokia 106 Black", "Nokia 106 Red", "Nokia 106 White", "Nokia 107 Black", "Nokia 107 Red", "Nokia 107 White", "Nokia 108 Black", "Nokia 108 Cyan", "Nokia 108 Red", "Nokia 108 White", "Nokia 108 Yellow", "Nokia 112 Red", "Nokia 112 White", "Nokia 114 Black", "Nokia 114 Cyan", "Nokia 206 Black, with Dual SIM", "Nokia 206 Cyan, with Dual SIM", "Nokia 206 White, with Dual SIM", "Nokia 208DS Black, with Dual SIM", "Nokia 208DS Red, with Dual SIM", "Nokia 220 Black", "Nokia 220 Red", "Nokia 220 White", "Nokia 220 Yellow", "Nokia 225 Black", "Nokia 225 Bright Red", "Nokia 225 Bright Yellow", "Nokia 225 White", "Nokia 301 Black", "Nokia 301 White", "Nokia 515 Black", "Nokia 515 White", "Nokia Asha 210 Black", "Nokia Asha 210 Cyan", "Nokia Asha 210 Yellow", "Nokia Asha 230 Black", "Nokia Asha 230 Bright Red", "Nokia Asha 230 White", "Nokia Asha 305 Dark Grey", "Nokia Asha 305 Mid Blue", "Nokia Asha 305 Silver White", "Nokia Asha 308 Golden Light", "Nokia Asha 310 White", "Nokia Asha 311 Dark Grey", "Nokia Asha 311 Sand White", "Nokia Asha 500 Black", "Nokia Asha 500 Bright Red", "Nokia Asha 500 White", "Nokia Asha 500 Yellow", "Nokia Asha 501 Black", "Nokia Asha 501 Bright Red", "Nokia Asha 501 White", "Nokia Asha 501 Yellow", "Nokia Asha 502 Black", "Nokia Asha 502 Bright Red", "Nokia Asha 502 White", "Nokia Asha 502 Yellow", "Nokia Asha 503 Black", "Nokia Asha 503 Bright Red", "Nokia Asha 503 White", "Nokia Asha 503 Yellow", "Nokia Lumia 1320 Black", "Nokia Lumia 1320 Orange", "Nokia Lumia 1320 White", "Nokia Lumia 1320 Yellow", "Nokia Lumia 1520 Black", "Nokia Lumia 1520 Red", "Nokia Lumia 1520 White", "Nokia Lumia 1520 Yellow", "Nokia Lumia 520 Black", "Nokia Lumia 520 Cyan", "Nokia Lumia 520 Red", "Nokia Lumia 520 White", "Nokia Lumia 520 Yellow", "Nokia Lumia 525 Black", "Nokia Lumia 525 Orange", "Nokia Lumia 525 White", "Nokia Lumia 525 Yellow", "Nokia Lumia 530 Dual SIM Bright Orange", "Nokia Lumia 530 Dual SIM Dark Grey", "Nokia Lumia 530 Dual SIM White", "Nokia Lumia 610 Cyan", "Nokia Lumia 610 White", "Nokia Lumia 620 Black", "Nokia Lumia 620 White", "Nokia Lumia 620 Yellow", "Nokia Lumia 625 Black", "Nokia Lumia 625 Green", "Nokia Lumia 625 Orange", "Nokia Lumia 625 White", "Nokia Lumia 625 Yellow", "Nokia Lumia 630 Dual SIM Black", "Nokia Lumia 630 Dual SIM Bright Green", "Nokia Lumia 630 Dual SIM Bright Orange", "Nokia Lumia 630 Dual SIM Bright Yellow", "Nokia Lumia 630 Dual SIM White", "Nokia Lumia 630 Single SIM Black", "Nokia Lumia 630 Single SIM Bright Green", "Nokia Lumia 630 Single SIM Bright Orange", "Nokia Lumia 630 Single SIM Bright Yellow", "Nokia Lumia 630 Single SIM White", "Nokia Lumia 920 White", "Nokia Lumia 925 Black", "Nokia Lumia 925 Grey", "Nokia Lumia 925 White", "Nokia X Black", "Nokia X Bright Green", "Nokia X Bright Red", "Nokia X Cyan", "Nokia X White", "Nokia X Yellow", "Nokia X+ Black", "Nokia X+ Bright Green", "Nokia X+ Yellow", "Nokia XL Black", "Nokia XL Bright Green", "Nokia XL Bright Orange", "Nokia XL Bright Yellow", "Nokia XL Cyan", "Nokia XL White", "Nuclear SX 5.3i Smartphone Black", "OPPO Find 5 Mini R827 Black", "OPPO Find 5 Mini R827 White", "OPPO Find 7 X9076 Black", "OPPO Find 7 X9076 White", "OPPO Find 7a X9006 Black", "OPPO Find 7a X9006 White", "OPPO Joy R1001 Black", "OPPO Joy R1001 White", "OPPO N1 Mini Lemon", "OPPO N1 Mini Mint", "OPPO N1 Mini White", "OPPO N1 White", "OPPO Neo 3 R831K Grey", "OPPO Neo 3 R831K White", "OPPO R1 829 Black", "OPPO R1 829 White", "OPPO Yoyo R2001 Black", "OPPO Yoyo R2001 White", "Olive V-C2130 Black", "Onida G Series G180 Black", "Onida G Series G181 Black \u0026 Red", "Onida G007S Black", "Onida G182 Black", "Onida G183 Black \u0026 Red", "Onida G183 Multicolor", "Onida G242 Black \u0026 Red", "Onida G640A Grey \u0026 Silver", "Onida i011 Black", "Onida i011 White", "Onida i099 Black", "Onida i666 W4413 White", "Onida i666 White", "Onida i777 W4213 White", "Panasonic Eluga A White", "Panasonic Eluga U Black", "Panasonic Eluga U White", "Panasonic GD 28 Black", "Panasonic GD21 Grey", "Panasonic GD31 Black", "Panasonic GD31 White", "Panasonic P11 with Changeable Back Covers", "Panasonic P31 Midnight Blue", "Panasonic P31 Pure White", "Panasonic P41 Black", "Panasonic P51 Black", "Panasonic P51 White", "Panasonic P61 Black", "Panasonic P61 White", "Panasonic P81 Black", "Panasonic T11 White", "Panasonic T21", "Panasonic T31 Black", "Panasonic T31 White", "Panasonic T41 Black", "Panasonic T41 White", "Rage Ace_Black Red", "Rage Ace_Blue Black", "Rage Ace_Green Black", "Rage Ace_White White", "Rage Duke_Green Green", "Rage Glory_Black Silver", "Rage Hero Black \u0026 Grey", "Rage Hero Black \u0026 Red", "Rage Hero White \u0026 Blue", "Rage Magic-50 Black", "Rage Magic-50 White", "Rage Minni_White White", "Rage OPS 35g Blue", "Rage OPS 60dn White", "Rage OPS 80 White", "Rage OPS 80d Black", "Rage OPS 80d White", "Rage OPS 80q Black", "Rage Ps16 Black \u0026 Silver", "Rage Ps16 White \u0026 Silver", "Rage Ps20 White \u0026 Red", "Rage Silk_Blue Black", "Rage Silk_Golden Black", "Rage Storm_Blue Blue", "Rage Storm_White White", "Rage Ultra Black", "Rage Vega White", "Salora SM204 Red", "Salora SM508 Blue \u0026 Black", "Salora SM601 Black \u0026 Gold", "Samsung E2252 Metallic Silver", "Samsung E2252 Pure White", "Samsung G350 White", "Samsung GT 1200 R/I/M", "Samsung Galaxy Ace NXT-G313H White", "Samsung Galaxy Core 2 SM-G355H Black", "Samsung Galaxy Core 2 SM-G355H White", "Samsung Galaxy Core I8262 Chic White", "Samsung Galaxy Golden I9230 Champagne Gold", "Samsung Galaxy Grand 2 Black", "Samsung Galaxy Grand 2 White", "Samsung Galaxy Grand Duos I9082 Elegant White, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Duos I9082 Metallic Blue, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Neo GT-I9060 Midnight Black", "Samsung Galaxy Grand Neo GT-I9060 White", "Samsung Galaxy Mega 5.8 I9152 White", "Samsung Galaxy Note 2 N7100 Marble White", "Samsung Galaxy Note 2 N7100 Titanium Grey", "Samsung Galaxy Note 3 N9000 Blush Pink", "Samsung Galaxy Note 3 N9000 Classic White", "Samsung Galaxy Note 3 N9000 Jet Black", "Samsung Galaxy Note 3 Neo Black", "Samsung Galaxy Note 3 Neo White", "Samsung Galaxy S Duos 2 S7582 Black", "Samsung Galaxy S Duos 2 S7582 Pure White", "Samsung Galaxy S3 Marble White, with 16GB", "Samsung Galaxy S3 Neo GT-I9300I Blue", "Samsung Galaxy S3 Neo GT-I9300I Marble White", "Samsung Galaxy S4 I9500 Black Mist", "Samsung Galaxy S4 I9500 Deep Black", "Samsung Galaxy S4 I9500 White Frost", "Samsung Galaxy S4 Mini I9192 Black Mist", "Samsung Galaxy S4 Mini I9192 White Frost", "Samsung Galaxy S4 Zoom SM-C1010 White", "Samsung Galaxy S5 Charcoal Black", "Samsung Galaxy S5 Copper Gold", "Samsung Galaxy S5 Electric Blue", "Samsung Galaxy S5 Shimmery White", "Samsung Galaxy Star Pro S7262 Midnight Black", "Samsung Galaxy Star Pro S7262 White", "Samsung Galaxy Star S5282 Ceramic White", "Samsung Galaxy Star S5282 Noble Black", "Samsung Galaxy Star S5282 Silver", "Samsung Galaxy Trend S7392 Ceramic White, with 4 GB", "Samsung Galaxy Trend S7392 Midnight Black", "Samsung Galaxy Y S5360 Pure White", "Samsung Guru 1200 Black", "Samsung Guru 1200 Indigo Blue", "Samsung Guru 1200 White", "Samsung Guru E1207T Black", "Samsung I8552 - Galaxy Grand Quattro Ceramic White", "Samsung I8552 - Galaxy Grand Quattro Titan Gray", "Samsung Keystone 2 E1207Y Black", "Samsung Metro DUOS C3322 Deep Black", "Samsung Omnia M S7530 Deep Gray", "Samsung S6812 - Galaxy Fame Metallic Blue", "Samsung S7262 Wine Red", "Sansui SA40 Black", "Sansui SA50 Plus Grey", "Simmtronics Xpad M1 Black", "Simmtronics Xpad Q1 Black", "Simmtronics Xpad Q4", "Simmtronics Xpad Q4 Black", "Simmtronics Xpad Q5 Black", "Sony Xperia C Black", "Sony Xperia C Purple", "Sony Xperia C White", "Sony Xperia C3 Black", "Sony Xperia C3 White", "Sony Xperia E Black", "Sony Xperia E Dual Champagne", "Sony Xperia E White", "Sony Xperia E1 Black", "Sony Xperia E1 Dual Black", "Sony Xperia E1 Dual Purple", "Sony Xperia E1 Dual White", "Sony Xperia E1 Purple", "Sony Xperia E1 White", "Sony Xperia Go Warm Yellow", "Sony Xperia L Rose Red", "Sony Xperia L Starry Black", "Sony Xperia M Black", "Sony Xperia M Dual Black", "Sony Xperia M Dual Purple", "Sony Xperia M Dual White", "Sony Xperia M Purple", "Sony Xperia M White", "Sony Xperia M2 Dual Black", "Sony Xperia M2 Dual Purple", "Sony Xperia M2 Dual White", "Sony Xperia Miro Black", "Sony Xperia Miro White with Silver Strip", "Sony Xperia Neo L Glossy Black", "Sony Xperia P Black", "Sony Xperia P Red", "Sony Xperia P Silver", "Sony Xperia SP Black", "Sony Xperia SP Red", "Sony Xperia SP White", "Sony Xperia T2 Ultra Black", "Sony Xperia T2 Ultra Purple", "Sony Xperia T2 Ultra White", "Sony Xperia T3 Black", "Sony Xperia T3 Purple", "Sony Xperia T3 White", "Sony Xperia Tipo Classic White", "Sony Xperia Tipo Dual Classic Silver", "Sony Xperia Z Black", "Sony Xperia Z Purple", "Sony Xperia Z Ultra Black", "Sony Xperia Z Ultra Purple", "Sony Xperia Z Ultra White", "Sony Xperia Z White", "Sony Xperia Z1 Black", "Sony Xperia Z1 Compact Black", "Sony Xperia Z1 Compact Lime", "Sony Xperia Z1 Compact Pink", "Sony Xperia Z1 Compact White", "Sony Xperia Z1 Purple", "Sony Xperia Z1 White", "Sony Xperia Z2 Black", "Sony Xperia Z2 Purple", "Sony Xperia Z2 White", "Sony Xperia ZR White", "Spice Boss Champion 2 M-5008 Black", "Spice Boss Chocolate M-5373 Black", "Spice Boss Delite M-5162 White", "Spice Boss Link M-5621 Black", "Spice Boss M-5470 Grey", "Spice Boss Slender 2 M-5404 White", "Spice Boss Slender M-5371", "Spice Boss Trendy 4 M-5004 Black", "Spice Boss Trendy 5 M-5032 White", "Spice Boss Trio M-5025 Black", "Spice Buddy N-300 Midnight Black", "Spice Coolpad 2 Mi-496 White", "Spice Flo Rainbow M-6111", "Spice Flo Sleek M-5915", "Spice M-5415 Black", "Spice Smart Flo Edge Mi-349 White", "Spice Smart Flo Mettle 3.5X Mi-356 White", "Spice Smart Flo Mettle 4X Mi-426 White", "Spice Smart Flo Mettle 5X Mi-504 Black", "Spice Smart Flo Mettle 5X Mi-504 White", "Spice Smart Flo Pace 3 Mi-502n White", "Spice Smart Flo Pace Mi-422 White", "Spice Smart Flo Poise Mi-451", "Spice Stellar 360", "Spice Stellar 361 Black", "Spice Stellar 361 White", "Spice Stellar 445 Black", "Spice Stellar 497 White", "Spice Stellar 506 Titanium Grey", "Spice Stellar 509", "Spice Stellar 520 Red", "Spice Stellar 520 Yellow", "Spice Stellar Glamor Mi-436", "Spice Stellar Glide Mi-438 Silver", "Spice Stellar Horizon Pro Mi-505 White", "Spice Stellar Mettle Icon Mi-506 Silver", "Spice Stellar Nhance 2 Mi-437", "Spice Stellar Pinnacle Pro Mi-535 Brown", "Spice Stellar Virtuoso Pro Mi-491 Black", "Spice Steller Virtuoso Pro+ Mi-492 White", "Swingtel Mini SX3 White", "Swingtel SW27 Black", "Swingtel SW27 White", "Swingtel SW30 Black", "Swingtel SW30 Silver", "Swingtel SW30 White", "Swingtel SW50+ Black", "Swingtel SW50+ Red", "Swingtel Superb White", "Swingtel Tigertab White, Red, Grey", "Swipe Fablet F2 White", "Swipe Konnect 5.0 Black", "Swipe Konnect 5.0 White", "Swipe Sense Black", "Swipe Sonic Black", "mentshirtC Android 2.2 Smartphone Black", "Trio T2020L Black \u0026 Blue", "Trio T2020L Black \u0026 Grey", "Trio T2020L White \u0026 Blue", "Trio T2020XL Black \u0026 Blue", "Trio T2020XL Black \u0026 Gold", "Trio T2020XL Black White", "Trio T2424 Black \u0026 Green", "Trio T2424 Black \u0026 Red", "Trio T2424 White \u0026 Blue", "Trio T2424XL Black \u0026 Blue", "Trio T2424n Black \u0026 Blue", "Trio T2424n Black White", "Trio T2626 Black", "Trio T2626 White \u0026 Blue", "Trio T2626 White \u0026 Yellow", "Trio T2828 Black \u0026 Grey", "Trio T2828 Black White", "V3 Bizz GQ225 Grey", "Videocon A 54 White", "Videocon A 55q HD Black", "Videocon A15 Black", "Videocon A15 White Chrome", "Videocon A16 Black", "Videocon A16 White", "Videocon A42 Black", "Videocon A48 White", "Videocon A52 White", "Videocon A53 White Chrome", "Videocon A55 HD Black \u0026 Silver", "Videocon A55HD White", "Videocon Dost V1539 N Black Silver", "Videocon Dost V1615 Black", "Videocon Dost V1615 Silver", "Videocon V1508 Black", "Videocon V1544 Black \u0026 Silver", "Videocon vphone Gold", "Videocon vphone White", "Vox Kick 5 Black", "Vox Kick 5 White", "Vox V-3100 Black", "Vox V-3100 White", "Wham W20i Black", "Wham W24i Black", "Wham W26i Black", "Wynncom W101 Black", "Wynncom WYNNW412 Black", "XElectron AN1 Black", "XElectron BluEye Black", "XElectron M007 Black", "XElectron M998 Black", "XElectron N100 Black", "XElectron X1 White", "XElectron X1Black Black", "XOLO 8X-1000 Black", "XOLO A500 Club Black", "XOLO A500 Club White", "XOLO A500S Black", "XOLO A500S IPS Black", "XOLO A500S IPS Green", "XOLO A500S IPS Red", "XOLO A500S White", "XOLO A500s Lite Black", "XOLO A500s Lite White", "XOLO A550S IPS Black", "XOLO A600 Black", "XOLO A600 Blue", "XOLO A600 White", "XOLO A600 Yellow", "XOLO A700S Black", "XOLO LT900 Black", "XOLO Opus 2 Q1000 Black", "XOLO Play 6X-1000 Black", "XOLO Play 6X-1000 White", "XOLO Play Black", "XOLO Q1000 Black", "XOLO Q1000 Opus Black", "XOLO Q1000 Opus White", "XOLO Q1000 White", "XOLO Q1000S Black", "XOLO Q1000S Plus Black", "XOLO Q1010 White", "XOLO Q1010i Black", "XOLO Q1010i Coffee Brown", "XOLO Q1010i White", "XOLO Q1011 Black", "XOLO Q1011 White", "XOLO Q1100 Black", "XOLO Q1200 Black", "XOLO Q1200 White", "XOLO Q2000 White", "XOLO Q2000L White", "XOLO Q2500 Black", "XOLO Q3000 Black", "XOLO Q3000 White", "XOLO Q500S IPS Black", "XOLO Q500S IPS Green", "XOLO Q500S IPS Red", "XOLO Q600 White", "XOLO Q600S Black", "XOLO Q600S White", "XOLO Q700S Gold", "XOLO Q700S Plus Gold", "XOLO Q700S Silver", "XOLO Q700i Black", "XOLO Q900 White", "XOLO Q900S Black", "XOLO Q900T", "XOLO Win Q900s Black", "XOLO X1000 Black", "Y King Y 10 Black", "Y King Y 10 White", "Y King Y 20 Black", "Y King Y 30 Black", "Y King Y 30 White", "ZTE Blade C V807 Black", "ZTE Blade L V887", "ZTE Grand X Quad Lite Blue", "ZTE Grand X Quad Lite White", "ZTE Reliance d286 Black", "ZTE Reliance d286 White", "ZTE S183Reliance CDMA Only Black", "Zen 303 Power Black", "Zen 306 Ultrafone 306 Play Black \u0026 Red", "Zen 701 Amaze 701 Full Hd Black", "Zen P36 Black", "Zen U 504 B Black", "Zen U 504 W White", "Zen Ultrafone 502qHD Black", "Zook Boss Black", "Zook Brave Brown", "Zook Brilliant Grey", "Zook IMAX Blue", "Zook Iconic Black", "Zook Iconic Gold", "Zook Ideal Black", "Zook Ideal Gold", "Zook Keypad Sliver", "Zook Keypad White", "Zync Cloud Z401", "Zync X108 White", "Zync X207 Black", "iBall 4PIPS Gem Black", "iBall Andi 3.5 Classique With 1.3 Ghz Processor White", "iBall Andi 4.5 2G Grey", "iBall Andi 4.5 2G Ripple White", "iBall Andi 4.5 3G Ripple White", "iBall Andi 4.5 3G Wine \u0026 Gunmetal", "iBall Andi 4.5D Royale", "iBall Andi 4.7G Cobalt", "iBall Andi 5-M8 Black", "iBall Andi 5.5N2 Quadro", "iBall Andi 5K Sparkle White White", "iBall Andi 5K Sparkle Wine Special Wine", "iBall Andi 5T Cobalt 2", "iBall Andi Uddaan", "iBall Andi3.5kke Genius Black", "iBall Andi3.5kke Genius White", "iBall Andi3.5kke Winner Black", "iBall Andi3.5kke Winner White", "iBall Andi4 B2 Black", "iBall Andi4 Gem Black", "iBall Andi4 Gem White", "iBall Andi4 Velvet Black", "iBall Andi4 Velvet White", "iBall Andi4.5P Glitter White", "iBall Andi4.5P Glitter Yellow", "iBall Andi4.5Q White", "iBall Andi4.5d Royale White", "iBall Andi5-E7 Grey", "iBall IPS Tiger Andi4 Royal Blue", "iBall Iball Vogue 2.8A Slim Bar Design White White", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Black", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Yellow", "iBall King1.8D White", "iBall Senior Aasaan2 White", "iBall Shaan Fab2.4V8 Black \u0026 Blue", "iBall Shaan Fab2.4V8 Black \u0026 Yellow", "iBall Vogue 1.8-KK18 Black", "iBall Vogue 1.8-KK7 Yellow", "iBall Vogue 2.4 kk1 Grey", "iBall Vogue2.4e Black", "iBall iBall Andi 3.5kke Glory Special Wine", "iBall iBall Vogue 2.8A Slim Bar Design Grey Grey"]


        $scope.pricedivisionsmentshirt = [
            {
                price: "Rs. 2000 and below"
            },
            {
                price: "Rs 2001 - 5000"
            },
            {
                price: "Rs 5001 - 10000"
            },
            {
                price: "Rs 10001 - 18000"
            },
            {
                price: "Rs 18001 - 25000"
            },
            {
                price: "Rs 25001 - 35000"
            },
            {
                price: "Rs 35001 and above"
            }
        ];


        // mentshirt divisions for changes
        $scope.$watch('mentshirtesdivisions|filter:{selected:true}', function (nv) {
            $scope.mentshirttradeshow.mentshirtDivisions = nv.map(function (division) {
                //alert(division.brand);
                console.log({name: division.brand});
                return {name: division.brand};
            });

            var display = 0;
            if (angular.toJson($scope.mentshirttradeshow.mentshirtDivisions).length > 0 && angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt).length > 0
                && angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt).length > 0) {
                //show brand, color and price
                display = 1;
            } else if (angular.toJson($scope.mentshirttradeshow.mentshirtDivisions).length > 0 && angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt).length > 0
                && angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt).length < 0) {
                //show only brand and color
                display = 2;
            } else if (angular.toJson($scope.mentshirttradeshow.mentshirtDivisions).length > 0 && angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt).length < 0
                && angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt).length < 0) {
                //show only brand
                display = 3;
            } else if (angular.toJson($scope.mentshirttradeshow.mentshirtDivisions).length < 0 && angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt).length > 0
                && angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt).length > 0) {
                //show only color and price
                display = 4;
            } else if (angular.toJson($scope.mentshirttradeshow.mentshirtDivisions).length < 0 && angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt).length > 0
                && angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt).length < 0) {
                //show only color
                display = 5;
            } else if (angular.toJson($scope.mentshirttradeshow.mentshirtDivisions).length < 0 && angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt).length < 0
                && angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt).length < 0) {
                //show none
                display = 6;
            } else if (angular.toJson($scope.mentshirttradeshow.mentshirtDivisions).length < 0 && angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt).length < 0
                && angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt).length > 0) {
                //show price
                display = 7;
            }

            switch (display) {
                case 1:
                    $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                        color: angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt), price: angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt), productType: 'mentshirt'});
                    break;
                case 2:
                    $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                        color: angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt), price: angular.toJson($scope.priceDivisionsmentshirt), productType: 'mentshirt'});
                    break;
                case 3:
                    $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                        color: angular.toJson($scope.colorDivisionsmentshirt), price: angular.toJson($scope.priceDivisionsmentshirt), productType: 'mentshirt'});
                    break;
                case 4:
                    $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                        color: angular.toJson($scope.colortradeshowmentshirt.colorDivisions), price: angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt), productType: 'mentshirt'});
                    break;
                case 5:
                    $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                        color: angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt), price: angular.toJson($scope.priceDivisionsmentshirt), productType: 'mentshirt'});
                    break;
                case 6:
                    //  $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                    //    color: angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt), price: angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt), productType: productType});
                    break;
                case 7:
                    $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                        color: angular.toJson($scope.colorDivisionsmentshirt), price: angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt), productType: 'mentshirt'});
                    break;
                default:
                    break;
            }


            console.log("tradeshowmentshirt" + angular.toJson($scope.mentshirttradeshow.mentshirtDivisions));
            //$location.path('/view2');
        }, true);


        $scope.colortradeshowmentshirt = { };
        $scope.colortradeshowmentshirt.colorDivisionsmentshirt = [];


        // helper method
        $scope.selectedColorDivisionsmentshirt = function selectedColorDivisionsmentshirt() {
            return filterFilter($scope.colortradeshowmentshirt.colorDivisionsmentshirt, { selected: true });
        };

        // mentshirt divisions for changes
        $scope.$watch('colordivisionsmentshirt|filter:{selected:true}', function (nv1) {
            $scope.colortradeshowmentshirt.colorDivisionsmentshirt = nv1.map(function (colordivisionmentshirt) {
                //alert(division.brand);
                console.log({color: colordivisionmentshirt.color});
                return {color: colordivisionmentshirt.color};
            });
            $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                color: angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt), price: angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt), productType: 'mentshirt'});
            console.log("colortradeshowmentshirt" + angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt));
            //  $location.path('/view2');
        }, true);


        $scope.pricetradeshowmentshirt = { };
        $scope.pricetradeshowmentshirt.priceDivisionsmentshirt = [];


        // helper method
        $scope.selectedPriceDivisionsmentshirt = function selectedPriceDivisionsmentshirt() {
            return filterFilter($scope.pricetradeshowmentshirt.priceDivisionsmentshirt, { selected: true });
        };


        // mentshirt divisions for changes
        $scope.$watch('pricedivisionsmentshirt|filter:{selected:true}', function (nv2) {
            $scope.pricetradeshowmentshirt.priceDivisionsmentshirt = nv2.map(function (pricedivisionmentshirt) {
                //alert(division.brand);
                console.log({price: pricedivisionmentshirt.price});
                return {price: pricedivisionmentshirt.price};
            });
            $rootScope.mentshirtlist = CameraFactory.brandName.query({brands: angular.toJson($scope.mentshirttradeshow.mentshirtDivisions),
                color: angular.toJson($scope.colortradeshowmentshirt.colorDivisionsmentshirt), price: angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt), productType: 'mentshirt'});
            console.log("pricetradeshowmentshirt" + angular.toJson($scope.pricetradeshowmentshirt.priceDivisionsmentshirt));
            // $location.path('/view2');
        }, true);


        $scope.getmentshirtInfo = function (product) {
            console.log("getProductInfo - " + product.productName);
            //$rootScope.productInfo = UserFactory.productdetails.query({key: product.productName, productType: productType});

            $rootScope.pricecompare = {productName: ""};
            $rootScope.pricecompare = CameraFactory.productdetails.query({key: product.productName, productType: 'mentshirt'});
            console.log("price compare - " + $rootScope.pricecompare.length);

            $rootScope.productInfo = product;
            $rootScope.image = product.productImage;
            console.log("productInfo length - " + product.productImage);
            console.log("productInfo length - " + $rootScope.image);
            console.log("productInfo length - " + $scope.productInfo.productName);

            $scope.$watch($rootScope.productInfo, function (newVal) {
                //alert("Changed an input");
            }, true);

            $scope.$watch($rootScope.pricecompare, function (newVal) {
                //alert("Changed an input");
            }, true);

            //  $location.path('/view2');
        }


    }]);


app.controller('menshoesesCtrl', ['$scope', '$rootScope', '$location', 'UserFactory', 'CameraFactory', '$q',
    function ($scope, $rootScope, $location, UserFactory, CameraFactory, $q) {


        $scope.items = [
            { id: 1, name: 'Books'},
            { id: 2, name: 'Mobile'}
        ];

        var productType = 'menshoes';

        $scope.menmenshoeses = function (productType) {
            console.log("menmenshoeses");
            $rootScope.menshoeslist = CameraFactory.home.query({productType: 'menshoes'});


            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.menshoeslist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.menshoeslist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/menshoeses');
        }

        console.log("productType - " + productType);

        $scope.womenmenshoeses = function () {
            console.log("womenmenshoeses");
            console.log("menmenshoeses");
            $rootScope.menshoeslist = CameraFactory.home.query({productcategory: 'Women menshoeses'});

            var pagesShown = 1;
            var pageSize = 30;

            $scope.paginationLimit = function (data) {
                //alert("34");
                return pageSize * pagesShown;
            };
            $scope.hasMoreItemsToShow = function () {
                return pagesShown < ($rootScope.menshoeslist.length / pageSize);
            };
            $scope.showMoreItems = function () {
                pagesShown = pagesShown + 1;
            };

            $scope.$watch($rootScope.menshoeslist, function (newVal) {
                //alert("Changed an input");
            }, true);

            $location.path('/menshoeses');
        }


        $scope.menshoesesdivisions = CameraFactory.productbrands.query({productType: productType});

        $scope.menshoestradeshow = { };
        $scope.menshoestradeshow.menshoesDivisions = [];

        // selected divisions
        //$scope.selection = [];

        // helper method
        $scope.selectedDivisionsmenshoes = function selectedDivisionsmenshoes() {
            return filterFilter($scope.menshoestradeshow.menshoesDivisions, { selected: true });
        };


        $scope.colordivisionsmenshoes = [
            {
                color: "White"
            },
            {
                color: "Yellow"
            },
            {
                color: "Pink"
            },
            {
                color: "Black"
            },
            {
                color: "Grey"
            }
        ];


        $scope.typeahead = ["ADCOM A-430I PS Black", "ADCOM Smartphone A-350i Black", "ADCOM Smartphone A-350i White", "ADCOM Smartphone A-500 Black", "ADCOM Smartphone A-500 White", "ADCOM Thunder A-350 Black", "ADCOM Thunder A-350 White", "ADCOM Thunder A-400 Black", "ADCOM Thunder A-400 White", "ADCOM Thunder A-400i Black", "ADCOM Thunder A-400i White", "ADCOM Thunder A-430 White", "ADCOM X8 Black", "ADCOM X8 White", "ADCOM X9 Black", "ADCOM X9 Red", "Adcom X10 Black", "Adcom X10 White", "Adcom X11 Black", "Adcom X12 Black", "Adcom X14 Black", "Adcom X14 Grey", "Adcom X28 Silver", "Alcatel 890D Silver", "Alcatel One Touch J636d+ Black", "Alcatel Onetouch Idol Mini 6012D", "Alcatel Onetouch Idol X+ Bluish Black, with 16 GB", "Alcatel Onetouch Idol X+ White, with 16 GB", "Apple iPhone 4 Black, with 16 GB", "Apple iPhone 4 Black, with 8 GB", "Apple iPhone 4 White, with 16 GB", "Apple iPhone 4 White, with 8 GB", "Apple iPhone 4S Black, with 8 GB", "Apple iPhone 4S White, with 8 GB", "Apple iPhone 5C 8 GB Blue, with 8 GB", "Apple iPhone 5C 8 GB Green, with 8 GB", "Apple iPhone 5C 8 GB Pink, with 8 GB", "Apple iPhone 5C 8 GB White, with 8 GB", "Apple iPhone 5C 8 GB Yellow, with 8 GB", "Apple iPhone 5C Blue, with 16 GB", "Apple iPhone 5C Blue, with 32 GB", "Apple iPhone 5C Green, with 16 GB", "Apple iPhone 5C Green, with 32GB", "Apple iPhone 5C Pink, with 16 GB", "Apple iPhone 5C Pink, with 32GB", "Apple iPhone 5C White, with 16 GB", "Apple iPhone 5C White, with 32GB", "Apple iPhone 5C Yellow, with 16 GB", "Apple iPhone 5C Yellow, with 32GB", "Apple iPhone 5S Gold, with 16 GB", "Apple iPhone 5S Gold, with 32 GB", "Apple iPhone 5S Gold, with 64 GB", "Apple iPhone 5S Silver, with 16 GB", "Apple iPhone 5S Silver, with 32 GB", "Apple iPhone 5S Silver, with 64 GB", "Apple iPhone 5S Space Grey, with 16 GB", "Apple iPhone 5S Space Grey, with 32 GB", "Apple iPhone 5S Space Grey, with 64 GB", "Arise Bingo AX111 Black", "Arise Imperia AX282 Black", "Arise Magnet AX251 Black", "Asus Zenfone 4 A400CG Black, with 8 GB", "Asus Zenfone 4 A400CG Blue, with 8 GB", "Asus Zenfone 4 A400CG Red, with 8 GB", "Asus Zenfone 4 A400CG White, with 8 GB", "Asus Zenfone 4 A400CG Yellow, with 8 GB", "Asus Zenfone 4 A450CG Black, with 8 GB", "Asus Zenfone 4 A450CG Solar Yellow, with 8 GB", "Asus Zenfone 4 A450CG White, with 8 GB", "Asus Zenfone 6 A600CG / A601CG Black, with 16 GB", "Asus Zenfone 6 A600CG / A601CG Red, with 16 GB", "Atom Supremus White", "Atom Ultimus White", "BLU B10 BLK Black", "BLU B10 JUMBO R Black", "BLU B10 JUMBO Y Black", "BLU B10 R Black", "BLU B10 Y Black", "BLU B10+ B Blue", "BLU B10+ O Orange", "BLU B10+ R Red", "BLU B10+ Y Yellow", "BLU B23 B Black", "BLU B23 G Black", "BLU B23 R Black", "BLU B23 Y Black", "BLU B306A BLK Black", "BLU B306A W White", "BLU B307 BLK Black", "BLU B307 W White", "BLU B309A W White", "BLU B41 BLK Grey", "BLU B41 Gry Black", "BQ K12 Grey", "BQ K15 Grey", "BQ K18 Blue", "BQ K26 Green", "BQ K27 Gold", "BQ K28 White", "BQ K29 Black", "BQ K50 Grey", "BQ K80 Blue", "BQ S35 Red", "BQ S36 Black", "BQ S37 Black", "BQ S37 White", "BQ S60 Black", "BSNL-Champion Champion Apna Phone SQ241 Power Black", "BSNL-Champion Champion My Phone 51 Black", "BSNL-Champion Champion My Phone 51 White", "BSNL-Champion DM6513 White", "BSNL-Champion Myphone 41 Black", "BSNL-Champion Pro SQ181 Black", "BSNL-Champion SM3513 Black", "BSNL-Champion SQ 181 power Black", "BSNL-Champion SQ 181 power White", "BSNL-Champion SQ 241 Sleek Black", "BSNL-Champion SQ 241 Sleek White", "BSNL-Champion SQ241 SQ241 Black", "BSNL-Champion SQ281 SQ281 Black", "Belkin Skype V1000 Black", "BlackBerry 9720 Black", "BlackBerry 9720 White", "BlackBerry Bold 9790 Pink", "BlackBerry Curve 3G 9300 Pink", "BlackBerry Curve 9220 Black", "BlackBerry Q10 Black", "BlackBerry Q10 White", "BlackBerry Torch 9810 White", "BlackBerry Torch 9810 Zinc Grey", "BlackBerry Torch 9860 Shadow Grey", "BlackBerry Z10 Charcoal Black", "BlackBerry Z10 Pure White", "BlackBerry Z3 Black, with 8 GB", "BlackBerry Z30 Black", "BlackBerry Z30 White", "Blackberry Curve 9320 Black", "Byond B50 Black", "Celkon A10 3G Campus Series Black", "Celkon A107+ Smart Phone White", "Celkon A112 Signature Swift Black", "Celkon A112 White", "Celkon A119Q A 119 Q Smart Phone Black", "Celkon C349* Black", "Celkon C5 Star White", "Celkon C56 Black", "Celkon C6* Black \u0026 Red", "Celkon C605 Black", "Celkon C7045 Black", "Celkon Campus A20 White", "Celkon Campus A225 White", "Celkon Campus A35K Blue", "Celkon Campus A40 Yellow", "Celkon Campus A42 Black", "Celkon Campus A43 Black", "Celkon Campus A66 Black", "Celkon Campus A66 White", "Celkon Campus A9Dual White \u0026 Black", "Celkon Campus Mini A350 White", "Celkon Campus Series A20 Smart Phone Black", "Celkon Celkon Campus Series A 63 Smart Phone Campus Series A63 Black", "Celkon Feature Phone C297 Black", "Celkon Feature Phone C297 White", "Celkon Feature Phone C9 Jumbo White", "Celkon Millennium Q44 Black", "Celkon Millennium Q455 Black", "Celkon Millennium Q455 Blue", "Celkon Millennium Q455 White", "Celkon Millennium Q470 White", "Celkon Signature 118 HD Black", "Celkon Signature A115 White", "Celkon Signature Two A500 Black", "DOMO nTice G12 Phablet Mobile Smartphone White", "Datawind PocketSurfer3G5", "Datawind PocketSurfer5 White", "Datawind PocketSurfer5X Black", "Dell Venue V03B Black", "Devante Boss 1 Black", "Devante Boss 1 White", "Devante Boss 2 Black", "Devante Boss 2 Blue", "Devante Boss 2 White", "Devante Dynamite White", "Devante Hero 1 Subway Series S1 Black", "Devante Hero 1 Subway Series S1 White", "Devante Thunder Black", "Digimac 3X Black", "Digimac 3X White", "Digimac EXI Black", "Digimac EXI White", "Digimac Fusion Black", "Digimac Fusion White", "Digimac VIVO Black", "Digimac VIVO White", "Forme C101 Black", "Forme Coke A1 Red", "Forme D516 Black", "Forme D516 Black \u0026 Red", "Forme D516 Champagne", "Forme D555+ Grey", "Forme D555+ Red", "Forme D556 Black \u0026 Red", "Forme D815 Black", "Forme D815 Red", "Forme Discovery P9 Black", "Forme Discovery P9 Blue", "Forme Discovery P9 plus Black", "Forme Discovery P9 plus Blue", "Forme Energy D9 Black", "Forme F10 Black \u0026 Red", "Forme F8+ Silver", "Forme Fantasy F10 Black", "Forme Fantasy F10 Red", "Forme Find F105 Red", "Forme Forever F8 Red", "Forme Forever F8 Silver", "Forme Hero Blue", "Forme Honey Hero Black", "Forme Hope H1 Black", "Forme Hope H1 Blue \u0026 Black", "Forme Inspire V8 Black", "Forme Inspire V8 Brown", "Forme Inspire V8 Silver", "Forme K1 Black \u0026 Red", "Forme King K1 Red", "Forme L100 White \u0026 Silver", "Forme L600 Red", "Forme L900 Red", "Forme L900 White", "Forme L900 White \u0026 Red", "Forme Love One Black", "Forme Love One Brown", "Forme Love One Red", "Forme M20 White", "Forme M60 Pink", "Forme M600 Red", "Forme M600 White", "Forme M660 Red", "Forme M660 White", "Forme M80 Red", "Forme M90 Black", "Forme Mini 5130 Black", "Forme Onion K806 Black", "Forme Onion K806 White", "Forme P9 Plus Black", "Forme Power One A60 Black", "Forme Power Two M22 Grey", "Forme Power Two M22 Red", "Forme Queen K08-grey Grey", "Forme Queen K08-red Red", "Forme Queen K08-white White", "Forme S10 Silver \u0026 Green", "Forme Summer S700 Pink", "Forme Summer S700 Purple", "Forme Summer S700 Red", "Forme Summer S700 White", "Forme Sunny S60 Black", "Forme Sunny S60 Blue", "Forme Sunny S60 Orange", "Forme Surprise P10 Black", "Forme Surprise S10 Green", "Forme Surprise S10 Red", "Forme Surprise S11 Black", "Forme Surprise S11 Red", "Forme T4 Silver", "Forme Teddy T2 Green", "Forme Teddy T2 White", "Forme Teddy T3 Black", "Forme Teddy T3 Red", "Forme Teddy T4 Green", "Forme Teddy T4 Silver", "Forme V8 White", "Forme Venus V11 Black", "Forme Venus V11 Red", "Forme W3 Gold", "Forme Winner W3 Blue \u0026 Silver", "Forme Winner W3 Gold", "Forme Winner W3 Grey", "Funtab Phablet Fone PHA6.4 White", "Gee Pee 3dh 4430 Black", "Gionee CTRL V5 White", "Gionee E7 Mini", "Gionee Elife E3 Black", "Gionee Elife E6 Black", "Gionee Elife E7 16 GB Black, with 16 GB", "Gionee Elife E7 16 GB White, with 16 GB", "Gionee Elife E7 32 GB Black, with 32 GB", "Gionee Elife E7 32 GB White, with 32 GB", "Gionee Elife S5.5 Black", "Gionee Elife S5.5 White", "Gionee G1 Black", "Gionee Gpad G3 White", "Gionee Gpad G4 Black", "Gionee Gpad G4 White", "Gionee Long L700 Black", "Gionee Long L700 Silver", "Gionee M2 Black", "Gionee M2 White", "Gionee P2 Black", "Gionee P2S Black", "Gionee P2S White", "Gionee Pioneer P3 Black", "Gionee Pioneer P3 White", "Gionee Pioneer P4 Black", "Gionee Pioneer P4 White", "Gionee Slim S80 Black", "Gionee Slim S80 Grey", "Gionee V5 Black", "Google Nexus 4 Black", "Google Nexus 4 White, with Headphone", "Google Nexus 5 Black, with 16 GB", "Google Nexus 5 Black, with 32 GB", "Google Nexus 5 White, with 16 GB", "Google Nexus 5 White, with 32 GB", "HP Slate 6 Voice Tab", "HTC 709D Desire 700 White", "HTC A620E 8S Fiesta Red", "HTC Desire 210 Dual SIM D210h Black", "HTC Desire 210 Dual SIM D210h White", "HTC Desire 310 Dual SIM Arctic White", "HTC Desire 310 Dual SIM Matte Blue", "HTC Desire 310 Flipcovers Blue", "HTC Desire 500 Glacier Blue", "HTC Desire 500 Glossy Black", "HTC Desire 500 Passion Red", "HTC Desire 516 Dark Grey", "HTC Desire 516 Grey", "HTC Desire 516 Pearl White", "HTC Desire 516 White", "HTC Desire 600 Stealth Black", "HTC Desire 600 White", "HTC Desire 600C Black, with Dual SIM", "HTC Desire 600C White, with Dual SIM", "HTC Desire 601 Black, with Dual SIM", "HTC Desire 616 Dual Sim Dark Gray", "HTC Desire 616 Dual Sim White", "HTC Desire 700 Black", "HTC Desire 816 Dark Grey", "HTC Desire 816 White", "HTC Desire SV Stealth Black", "HTC Desire SV Yellow", "HTC Desire T329D XC Black Stone", "HTC Desire T329D XC Fabulous White", "HTC Desire T329W X Dual SIM White, with Dual SIM", "HTC E8 Dual SIM White", "HTC ONE E8 M8Sd Red", "HTC One 802d Black, with Dual SIM", "HTC One 802d Silver, with Dual SIM", "HTC One E8", "HTC One M8 Amber Gold", "HTC One M8 Glacial Silver", "HTC One M8 Gunmetal Grey", "HTC One Max Silver White", "HTC One Mini Black", "HTC One Mini Blue", "HTC One V T320 Jupitor Rock", "HTC T327W Desire U DS White", "Haier C380 Black", "Haier C380 White", "Hitech Air A1 White", "Hitech Amaze S-800 Black", "Hitech Amaze S410 White", "Hitech F2i Blue", "Hitech G11 Black", "Hitech G15 Black", "Hitech G5 Black", "Hitech H2i Red", "Hitech HT-850 Black", "Hitech HT820 Black", "Hitech HT830 Grey", "Hitech HT880 Black", "Hitech Kick 515 Black", "Hitech Micra - 110 Black", "Hitech Micra 115 Black", "Hitech Micra 120 Black", "Hitech Micra 150 Black", "Hitech Pride 302 Black \u0026 Silver", "Hitech Pride 313 Black", "Hitech Pride 325 Black", "Hitech Rocket G3i Black", "Hitech S210 Amaze Black", "Hitech S230 Amaze Black", "Hitech S3003G White", "Hitech Super X-9 Black", "Hitech Supreme F3 Black", "Hitech Tiny X-100 Black", "Hitech X-101 Black", "Hitech X10 Grey", "Hitech Xpaly 250 Black", "Hitech Xpaly G3i+ Black", "Hitech Xplay 245 Black", "Hitech Youth HT-810i Black", "Hitech kick 525 Black", "Hotpary Elegant H2 White", "Huawei Ascend G6 Black", "Huawei Ascend G610 Black", "Huawei Ascend G610 White", "Huawei Ascend G700 White", "Huawei Ascend P6 White", "Huawei Ascend Y200 Black", "Huawei Ascend Y210D Black", "Huawei Ascend Y220 Black", "Huawei Ascend Y600", "Huawei G730 Black", "Huawei G730 White", "Huawei Honor 3C White", "Huawei Honor 3X White", "Huawei Y320 Black", "Huawei Y511 Black", "Huawei Y600 Black \u0026 Blue", "ICE D3 Xphone Limited Edition Pearl White", "ICE Xphone Xphone Pearl White", "Icon G8 Dual SIM Qwerty Mobile Black", "Icon G9 Dual SIM Qwerty Mobile Black", "Intex AQUA Marvel + Aqua Marvel + Grey", "Intex AQUA Marvel + Aqua Marvel + White", "Intex Alpha Black", "Intex Alpha Mobile Black \u0026 Red", "Intex Aqua 3 G Black", "Intex Aqua 3G Black", "Intex Aqua 3G White", "Intex Aqua Curve Black", "Intex Aqua Curve Red", "Intex Aqua HD Aqua HD White", "Intex Aqua I 5 HD Black", "Intex Aqua I15 White", "Intex Aqua I5 HD Black", "Intex Aqua I5 HD White", "Intex Aqua N-2 Black", "Intex Aqua N15 Black", "Intex Aqua N15 Blue", "Intex Aqua N15 White", "Intex Aqua N17 Black", "Intex Aqua N2 White", "Intex Aqua N4 Black", "Intex Aqua N8 White", "Intex Aqua Octa Black", "Intex Aqua Octa White", "Intex Aqua Qwerty Blue", "Intex Aqua Qwerty White", "Intex Aqua Style Black", "Intex Aqua Style Black \u0026 Silver", "Intex Aqua Style Pro Black", "Intex Aqua Style Pro Grey", "Intex Aqua Style White \u0026 Silver", "Intex Aqua Swadesh White Black", "Intex Aqua T3 Black \u0026 Blue", "Intex Aqua T3 Grey", "Intex Aqua T3 White \u0026 Silver", "Intex Aqua T4 Black", "Intex Aqua T4 Blue", "Intex Aqua Trendy White", "Intex Aqua Y 2 Black", "Intex Aqua Y2 White", "Intex Aqua i 5 mini White", "Intex Aqua i14 Blue", "Intex Aqua i15 Black", "Intex Aqua i15 Blue", "Intex Aqua i3 Black", "Intex Aqua i3 Blue", "Intex Aqua i5 Black", "Intex Aqua i5 Mini Black", "Intex Aura NX Black", "Intex Bravo 2.6 Grey", "Intex Cloud X11 White", "Intex Cloud X12 Black", "Intex Cloud X2 Cloud X2 White", "Intex Cloud X3 Plus Black", "Intex Cloud X3 Plus White", "Intex Cloud X5 Black", "Intex Cloud X5 White", "Intex Cloud Y1 Black", "Intex Cloud Y1 White", "Intex Cloud Y12 White", "Intex Cloud Y13 White", "Intex Cloud Y17 White", "Intex Cloud Y4 Black", "Intex Cloud Y7 Black", "Intex Cloud Y7 White", "Intex Cloud Z5 Black", "Intex Focus V Silver", "Intex Focus-v Grey", "Intex Force Black \u0026 Grey", "Intex Force Black \u0026 Red", "Intex Force White \u0026 Grey", "Intex GC5050 Blue", "Intex GC5050 Red", "Intex GC5050 Silver", "Intex Gsm Hero Silver", "Intex Hero Black", "Intex IN 2010 NANO2", "Intex Jazz Grey", "Intex Jszz Black", "Intex Kobra Silver", "Intex Kobra White", "Intex Mega 10 Black", "Intex Nano 2 Black \u0026 Red", "Intex Nano 2 Blue", "Intex Nano 2S Black", "Intex Nano Star Black", "Intex Nano Star Black \u0026 Red", "Intex Neo-Vi Black \u0026 Red", "Intex Neo-vi Plus Red", "Intex Nova Black", "Intex Nova Silver", "Intex Nova White", "Intex Plasma Black", "Intex Plasma White", "Intex Platinum 201 Black", "Intex Platinum 201 Mobile Silver", "Intex Platinum 201 White", "Intex Platinum A6 Black \u0026 Silver", "Intex Platinum A6 White", "Intex Platinum Matrix Black", "Intex Platinum Matrix White", "Intex Pride Black", "Intex Rock Star Black \u0026 Grey", "Intex Shine 1800 Black", "Intex Shine 1800 Blue", "Intex Shine 1800 Red", "Intex Slimzz Black", "Intex Slimzz Silver", "Intex Star One Black", "Intex Turbo N Grey", "Intex Yuvi LX Black", "Intex Yuvi Pro Grey", "JIVI Dual Sim/Dual Standby Gsm + Cdma GC 1209 Black and White", "Jivi C3i Black", "Jivi CG1335 Black", "Jivi JV C300 CDMA Mobile Black", "Jivi JV21 Black", "Jivi JV21 White", "Jivi Jv X3i Black", "Jivi Slim X48 Black", "Jivi X390 Black", "Jivi X426 Black", "Jivi X480 Black", "Jivi X660 Black", "Josh A2700 Black", "Josh A2700 Blue", "Josh A2700 White", "Josh A999 White", "Josh Feather Black", "Josh JB 63+ Red", "Josh JB 63+ White", "Josh JB007 Silver", "Josh JB007-S Brown", "Josh JM 2800 Black", "Josh JM 2800 Golden", "Josh JM2400 Black", "Josh JM2400-R Red", "Josh Thunder Grey", "Karbonn A1 Plus Super White", "Karbonn A1+ Duple Black", "Karbonn A1+ Duple White", "Karbonn A101 Black", "Karbonn A11+ Black", "Karbonn A119 Black", "Karbonn A119 White", "Karbonn A15 Plus Black", "Karbonn A19 Black Silver", "Karbonn A19 White Silver", "Karbonn A21+ Black", "Karbonn A21+ White", "Karbonn A25 Plus White", "Karbonn A35 Black Silver", "Karbonn A35 White and Silver", "Karbonn A51 Black", "Karbonn A51 White", "Karbonn A6 Black White", "Karbonn A90 Black \u0026 Silver", "Karbonn A90 White Silver", "Karbonn A90S Black", "Karbonn A91 White", "Karbonn A93 Black", "Karbonn A93 White", "Karbonn A99 Black", "Karbonn A99 Star Black \u0026 White", "Karbonn A99 White", "Karbonn A99i Black", "Karbonn A99i White", "Karbonn Flair K102+ Gold White", "Karbonn Jumbo K9 Black \u0026 Red", "Karbonn K-Phone 1 Black Blue", "Karbonn K-Phone 1 Black Brown", "Karbonn K-Phone 1 White Silver", "Karbonn K101* Black \u0026 Red", "Karbonn K105s Black \u0026 Red", "Karbonn K112 Black", "Karbonn K39 Black \u0026 Grey", "Karbonn K39 Black \u0026 Red", "Karbonn K52 Groovster Black \u0026 Silver", "Karbonn K57 Black", "Karbonn K57 Silver", "Karbonn K62+ White", "Karbonn K63+ Black", "Karbonn K63+ Silver", "Karbonn K9 Plus Black", "Karbonn K9 Plus White Silver", "Karbonn KC540 White", "Karbonn KT 52 Black", "Karbonn KT 52 White", "Karbonn Karbonn The Legend Phone Beauty At Its Best Black Black", "Karbonn Kochadaiiyaan The Legend 2.4 Black \u0026 Red", "Karbonn Kochadaiiyaan The Legend A36 Black \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A36 White \u0026 Silver", "Karbonn Kochadaiiyaan The Legend A6 Plus Black \u0026 White", "Karbonn Kochadaiiyaan The Legend S5i White", "Karbonn Opium N7 Black", "Karbonn Opium N9 Black", "Karbonn Opium N9 White", "Karbonn SPY K595 Black", "Karbonn SPY K595 Grey", "Karbonn Smart A1* Black", "Karbonn Smart A10 Black", "Karbonn Smart A10 White", "Karbonn Smart A11 Star Black", "Karbonn Smart A11 Star White", "Karbonn Smart A111 White", "Karbonn Smart A12 Star Black \u0026 Silver", "Karbonn Smart A12 Star White \u0026 Gold", "Karbonn Smart A26 Metallic Black", "Karbonn Smart A26 White Silver", "Karbonn Smart A29 Black", "Karbonn Smart A29 White", "Karbonn Smart A4+ Black", "Karbonn Smart A4+ White", "Karbonn Smart A5* Black", "Karbonn Smart A50s Black", "Karbonn Smart A50s White", "Karbonn Smart A51 Lite White", "Karbonn Smart A51+ Black", "Karbonn Smart A51+ White", "Karbonn Smart A52 Black Silver", "Karbonn Smart A52 Plus Black \u0026 Gold", "Karbonn Smart A52 Plus White \u0026 Silver", "Karbonn Smart A52 White Silver", "Karbonn Smart A5i Black", "Karbonn Smart A5i White", "Karbonn Smart A92 Black Silver", "Karbonn Smart A92 White Silver", "Karbonn Sound Wave K451+ Black", "Karbonn Sound Wave K451+ Champ Gold", "Karbonn Sound Wave K451+ Silver", "Karbonn The Star K61 Black", "Karbonn Titanium Hexa", "Karbonn Titanium K900 Black", "Karbonn Titanium Octane Black", "Karbonn Titanium Octane Red", "Karbonn Titanium Octane White", "Karbonn Titanium S1 Plus Black", "Karbonn Titanium S1 Plus Orange", "Karbonn Titanium S1 Plus White", "Karbonn Titanium S19 White", "Karbonn Titanium S2 Plus Black", "Karbonn Titanium S3 Black", "Karbonn Titanium S3 White", "Karbonn Titanium S4 Black", "Karbonn Titanium S4 White", "Karbonn Titanium S5 Plus Deep Blue", "Karbonn Titanium S5 Plus Pearl White", "Karbonn Titanium S5i Dark Blue", "Karbonn Titanium S7 Black", "Karbonn Titanium S9 Lite Black", "Karbonn Titanium S9 Lite White", "Karbonn Titanium S9 Pearl White", "Karbonn Titanium S99 Black", "Karbonn Titanium S99 White", "Karbonn Titanium X White", "Kingbell Basic M24 Black", "Kingbell Basic M3 Pink", "LG A390 Silver", "LG Cookie Smart T 375 Black", "LG Cookie Snap GM360i with 2 GB Memory Card", "LG D686 Gold", "LG E420 Black", "LG E612 Black", "LG G Pro 2 D838 Titan", "LG G Pro 2 D838 White", "LG G Pro E988 Black", "LG G Pro Lite D686 Black", "LG G Pro Lite D686 Black Gold", "LG G Pro Lite D686 White", "LG G-Flex Titan Silver", "LG G2 32 GB Black, with 32 GB", "LG G2 32 GB Gold", "LG G2 32 GB White, with 32 GB", "LG G2 Black", "LG G2 Black Gold, with 16gb", "LG G2 D802T Black", "LG G2 D802T Gold", "LG G2 D802T White", "LG G2 White", "LG G3 D855 Black Gold, with 32 GB", "LG G3 D855 Gold", "LG G3 D855 Titan Titan", "LG G3 D855 Titan Titan, with 32 GB", "LG G3 D855 White", "LG L4 II Dual E445 Black", "LG L4 II Dual E445 White", "LG L60 Dual White", "LG L60 X-147 Black", "LG L70 Black", "LG L70 Dual", "LG L70 White", "LG L80 Black", "LG L80 Dual Black", "LG L80 Dual White", "LG L80 White", "LG L90 Black", "LG L90 Dual", "LG L90 White", "LG Optimus 3D Max P725 Black", "LG Optimus 4X HD P880 White", "LG Optimus Black P970 Black Titan", "LG Optimus G E975 Blue", "LG Optimus GT540", "LG Optimus Hub E510 Black", "LG Optimus L3 Dual E405 Black", "LG Optimus L3 Dual E405 White", "LG Optimus L3 II E425 Black", "LG Optimus L3 II E425 White", "LG Optimus L3 II E435 Black", "LG Optimus L3 II E435 White", "LG Optimus L5 Dual E615 Black", "LG Optimus L5 Dual E615 White", "LG Optimus L5 II Dual E455 Black", "LG Optimus L5 II Dual E455 White", "LG Optimus L5 II E450 Black", "LG Optimus L5 II E450 White", "LG Optimus L7 II P715 Black", "LG Optimus L7 II P715 White", "LG Optimus L7 P705 Black", "LG Optimus L9 P765 Black", "LG Optimus Net Dual Sim P698 Titanium", "LG Optimus Pro C660 Black", "LG Optimus Sol E730 Black", "LG Optimus VU P895 Black", "LG Optimus VU P895 White", "LG P520 Black, with 2 GB Micro SD Card", "LG T500 Black", "LG T515 Wine Red", "LG T585 Black", "LG T585 White", "Lava ARC 11i Black", "Lava ARC Lite Black \u0026 Red", "Lava Arc 111 Black \u0026 Yellow", "Lava Arc 111 Grey \u0026 Green", "Lava Arc 12i Black", "Lava Arc 12i Grey", "Lava Arc 1star Black \u0026 Red", "Lava Arc 22 Black", "Lava Arc 22 Yellow", "Lava C11 Grey", "Lava CG141 Black", "Lava Discover 128 Star White", "Lava Discover 135 White", "Lava Discover 136S Champagne", "Lava Discover Neo Black", "Lava Discover Neo Grey", "Lava Iris 300 Style Dark Blue", "Lava Iris 310 Style Brown", "Lava Iris 349i Black", "Lava Iris 350M Grey", "Lava Iris 354 White", "Lava Iris 354e White", "Lava Iris 360 Music Black", "Lava Iris 3G 412 Grey", "Lava Iris 402 Grey", "Lava Iris 402 White", "Lava Iris 402+ Ivory White", "Lava Iris 402e Grey", "Lava Iris 404e Black", "Lava Iris 405+ Black", "Lava Iris 405+ White", "Lava Iris 406Q Black", "Lava Iris 406Q White", "Lava Iris 408e Frosted Silver", "Lava Iris 415 Black", "Lava Iris 450 Color Plus Black \u0026 Blue", "Lava Iris 450 Color Plus White \u0026 Blue", "Lava Iris 450 White \u0026 Blue", "Lava Iris 456 Black", "Lava Iris 458q Grey", "Lava Iris 504Q+ Gray", "Lava Iris 504Q+ White", "Lava Iris 550Q Black", "Lava Iris Pro 20 Metal Blue", "Lava Iris Pro 30 Grey", "Lava Iris X1 with 4 GB ROM Black", "Lava Iris X1 with 4 GB ROM White", "Lava Iris X1 with 8 GB ROM Black, with 8 GB ROM", "Lava Iris X1 with 8 GB ROM White, with 8 GB ROM", "Lava KKT 27i Blue", "Lava KKT 27i Grey", "Lava KKT 27i Silver", "Lava KKT 27s Grey", "Lava KKT 34i Black \u0026 Silver", "Lava KKT 34star Black \u0026 Red", "Lava KKT 40 Mini Blue", "Lava KKT 42 Black", "Lava KKT Uno Grey", "Lava Magnum X604 White", "Lava Spark 10 Black \u0026 Red", "Lava Spark 245e Black \u0026 Grey", "Lemon B149 Black", "Lemon B159 Multimedia Big Battery Black", "Lemon B169 Multimedia Big Battery Grey", "Lemon B229 Multimedia Big Battery Black", "Lemon B319I Multimedia Big Battery Black", "Lemon B579 Multimedia Big Battery with Box Speaker Black", "Lenovo A269i Black", "Lenovo A369i Black", "Lenovo A390 Black", "Lenovo A390 White", "Lenovo A516 Grey", "Lenovo A516 White", "Lenovo A526 Aurora Blue", "Lenovo A680 Black", "Lenovo A680 White", "Lenovo A800 Black", "Lenovo A850 Black", "Lenovo A850 White", "Lenovo A859 White", "Lenovo IdeaPhone S890 White", "Lenovo Ideaphone A706 Black", "Lenovo Ideaphone A706 White", "Lenovo Ideaphone S920 8 GB White, with 8 GB", "Lenovo K860 Black", "Lenovo K900 Steel Grey", "Lenovo P780 Deep Black", "Lenovo P780 Deep Black, with 8 GB", "Lenovo Reliance CDMA GSM 2 SIM Android SmartPhone A600E Black", "Lenovo S650 Silver", "Lenovo S660 Titanium", "Lenovo S720 White", "Lenovo S820 Red", "Lenovo S820 Red, with 8 GB", "Lenovo S850", "Lenovo S860 Titanium", "Lenovo S880 White", "Lenovo S920 Blue", "Lenovo S920 White", "Lenovo S930 Silver", "Lenovo Vibe X Silver", "Lenovo Vibe Z K910 Silver", "Lenovo Vibe Z K910 Titanium", "MTS Blaze 4", "MTS Blaze 4.5", "MTS Blaze 5.0 White", "MTS Dual CG 131", "MTS Dual CG 141", "MTS Rockstar M131", "MTS Rockstar M141 Red", "Magicon Senior Duo White", "Maxx AX3 Black", "Maxx AX8 Black", "Maxx GenxDroid7 - AX352 Black", "Maxx GenxDroid7 - AX407 Black", "Maxx MSD7 Smarty Black", "Maxx MX426 - Supremo Red", "Maxx Note I AX8 Black", "Maxx Race AX8 Black", "Maxx Race AX9Z White", "Maxx Zippy MT616 Coffee", "Micromax A069 Grey", "Micromax A069 White", "Micromax A069 Yellow", "Micromax A091 C Engage Grey", "Micromax A093 White \u0026 Gold", "Micromax Aisha A52 White", "Micromax Bling 3 A86 White", "Micromax Bolt A068 Blue", "Micromax Bolt A068 White", "Micromax Bolt A075 Blue", "Micromax Bolt A089 Black", "Micromax Bolt A089 White", "Micromax Bolt A24 Champange", "Micromax Bolt A36 Black", "Micromax Bolt A37 Black", "Micromax Bolt A37B Black", "Micromax Bolt A46 Black", "Micromax Bolt A47 Black", "Micromax Bolt A58 Black", "Micromax Bolt A58 Red", "Micromax Bolt A59 Grey", "Micromax Bolt A61 Grey", "Micromax Bolt A62 Black", "Micromax Bolt A62 White", "Micromax Bolt A66 Black", "Micromax Bolt A67 Black", "Micromax Bolt A67 White", "Micromax Bolt A69", "Micromax Bolt A71 Black", "Micromax Bolt A71 White", "Micromax Bolt GC232 Black \u0026 Silver", "Micromax Bolt X101 White", "Micromax Bolt X287 Grey", "Micromax C210 White", "Micromax CDMA C200 Black \u0026 White", "Micromax CG666 Black \u0026 Grey", "Micromax CG666 White", "Micromax Canvas 2 Colors A120 with 4 GB ROM Grey", "Micromax Canvas 2 Colors A120 with 4 GB ROM White", "Micromax Canvas 2 Colors A120 with 8 GB ROM Grey", "Micromax Canvas 2.2 A114 Black", "Micromax Canvas 2.2 A114 White", "Micromax Canvas 4 A210 Grey", "Micromax Canvas Blaze HD EG116 Black", "Micromax Canvas Blaze MT500", "Micromax Canvas Doodle 2 A240 Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM Blue", "Micromax Canvas Doodle 3 A102 with 1 GB RAM White", "Micromax Canvas Doodle 3 A102 with 512 MB RAM Blue", "Micromax Canvas Doodle 3 A102 with 512 MB RAM White", "Micromax Canvas Doodle A111 White", "Micromax Canvas Duet AE90 Black", "Micromax Canvas Ego A113 Grey", "Micromax Canvas Elanza 2 A121 Black", "Micromax Canvas Elanza A93 Black Silver", "Micromax Canvas Elanza A93 Blue \u0026 Grey", "Micromax Canvas Elanza A93 Coffee", "Micromax Canvas Entice A105 Grey", "Micromax Canvas Fire A093 Black \u0026 Gold", "Micromax Canvas Fire A104 Black Gold", "Micromax Canvas Fun A63 Blue", "Micromax Canvas Fun A63 Yellow", "Micromax Canvas Fun A76 Black", "Micromax Canvas Gold A300 Black Gold", "Micromax Canvas Gold A300 White Gold", "Micromax Canvas HD Plus A190 Black", "Micromax Canvas Juice A177 Black", "Micromax Canvas Juice A77 White", "Micromax Canvas Knight A350 Black", "Micromax Canvas Knight A350 Black \u0026 Gold", "Micromax Canvas Knight A350 White \u0026 Gold", "Micromax Canvas Knight Cameo A290 White \u0026 Gold", "Micromax Canvas L A108 Blue", "Micromax Canvas Magnus A117 Blue", "Micromax Canvas Music A88 Black", "Micromax Canvas Music A88 White", "Micromax Canvas Power A96 Black", "Micromax Canvas Turbo A250 White", "Micromax Canvas Turbo Mini A200 Black", "Micromax Canvas Turbo Mini A200 White", "Micromax Canvas Win W121", "Micromax Canvas XL A119 White", "Micromax Canvas XL2 A109 White", "Micromax EG111 Black", "Micromax Fire 2 A104 White", "Micromax GC222 Black", "Micromax GC222 White", "Micromax GC666 Black \u0026 Grey", "Micromax Knight Cameo A290 White", "Micromax MAd A94 Grey", "Micromax Ninja A91 Black", "Micromax Rockstar C192 Black", "Micromax Smarty 3.0 A30 Black", "Micromax Smarty 4.3 A65 White", "Micromax Unite 2 A106 with 4 GB ROM Green", "Micromax Unite 2 A106 with 4 GB ROM Grey", "Micromax Unite 2 A106 with 4 GB ROM Red", "Micromax Unite 2 A106 with 4 GB ROM White", "Micromax Unite 2 A106 with 8 GB ROM Grey, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM Red, with 8 GB ROM", "Micromax Unite 2 A106 with 8 GB ROM White, with 8 GB ROM", "Micromax Unite A092 Black", "Micromax Unite A092 Grey", "Micromax Unite A092 Red", "Micromax Unite A092 White", "Micromax Unite A092 Yellow", "Micromax X084 Black \u0026 Red", "Micromax X084 White Silver", "Micromax X085 Black \u0026 Red", "Micromax X086 White", "Micromax X088 Black \u0026 Red", "Micromax X088 Black \u0026 Silver", "Micromax X089 Black", "Micromax X096 Black", "Micromax X096 White", "Micromax X097 Black", "Micromax X098 Grey", "Micromax X098 Red", "Micromax X101i White", "Micromax X101i Yellow", "Micromax X103i White", "Micromax X103i Yellow", "Micromax X247 Black", "Micromax X249 Black", "Micromax X251 Grey", "Micromax X253 Black", "Micromax X254 Grey", "Micromax X258 Black", "Micromax X267 Black", "Micromax X267 White", "Micromax X279i Grey", "Micromax X281 Grey", "Micromax X282 Grey", "Micromax X325 Grey", "Micromax X328 Grey", "Micromax X329 Black", "Micromax X337 Grey", "Micromax X351 Black Silver", "Micromax X367 Grey", "Micromax X44 Pearl White", "Micromax X455i White", "Micromax X55 Coffee", "Moto E Black", "Moto E White", "Moto X 16 GB Bamboo", "Moto X 16 GB Black", "Moto X 16 GB Red", "Moto X 16 GB Teak", "Moto X 16 GB Walnut", "Moto X 16 GB White", "Mtech A6 Infinity Black", "Mtech A6 Infinity White", "Mtech Fusion Black", "Mtech Fusion Blue", "Mtech G 14 Black", "Mtech G22 Black", "Mtech G22 White", "Mtech G4 Black", "Mtech Jazz Black", "Mtech Jazz White", "Mtech L6 Black", "Mtech L6 Blue", "Mtech L6 Brown", "Mtech Lotus Black", "Mtech Opal 3G Black \u0026 White", "Mtech Pride Blue", "Mtech Pride Red", "Mtech Rock Black", "Mtech Sharp Black", "Mtech Sharp Cyan", "Mtech Sharp Golden", "Mtech Spark Black", "Mtech Spark Black \u0026 White", "Mtech Spark Blue", "Mtech Touch Opal PRO Grey", "Mtech Touch Opal PRO White", "Mtech V22 Black", "Mtech V22 White", "Nokia 105 Black", "Nokia 105 Cyan", "Nokia 106 Black", "Nokia 106 Red", "Nokia 106 White", "Nokia 107 Black", "Nokia 107 Red", "Nokia 107 White", "Nokia 108 Black", "Nokia 108 Cyan", "Nokia 108 Red", "Nokia 108 White", "Nokia 108 Yellow", "Nokia 112 Red", "Nokia 112 White", "Nokia 114 Black", "Nokia 114 Cyan", "Nokia 206 Black, with Dual SIM", "Nokia 206 Cyan, with Dual SIM", "Nokia 206 White, with Dual SIM", "Nokia 208DS Black, with Dual SIM", "Nokia 208DS Red, with Dual SIM", "Nokia 220 Black", "Nokia 220 Red", "Nokia 220 White", "Nokia 220 Yellow", "Nokia 225 Black", "Nokia 225 Bright Red", "Nokia 225 Bright Yellow", "Nokia 225 White", "Nokia 301 Black", "Nokia 301 White", "Nokia 515 Black", "Nokia 515 White", "Nokia Asha 210 Black", "Nokia Asha 210 Cyan", "Nokia Asha 210 Yellow", "Nokia Asha 230 Black", "Nokia Asha 230 Bright Red", "Nokia Asha 230 White", "Nokia Asha 305 Dark Grey", "Nokia Asha 305 Mid Blue", "Nokia Asha 305 Silver White", "Nokia Asha 308 Golden Light", "Nokia Asha 310 White", "Nokia Asha 311 Dark Grey", "Nokia Asha 311 Sand White", "Nokia Asha 500 Black", "Nokia Asha 500 Bright Red", "Nokia Asha 500 White", "Nokia Asha 500 Yellow", "Nokia Asha 501 Black", "Nokia Asha 501 Bright Red", "Nokia Asha 501 White", "Nokia Asha 501 Yellow", "Nokia Asha 502 Black", "Nokia Asha 502 Bright Red", "Nokia Asha 502 White", "Nokia Asha 502 Yellow", "Nokia Asha 503 Black", "Nokia Asha 503 Bright Red", "Nokia Asha 503 White", "Nokia Asha 503 Yellow", "Nokia Lumia 1320 Black", "Nokia Lumia 1320 Orange", "Nokia Lumia 1320 White", "Nokia Lumia 1320 Yellow", "Nokia Lumia 1520 Black", "Nokia Lumia 1520 Red", "Nokia Lumia 1520 White", "Nokia Lumia 1520 Yellow", "Nokia Lumia 520 Black", "Nokia Lumia 520 Cyan", "Nokia Lumia 520 Red", "Nokia Lumia 520 White", "Nokia Lumia 520 Yellow", "Nokia Lumia 525 Black", "Nokia Lumia 525 Orange", "Nokia Lumia 525 White", "Nokia Lumia 525 Yellow", "Nokia Lumia 530 Dual SIM Bright Orange", "Nokia Lumia 530 Dual SIM Dark Grey", "Nokia Lumia 530 Dual SIM White", "Nokia Lumia 610 Cyan", "Nokia Lumia 610 White", "Nokia Lumia 620 Black", "Nokia Lumia 620 White", "Nokia Lumia 620 Yellow", "Nokia Lumia 625 Black", "Nokia Lumia 625 Green", "Nokia Lumia 625 Orange", "Nokia Lumia 625 White", "Nokia Lumia 625 Yellow", "Nokia Lumia 630 Dual SIM Black", "Nokia Lumia 630 Dual SIM Bright Green", "Nokia Lumia 630 Dual SIM Bright Orange", "Nokia Lumia 630 Dual SIM Bright Yellow", "Nokia Lumia 630 Dual SIM White", "Nokia Lumia 630 Single SIM Black", "Nokia Lumia 630 Single SIM Bright Green", "Nokia Lumia 630 Single SIM Bright Orange", "Nokia Lumia 630 Single SIM Bright Yellow", "Nokia Lumia 630 Single SIM White", "Nokia Lumia 920 White", "Nokia Lumia 925 Black", "Nokia Lumia 925 Grey", "Nokia Lumia 925 White", "Nokia X Black", "Nokia X Bright Green", "Nokia X Bright Red", "Nokia X Cyan", "Nokia X White", "Nokia X Yellow", "Nokia X+ Black", "Nokia X+ Bright Green", "Nokia X+ Yellow", "Nokia XL Black", "Nokia XL Bright Green", "Nokia XL Bright Orange", "Nokia XL Bright Yellow", "Nokia XL Cyan", "Nokia XL White", "Nuclear SX 5.3i Smartphone Black", "OPPO Find 5 Mini R827 Black", "OPPO Find 5 Mini R827 White", "OPPO Find 7 X9076 Black", "OPPO Find 7 X9076 White", "OPPO Find 7a X9006 Black", "OPPO Find 7a X9006 White", "OPPO Joy R1001 Black", "OPPO Joy R1001 White", "OPPO N1 Mini Lemon", "OPPO N1 Mini Mint", "OPPO N1 Mini White", "OPPO N1 White", "OPPO Neo 3 R831K Grey", "OPPO Neo 3 R831K White", "OPPO R1 829 Black", "OPPO R1 829 White", "OPPO Yoyo R2001 Black", "OPPO Yoyo R2001 White", "Olive V-C2130 Black", "Onida G Series G180 Black", "Onida G Series G181 Black \u0026 Red", "Onida G007S Black", "Onida G182 Black", "Onida G183 Black \u0026 Red", "Onida G183 Multicolor", "Onida G242 Black \u0026 Red", "Onida G640A Grey \u0026 Silver", "Onida i011 Black", "Onida i011 White", "Onida i099 Black", "Onida i666 W4413 White", "Onida i666 White", "Onida i777 W4213 White", "Panasonic Eluga A White", "Panasonic Eluga U Black", "Panasonic Eluga U White", "Panasonic GD 28 Black", "Panasonic GD21 Grey", "Panasonic GD31 Black", "Panasonic GD31 White", "Panasonic P11 with Changeable Back Covers", "Panasonic P31 Midnight Blue", "Panasonic P31 Pure White", "Panasonic P41 Black", "Panasonic P51 Black", "Panasonic P51 White", "Panasonic P61 Black", "Panasonic P61 White", "Panasonic P81 Black", "Panasonic T11 White", "Panasonic T21", "Panasonic T31 Black", "Panasonic T31 White", "Panasonic T41 Black", "Panasonic T41 White", "Rage Ace_Black Red", "Rage Ace_Blue Black", "Rage Ace_Green Black", "Rage Ace_White White", "Rage Duke_Green Green", "Rage Glory_Black Silver", "Rage Hero Black \u0026 Grey", "Rage Hero Black \u0026 Red", "Rage Hero White \u0026 Blue", "Rage Magic-50 Black", "Rage Magic-50 White", "Rage Minni_White White", "Rage OPS 35g Blue", "Rage OPS 60dn White", "Rage OPS 80 White", "Rage OPS 80d Black", "Rage OPS 80d White", "Rage OPS 80q Black", "Rage Ps16 Black \u0026 Silver", "Rage Ps16 White \u0026 Silver", "Rage Ps20 White \u0026 Red", "Rage Silk_Blue Black", "Rage Silk_Golden Black", "Rage Storm_Blue Blue", "Rage Storm_White White", "Rage Ultra Black", "Rage Vega White", "Salora SM204 Red", "Salora SM508 Blue \u0026 Black", "Salora SM601 Black \u0026 Gold", "Samsung E2252 Metallic Silver", "Samsung E2252 Pure White", "Samsung G350 White", "Samsung GT 1200 R/I/M", "Samsung Galaxy Ace NXT-G313H White", "Samsung Galaxy Core 2 SM-G355H Black", "Samsung Galaxy Core 2 SM-G355H White", "Samsung Galaxy Core I8262 Chic White", "Samsung Galaxy Golden I9230 Champagne Gold", "Samsung Galaxy Grand 2 Black", "Samsung Galaxy Grand 2 White", "Samsung Galaxy Grand Duos I9082 Elegant White, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Duos I9082 Metallic Blue, with 2 Flip Covers Color: White and Blue", "Samsung Galaxy Grand Neo GT-I9060 Midnight Black", "Samsung Galaxy Grand Neo GT-I9060 White", "Samsung Galaxy Mega 5.8 I9152 White", "Samsung Galaxy Note 2 N7100 Marble White", "Samsung Galaxy Note 2 N7100 Titanium Grey", "Samsung Galaxy Note 3 N9000 Blush Pink", "Samsung Galaxy Note 3 N9000 Classic White", "Samsung Galaxy Note 3 N9000 Jet Black", "Samsung Galaxy Note 3 Neo Black", "Samsung Galaxy Note 3 Neo White", "Samsung Galaxy S Duos 2 S7582 Black", "Samsung Galaxy S Duos 2 S7582 Pure White", "Samsung Galaxy S3 Marble White, with 16GB", "Samsung Galaxy S3 Neo GT-I9300I Blue", "Samsung Galaxy S3 Neo GT-I9300I Marble White", "Samsung Galaxy S4 I9500 Black Mist", "Samsung Galaxy S4 I9500 Deep Black", "Samsung Galaxy S4 I9500 White Frost", "Samsung Galaxy S4 Mini I9192 Black Mist", "Samsung Galaxy S4 Mini I9192 White Frost", "Samsung Galaxy S4 Zoom SM-C1010 White", "Samsung Galaxy S5 Charcoal Black", "Samsung Galaxy S5 Copper Gold", "Samsung Galaxy S5 Electric Blue", "Samsung Galaxy S5 Shimmery White", "Samsung Galaxy Star Pro S7262 Midnight Black", "Samsung Galaxy Star Pro S7262 White", "Samsung Galaxy Star S5282 Ceramic White", "Samsung Galaxy Star S5282 Noble Black", "Samsung Galaxy Star S5282 Silver", "Samsung Galaxy Trend S7392 Ceramic White, with 4 GB", "Samsung Galaxy Trend S7392 Midnight Black", "Samsung Galaxy Y S5360 Pure White", "Samsung Guru 1200 Black", "Samsung Guru 1200 Indigo Blue", "Samsung Guru 1200 White", "Samsung Guru E1207T Black", "Samsung I8552 - Galaxy Grand Quattro Ceramic White", "Samsung I8552 - Galaxy Grand Quattro Titan Gray", "Samsung Keystone 2 E1207Y Black", "Samsung Metro DUOS C3322 Deep Black", "Samsung Omnia M S7530 Deep Gray", "Samsung S6812 - Galaxy Fame Metallic Blue", "Samsung S7262 Wine Red", "Sansui SA40 Black", "Sansui SA50 Plus Grey", "Simmtronics Xpad M1 Black", "Simmtronics Xpad Q1 Black", "Simmtronics Xpad Q4", "Simmtronics Xpad Q4 Black", "Simmtronics Xpad Q5 Black", "Sony Xperia C Black", "Sony Xperia C Purple", "Sony Xperia C White", "Sony Xperia C3 Black", "Sony Xperia C3 White", "Sony Xperia E Black", "Sony Xperia E Dual Champagne", "Sony Xperia E White", "Sony Xperia E1 Black", "Sony Xperia E1 Dual Black", "Sony Xperia E1 Dual Purple", "Sony Xperia E1 Dual White", "Sony Xperia E1 Purple", "Sony Xperia E1 White", "Sony Xperia Go Warm Yellow", "Sony Xperia L Rose Red", "Sony Xperia L Starry Black", "Sony Xperia M Black", "Sony Xperia M Dual Black", "Sony Xperia M Dual Purple", "Sony Xperia M Dual White", "Sony Xperia M Purple", "Sony Xperia M White", "Sony Xperia M2 Dual Black", "Sony Xperia M2 Dual Purple", "Sony Xperia M2 Dual White", "Sony Xperia Miro Black", "Sony Xperia Miro White with Silver Strip", "Sony Xperia Neo L Glossy Black", "Sony Xperia P Black", "Sony Xperia P Red", "Sony Xperia P Silver", "Sony Xperia SP Black", "Sony Xperia SP Red", "Sony Xperia SP White", "Sony Xperia T2 Ultra Black", "Sony Xperia T2 Ultra Purple", "Sony Xperia T2 Ultra White", "Sony Xperia T3 Black", "Sony Xperia T3 Purple", "Sony Xperia T3 White", "Sony Xperia Tipo Classic White", "Sony Xperia Tipo Dual Classic Silver", "Sony Xperia Z Black", "Sony Xperia Z Purple", "Sony Xperia Z Ultra Black", "Sony Xperia Z Ultra Purple", "Sony Xperia Z Ultra White", "Sony Xperia Z White", "Sony Xperia Z1 Black", "Sony Xperia Z1 Compact Black", "Sony Xperia Z1 Compact Lime", "Sony Xperia Z1 Compact Pink", "Sony Xperia Z1 Compact White", "Sony Xperia Z1 Purple", "Sony Xperia Z1 White", "Sony Xperia Z2 Black", "Sony Xperia Z2 Purple", "Sony Xperia Z2 White", "Sony Xperia ZR White", "Spice Boss Champion 2 M-5008 Black", "Spice Boss Chocolate M-5373 Black", "Spice Boss Delite M-5162 White", "Spice Boss Link M-5621 Black", "Spice Boss M-5470 Grey", "Spice Boss Slender 2 M-5404 White", "Spice Boss Slender M-5371", "Spice Boss Trendy 4 M-5004 Black", "Spice Boss Trendy 5 M-5032 White", "Spice Boss Trio M-5025 Black", "Spice Buddy N-300 Midnight Black", "Spice Coolpad 2 Mi-496 White", "Spice Flo Rainbow M-6111", "Spice Flo Sleek M-5915", "Spice M-5415 Black", "Spice Smart Flo Edge Mi-349 White", "Spice Smart Flo Mettle 3.5X Mi-356 White", "Spice Smart Flo Mettle 4X Mi-426 White", "Spice Smart Flo Mettle 5X Mi-504 Black", "Spice Smart Flo Mettle 5X Mi-504 White", "Spice Smart Flo Pace 3 Mi-502n White", "Spice Smart Flo Pace Mi-422 White", "Spice Smart Flo Poise Mi-451", "Spice Stellar 360", "Spice Stellar 361 Black", "Spice Stellar 361 White", "Spice Stellar 445 Black", "Spice Stellar 497 White", "Spice Stellar 506 Titanium Grey", "Spice Stellar 509", "Spice Stellar 520 Red", "Spice Stellar 520 Yellow", "Spice Stellar Glamor Mi-436", "Spice Stellar Glide Mi-438 Silver", "Spice Stellar Horizon Pro Mi-505 White", "Spice Stellar Mettle Icon Mi-506 Silver", "Spice Stellar Nhance 2 Mi-437", "Spice Stellar Pinnacle Pro Mi-535 Brown", "Spice Stellar Virtuoso Pro Mi-491 Black", "Spice Steller Virtuoso Pro+ Mi-492 White", "Swingtel Mini SX3 White", "Swingtel SW27 Black", "Swingtel SW27 White", "Swingtel SW30 Black", "Swingtel SW30 Silver", "Swingtel SW30 White", "Swingtel SW50+ Black", "Swingtel SW50+ Red", "Swingtel Superb White", "Swingtel Tigertab White, Red, Grey", "Swipe Fablet F2 White", "Swipe Konnect 5.0 Black", "Swipe Konnect 5.0 White", "Swipe Sense Black", "Swipe Sonic Black", "menshoesC Android 2.2 Smartphone Black", "Trio T2020L Black \u0026 Blue", "Trio T2020L Black \u0026 Grey", "Trio T2020L White \u0026 Blue", "Trio T2020XL Black \u0026 Blue", "Trio T2020XL Black \u0026 Gold", "Trio T2020XL Black White", "Trio T2424 Black \u0026 Green", "Trio T2424 Black \u0026 Red", "Trio T2424 White \u0026 Blue", "Trio T2424XL Black \u0026 Blue", "Trio T2424n Black \u0026 Blue", "Trio T2424n Black White", "Trio T2626 Black", "Trio T2626 White \u0026 Blue", "Trio T2626 White \u0026 Yellow", "Trio T2828 Black \u0026 Grey", "Trio T2828 Black White", "V3 Bizz GQ225 Grey", "Videocon A 54 White", "Videocon A 55q HD Black", "Videocon A15 Black", "Videocon A15 White Chrome", "Videocon A16 Black", "Videocon A16 White", "Videocon A42 Black", "Videocon A48 White", "Videocon A52 White", "Videocon A53 White Chrome", "Videocon A55 HD Black \u0026 Silver", "Videocon A55HD White", "Videocon Dost V1539 N Black Silver", "Videocon Dost V1615 Black", "Videocon Dost V1615 Silver", "Videocon V1508 Black", "Videocon V1544 Black \u0026 Silver", "Videocon vphone Gold", "Videocon vphone White", "Vox Kick 5 Black", "Vox Kick 5 White", "Vox V-3100 Black", "Vox V-3100 White", "Wham W20i Black", "Wham W24i Black", "Wham W26i Black", "Wynncom W101 Black", "Wynncom WYNNW412 Black", "XElectron AN1 Black", "XElectron BluEye Black", "XElectron M007 Black", "XElectron M998 Black", "XElectron N100 Black", "XElectron X1 White", "XElectron X1Black Black", "XOLO 8X-1000 Black", "XOLO A500 Club Black", "XOLO A500 Club White", "XOLO A500S Black", "XOLO A500S IPS Black", "XOLO A500S IPS Green", "XOLO A500S IPS Red", "XOLO A500S White", "XOLO A500s Lite Black", "XOLO A500s Lite White", "XOLO A550S IPS Black", "XOLO A600 Black", "XOLO A600 Blue", "XOLO A600 White", "XOLO A600 Yellow", "XOLO A700S Black", "XOLO LT900 Black", "XOLO Opus 2 Q1000 Black", "XOLO Play 6X-1000 Black", "XOLO Play 6X-1000 White", "XOLO Play Black", "XOLO Q1000 Black", "XOLO Q1000 Opus Black", "XOLO Q1000 Opus White", "XOLO Q1000 White", "XOLO Q1000S Black", "XOLO Q1000S Plus Black", "XOLO Q1010 White", "XOLO Q1010i Black", "XOLO Q1010i Coffee Brown", "XOLO Q1010i White", "XOLO Q1011 Black", "XOLO Q1011 White", "XOLO Q1100 Black", "XOLO Q1200 Black", "XOLO Q1200 White", "XOLO Q2000 White", "XOLO Q2000L White", "XOLO Q2500 Black", "XOLO Q3000 Black", "XOLO Q3000 White", "XOLO Q500S IPS Black", "XOLO Q500S IPS Green", "XOLO Q500S IPS Red", "XOLO Q600 White", "XOLO Q600S Black", "XOLO Q600S White", "XOLO Q700S Gold", "XOLO Q700S Plus Gold", "XOLO Q700S Silver", "XOLO Q700i Black", "XOLO Q900 White", "XOLO Q900S Black", "XOLO Q900T", "XOLO Win Q900s Black", "XOLO X1000 Black", "Y King Y 10 Black", "Y King Y 10 White", "Y King Y 20 Black", "Y King Y 30 Black", "Y King Y 30 White", "ZTE Blade C V807 Black", "ZTE Blade L V887", "ZTE Grand X Quad Lite Blue", "ZTE Grand X Quad Lite White", "ZTE Reliance d286 Black", "ZTE Reliance d286 White", "ZTE S183Reliance CDMA Only Black", "Zen 303 Power Black", "Zen 306 Ultrafone 306 Play Black \u0026 Red", "Zen 701 Amaze 701 Full Hd Black", "Zen P36 Black", "Zen U 504 B Black", "Zen U 504 W White", "Zen Ultrafone 502qHD Black", "Zook Boss Black", "Zook Brave Brown", "Zook Brilliant Grey", "Zook IMAX Blue", "Zook Iconic Black", "Zook Iconic Gold", "Zook Ideal Black", "Zook Ideal Gold", "Zook Keypad Sliver", "Zook Keypad White", "Zync Cloud Z401", "Zync X108 White", "Zync X207 Black", "iBall 4PIPS Gem Black", "iBall Andi 3.5 Classique With 1.3 Ghz Processor White", "iBall Andi 4.5 2G Grey", "iBall Andi 4.5 2G Ripple White", "iBall Andi 4.5 3G Ripple White", "iBall Andi 4.5 3G Wine \u0026 Gunmetal", "iBall Andi 4.5D Royale", "iBall Andi 4.7G Cobalt", "iBall Andi 5-M8 Black", "iBall Andi 5.5N2 Quadro", "iBall Andi 5K Sparkle White White", "iBall Andi 5K Sparkle Wine Special Wine", "iBall Andi 5T Cobalt 2", "iBall Andi Uddaan", "iBall Andi3.5kke Genius Black", "iBall Andi3.5kke Genius White", "iBall Andi3.5kke Winner Black", "iBall Andi3.5kke Winner White", "iBall Andi4 B2 Black", "iBall Andi4 Gem Black", "iBall Andi4 Gem White", "iBall Andi4 Velvet Black", "iBall Andi4 Velvet White", "iBall Andi4.5P Glitter White", "iBall Andi4.5P Glitter Yellow", "iBall Andi4.5Q White", "iBall Andi4.5d Royale White", "iBall Andi5-E7 Grey", "iBall IPS Tiger Andi4 Royal Blue", "iBall Iball Vogue 2.8A Slim Bar Design White White", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Black", "iBall King 1.8D Mobile Sound Ka Maharaja With Chamber Speakers Yellow", "iBall King1.8D White", "iBall Senior Aasaan2 White", "iBall Shaan Fab2.4V8 Black \u0026 Blue", "iBall Shaan Fab2.4V8 Black \u0026 Yellow", "iBall Vogue 1.8-KK18 Black", "iBall Vogue 1.8-KK7 Yellow", "iBall Vogue 2.4 kk1 Grey", "iBall Vogue2.4e Black", "iBall iBall Andi 3.5kke Glory Special Wine", "iBall iBall Vogue 2.8A Slim Bar Design Grey Grey"]


        $scope.pricedivisionsmenshoes = [
            {
                price: "Rs. 2000 and below"
            },
            {
                price: "Rs 2001 - 5000"
            },
            {
                price: "Rs 5001 - 10000"
            },
            {
                price: "Rs 10001 - 18000"
            },
            {
                price: "Rs 18001 - 25000"
            },
            {
                price: "Rs 25001 - 35000"
            },
            {
                price: "Rs 35001 and above"
            }
        ];


        // menshoes divisions for changes
        $scope.$watch('menshoesesdivisions|filter:{selected:true}', function (nv) {
            $scope.menshoestradeshow.menshoesDivisions = nv.map(function (division) {
                //alert(division.brand);
                console.log({name: division.brand});
                return {name: division.brand};
            });

            var display = 0;
            if (angular.toJson($scope.menshoestradeshow.menshoesDivisions).length > 0 && angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes).length > 0
                && angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes).length > 0) {
                //show brand, color and price
                display = 1;
            } else if (angular.toJson($scope.menshoestradeshow.menshoesDivisions).length > 0 && angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes).length > 0
                && angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes).length < 0) {
                //show only brand and color
                display = 2;
            } else if (angular.toJson($scope.menshoestradeshow.menshoesDivisions).length > 0 && angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes).length < 0
                && angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes).length < 0) {
                //show only brand
                display = 3;
            } else if (angular.toJson($scope.menshoestradeshow.menshoesDivisions).length < 0 && angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes).length > 0
                && angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes).length > 0) {
                //show only color and price
                display = 4;
            } else if (angular.toJson($scope.menshoestradeshow.menshoesDivisions).length < 0 && angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes).length > 0
                && angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes).length < 0) {
                //show only color
                display = 5;
            } else if (angular.toJson($scope.menshoestradeshow.menshoesDivisions).length < 0 && angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes).length < 0
                && angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes).length < 0) {
                //show none
                display = 6;
            } else if (angular.toJson($scope.menshoestradeshow.menshoesDivisions).length < 0 && angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes).length < 0
                && angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes).length > 0) {
                //show price
                display = 7;
            }

            switch (display) {
                case 1:
                    $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                        color: angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes), price: angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes), productType: 'menshoes'});
                    break;
                case 2:
                    $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                        color: angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes), price: angular.toJson($scope.priceDivisionsmenshoes), productType: 'menshoes'});
                    break;
                case 3:
                    $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                        color: angular.toJson($scope.colorDivisionsmenshoes), price: angular.toJson($scope.priceDivisionsmenshoes), productType: 'menshoes'});
                    break;
                case 4:
                    $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                        color: angular.toJson($scope.colortradeshowmenshoes.colorDivisions), price: angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes), productType: 'menshoes'});
                    break;
                case 5:
                    $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                        color: angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes), price: angular.toJson($scope.priceDivisionsmenshoes), productType: 'menshoes'});
                    break;
                case 6:
                    //  $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                    //    color: angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes), price: angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes), productType: productType});
                    break;
                case 7:
                    $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                        color: angular.toJson($scope.colorDivisionsmenshoes), price: angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes), productType: 'menshoes'});
                    break;
                default:
                    break;
            }


            console.log("tradeshowmenshoes" + angular.toJson($scope.menshoestradeshow.menshoesDivisions));
            //$location.path('/view2');
        }, true);


        $scope.colortradeshowmenshoes = { };
        $scope.colortradeshowmenshoes.colorDivisionsmenshoes = [];


        // helper method
        $scope.selectedColorDivisionsmenshoes = function selectedColorDivisionsmenshoes() {
            return filterFilter($scope.colortradeshowmenshoes.colorDivisionsmenshoes, { selected: true });
        };

        // menshoes divisions for changes
        $scope.$watch('colordivisionsmenshoes|filter:{selected:true}', function (nv1) {
            $scope.colortradeshowmenshoes.colorDivisionsmenshoes = nv1.map(function (colordivisionmenshoes) {
                //alert(division.brand);
                console.log({color: colordivisionmenshoes.color});
                return {color: colordivisionmenshoes.color};
            });
            $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                color: angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes), price: angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes), productType: 'menshoes'});
            console.log("colortradeshowmenshoes" + angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes));
            //  $location.path('/view2');
        }, true);


        $scope.pricetradeshowmenshoes = { };
        $scope.pricetradeshowmenshoes.priceDivisionsmenshoes = [];


        // helper method
        $scope.selectedPriceDivisionsmenshoes = function selectedPriceDivisionsmenshoes() {
            return filterFilter($scope.pricetradeshowmenshoes.priceDivisionsmenshoes, { selected: true });
        };


        // menshoes divisions for changes
        $scope.$watch('pricedivisionsmenshoes|filter:{selected:true}', function (nv2) {
            $scope.pricetradeshowmenshoes.priceDivisionsmenshoes = nv2.map(function (pricedivisionmenshoes) {
                //alert(division.brand);
                console.log({price: pricedivisionmenshoes.price});
                return {price: pricedivisionmenshoes.price};
            });
            $rootScope.menshoeslist = CameraFactory.brandName.query({brands: angular.toJson($scope.menshoestradeshow.menshoesDivisions),
                color: angular.toJson($scope.colortradeshowmenshoes.colorDivisionsmenshoes), price: angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes), productType: 'menshoes'});
            console.log("pricetradeshowmenshoes" + angular.toJson($scope.pricetradeshowmenshoes.priceDivisionsmenshoes));
            // $location.path('/view2');
        }, true);


        $scope.getmenshoesInfo = function (product) {
            console.log("getProductInfo - " + product.productName);
            //$rootScope.productInfo = UserFactory.productdetails.query({key: product.productName, productType: productType});

            $rootScope.pricecompare = {productName: ""};
            $rootScope.pricecompare = CameraFactory.productdetails.query({key: product.productName, productType: 'menshoes'});
            console.log("price compare - " + $rootScope.pricecompare.length);

            $rootScope.productInfo = product;
            $rootScope.image = product.productImage;
            console.log("productInfo length - " + product.productImage);
            console.log("productInfo length - " + $rootScope.image);
            console.log("productInfo length - " + $scope.productInfo.productName);

            $scope.$watch($rootScope.productInfo, function (newVal) {
                //alert("Changed an input");
            }, true);

            $scope.$watch($rootScope.pricecompare, function (newVal) {
                //alert("Changed an input");
            }, true);

            //  $location.path('/view2');
        }


    }]);






