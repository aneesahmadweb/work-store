(function(require){
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            systemMessageDialog: 'Magento_AdminNotification/system/notification',
            toolbarEntry:   'Magento_AdminNotification/toolbar_entry'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    "waitSeconds": 0,
    "map": {
        "*": {
            "ko": "knockoutjs/knockout",
            "knockout": "knockoutjs/knockout",
            "mageUtils": "mage/utils/main",
            "rjsResolver": "mage/requirejs/resolver"
        }
    },
    "shim": {
        "jquery/jquery-migrate": ["jquery"],
        "jquery/jquery.hashchange": ["jquery", "jquery/jquery-migrate"],
        "jquery/jstree/jquery.hotkeys": ["jquery"],
        "jquery/hover-intent": ["jquery"],
        "mage/adminhtml/backup": ["prototype"],
        "mage/captcha": ["prototype"],
        "mage/common": ["jquery"],
        "mage/new-gallery": ["jquery"],
        "mage/webapi": ["jquery"],
        "jquery/ui": ["jquery"],
        "MutationObserver": ["es6-collections"],
        "tinymce": {
            "exports": "tinymce"
        },
        "moment": {
            "exports": "moment"
        },
        "matchMedia": {
            "exports": "mediaCheck"
        },
        "jquery/jquery-storageapi": {
            "deps": ["jquery/jquery.cookie"]
        }
    },
    "paths": {
        "jquery/validate": "jquery/jquery.validate",
        "jquery/hover-intent": "jquery/jquery.hoverIntent",
        "jquery/file-uploader": "jquery/fileUploader/jquery.fileupload-fp",
        "jquery/jquery.hashchange": "jquery/jquery.ba-hashchange.min",
        "prototype": "legacy-build.min",
        "jquery/jquery-storageapi": "jquery/jquery.storageapi.min",
        "text": "mage/requirejs/text",
        "domReady": "requirejs/domReady",
        "tinymce": "tiny_mce/tiny_mce_src"
    },
    "deps": [
        "jquery/jquery-migrate"
    ],
    "config": {
        "mixins": {
            "jquery/jstree/jquery.jstree": {
                "mage/backend/jstree-mixin": true
            }
        }
    }
};

require(['jquery'], function ($) {
    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    "shim": {
        "extjs/ext-tree": [
            "prototype"
        ],
        "extjs/ext-tree-checkbox": [
            "extjs/ext-tree",
            "extjs/defaults"
        ],
        "jquery/editableMultiselect/js/jquery.editable": [
            "jquery"
        ]
    },
    "bundles": {
        "js/theme": [
            "globalNavigation",
            "globalSearch",
            "modalPopup",
            "useDefault",
            "loadingPopup",
            "collapsable"
        ]
    },
    "map": {
        "*": {
            "translateInline":      "mage/translate-inline",
            "form":                 "mage/backend/form",
            "button":               "mage/backend/button",
            "accordion":            "mage/accordion",
            "actionLink":           "mage/backend/action-link",
            "validation":           "mage/backend/validation",
            "notification":         "mage/backend/notification",
            "loader":               "mage/loader_old",
            "loaderAjax":           "mage/loader_old",
            "floatingHeader":       "mage/backend/floating-header",
            "suggest":              "mage/backend/suggest",
            "mediabrowser":         "jquery/jstree/jquery.jstree",
            "tabs":                 "mage/backend/tabs",
            "treeSuggest":          "mage/backend/tree-suggest",
            "calendar":             "mage/calendar",
            "dropdown":             "mage/dropdown_old",
            "collapsible":          "mage/collapsible",
            "menu":                 "mage/backend/menu",
            "jstree":               "jquery/jstree/jquery.jstree",
            "details":              "jquery/jquery.details"
        }
    },
    "deps": [
        "js/theme",
        "mage/backend/bootstrap",
        "mage/adminhtml/globals"
    ],
    "paths": {
        "jquery/ui": "jquery/jquery-ui-1.9.2"
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*eslint no-unused-vars: 0*/
var config = {
    map: {
        '*': {
            'mediaUploader':  'Magento_Backend/js/media-uploader'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'customer/template': "Magento_Customer/templates"
    },
    map: {
        '*': {
            addressTabs:            'Magento_Customer/edit/tab/js/addresses',
            dataItemDeleteButton:   'Magento_Customer/edit/tab/js/addresses',
            observableInputs:       'Magento_Customer/edit/tab/js/addresses'
        }
    } 
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            folderTree: 'Magento_Cms/js/folder-tree'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            categoryForm:       'Magento_Catalog/catalog/category/form',
            newCategoryDialog:  'Magento_Catalog/js/new-category-dialog',
            categoryTree:       'Magento_Catalog/js/category-tree',
            productGallery:     'Magento_Catalog/js/product-gallery',
            baseImage:          'Magento_Catalog/catalog/base-image-uploader',
            productAttributes:  'Magento_Catalog/catalog/product-attributes'
        }
    },
    deps: [
        'Magento_Catalog/catalog/product'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie'
        }
    } 
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            rolesTree: 'Magento_User/js/roles-tree'
        }
    } 
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderEditDialog: 'Magento_Sales/order/edit/message'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            groupedProduct: 'Magento_GroupedProduct/js/grouped-product'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            fptAttribute: 'Magento_Weee/js/fpt-attribute'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*eslint no-unused-vars: 0*/
var config = {
    map: {
        '*': {
            popupWindow:            'mage/popup-window',
            confirmRedirect:        'Magento_Security/js/confirm-redirect'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent:            'Magento_Payment/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*eslint no-unused-vars: 0*/
var config = {
    map: {
        '*': {
            newVideoDialog:  'Magento_ProductVideo/js/new-video-dialog',
            openVideoModal:  'Magento_ProductVideo/js/video-modal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            integration: 'Magento_Integration/js/integration'
        }
    } 
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            swatchesProductAttributes: 'Magento_Swatches/js/product-attributes',
            swatchesTypeChange: 'Magento_Swatches/js/type-change'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Mageplaza
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Mageplaza.com license that is
 * available through the world-wide-web at this URL:
 * https://www.mageplaza.com/LICENSE.txt
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade this extension to newer
 * version in the future.
 *
 * @category    Mageplaza
 * @package     Mageplaza_Blog
 * @copyright   Copyright (c) 2016 Mageplaza (http://www.mageplaza.com/)
 * @license     https://www.mageplaza.com/LICENSE.txt
 */

var config = {
    map: {
        '*': {
            categoryForm: 'Mageplaza_Blog/category/form',
            newCategoryDialog: 'Mageplaza_Blog/category/new-category-dialog'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
 var config = {
 	map: {
 		"*": {
 			vesBaseTinyMceWysiwygSetup: "Ves_BaseWidget/js/wysiwyg/tiny_mce/setup",
 			vesBaseBootstrap: "Ves_BaseWidget/js/bootstrap336/bootstrap",
 			vesBaseColorPicker: "Ves_BaseWidget/js/jquery/jquery.colorpicker",
 			vesBaseElfinderSetup: "Ves_BaseWidget/js/elfinder/js/elfinder.min",
 			vesBaseCommon: "Ves_BaseWidget/js/common",
 			vesBaseJqueryUi: "Ves_BaseWidget/js/jquery/ui/jquery-ui.min",
 			vesBasejQueryCookie: "Ves_BaseWidget/js/jquery/jquery.cookie",
 			vesJqueryNestable: "Ves_BaseWidget/js/jquery/jquery.nestable",
 			vesMageWidget: "Ves_BaseWidget/js/builder/widget",
			vesPageBuilder: "Ves_BaseWidget/js/builder/script",
			vesBootBox: "Ves_BaseWidget/js/jquery/bootbox.min",
			jqueryUi: "jquery/jquery-ui"
 		}
 	},
 	/*
    paths: {
        "jquery/ui": "jquery/jquery-ui"
    },*/
    deps: [
    	'mage/adminhtml/wysiwyg/widget'
    ]
 };
require.config(config);
})();
(function() {
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
var config = {
	map: {
		"*": {
			"nestable": "Ves_Megamenu/js/jquery.nestable",
			"vesknockoutjs": "Ves_Megamenu/js/vesknockoutjs",
			"vesbrowser": "Ves_Megamenu/js/vesbrowser",
			"mage/backend/bootstrap": "Ves_Megamenu/js/bootstrap"
		}
	},
	"deps": [
		"js/theme",
        "Ves_Megamenu/js/bootstrap",
        "mage/adminhtml/globals"
    ]
};
require.config(config);
})();
(function() {
var config = {
	"map": {
		"*": {
			"vesProductlistBrowser": "Ves_Productlist/js/vesbrowser",
			"vesProductlistWysiwyg": "Ves_Productlist/js/wysiwyg/tiny_mce/setup"
		}
	}
};
require.config(config);
})();
(function() {
var config = {
	"map": {
		"*": {
			"gmap": "Ves_Themesettings/js/gmap",
			"locationpicker": "Ves_Themesettings/js/locationpicker.jquery"
		}
	}
};
require.config(config);
})();



})(require);