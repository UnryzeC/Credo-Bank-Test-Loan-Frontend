Ext.define('MyApp.view.login.Login',
    {
        extend: 'Ext.window.Window',
        xtype: 'login',

        requires:
        [
            'MyApp.view.login.LoginController',
            'Ext.form.Panel'
        ],

        controller: 'login',
        bodyPadding: 10,
        title: 'Login',
        closable: false,
        autoShow: true,
		resizeHandles: '',
		width: 350,

        items:
        {
            xtype: 'form',
            reference: 'form',
            items:
            [
                {
					xtype: 'textfield',
					name: 'email',
					fieldLabel: 'Email',
					allowBlank: false,
					width: 325,
                },
                {
                    xtype: 'textfield',
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    allowBlank: false,
					width: 325,
                },
                {
                    xtype: 'displayfield',
                    hideEmptyLabel: false,
                    value: 'Please enter your password'
                }
            ],
            buttons:
            [
                {
					xtype: 'button',
					width: 152,
                    text: 'Login',
                    formBind: true,
                    listeners:
                    {
                        click: 'onLoginClick'
                    }
                },
                {
					xtype: 'button',
					width: 152,
                    text: 'Sign up',
                    listeners: 
                    {
                        click: 'onSignupClick'
                    }
                }
            ]
        }
    }
);
