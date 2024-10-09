<?php

use EventEspresso\core\services\request\sanitizers\AllowedTags;

/**
 * EE_Html_messenger class
 *
 * @since              4.3.0
 * @package            Event Espresso
 * @subpackage         messages
 * @author             Darren Ethier
 */
class EE_Html_messenger extends EE_messenger
{
    /**
     * The following are the properties that this messenger requires for displaying the html
     */
    /**
     * This is the html body generated by the template via the message type.
     *
     * @var string
     */
    protected $_content = '';

    /**
     * This is for the page title that gets displayed.  (Why use "subject"?  Because the "title" tag in html is
     * equivalent to the "subject" of the page.
     *
     * @var string
     */
    protected $_subject = '';


    /**
     * EE_Html_messenger constructor.
     */
    public function __construct()
    {
        // set properties
        $this->name                = 'html';
        $this->description         = esc_html__(
            'This messenger outputs a message to a browser for display.',
            'event_espresso'
        );
        $this->label               = [
            'singular' => esc_html__('html', 'event_espresso'),
            'plural'   => esc_html__('html', 'event_espresso'),
        ];
        $this->activate_on_install = true;
        // add the "powered by EE" credit link to the HTML receipt and invoice
        add_filter(
            'FHEE__EE_Html_messenger___send_message__main_body',
            [$this, 'add_powered_by_credit_link_to_receipt_and_invoice'],
            10,
            3
        );
        parent::__construct();
    }


    /**
     * HTML Messenger desires execution immediately.
     *
     * @return bool
     * @since  4.9.0
     * @see    parent::send_now() for documentation.
     */
    public function send_now(): bool
    {
        return true;
    }


    /**
     * HTML Messenger allows an empty to field.
     *
     * @return bool
     * @since  4.9.0
     * @see    parent::allow_empty_to_field() for documentation
     */
    public function allow_empty_to_field(): bool
    {
        return true;
    }


    /**
     * @see abstract declaration in EE_messenger for details.
     */
    protected function _set_admin_pages()
    {
        $this->admin_registered_pages = ['events_edit' => true];
    }


    /**
     * @see abstract declaration in EE_messenger for details.
     */
    protected function _set_valid_shortcodes()
    {
        $this->_valid_shortcodes = [];
    }


    /**
     * @see abstract declaration in EE_messenger for details.
     */
    protected function _set_validator_config()
    {
        $this->_validator_config = [
            'subject'                       => [
                'shortcodes' => ['organization', 'primary_registration_details', 'email', 'transaction'],
            ],
            'content'                       => [
                'shortcodes' => [
                    'organization',
                    'primary_registration_list',
                    'primary_registration_details',
                    'email',
                    'transaction',
                    'event_list',
                    'payment_list',
                    'venue',
                    'line_item_list',
                    'messenger',
                    'ticket_list',
                ],
            ],
            'event_list'                    => [
                'shortcodes' => [
                    'event',
                    'ticket_list',
                    'venue',
                    'primary_registration_details',
                    'primary_registration_list',
                    'event_author',
                ],
                'required'   => ['[EVENT_LIST]'],
            ],
            'ticket_list'                   => [
                'shortcodes' => [
                    'attendee_list',
                    'ticket',
                    'datetime_list',
                    'primary_registration_details',
                    'line_item_list',
                    'venue',
                ],
                'required'   => ['[TICKET_LIST]'],
            ],
            'ticket_line_item_no_pms'       => [
                'shortcodes' => ['line_item', 'ticket'],
                'required'   => ['[TICKET_LINE_ITEM_LIST]'],
            ],
            'ticket_line_item_pms'          => [
                'shortcodes' => ['line_item', 'ticket', 'line_item_list'],
                'required'   => ['[TICKET_LINE_ITEM_LIST]'],
            ],
            'price_modifier_line_item_list' => [
                'shortcodes' => ['line_item'],
                'required'   => ['[PRICE_MODIFIER_LINE_ITEM_LIST]'],
            ],
            'datetime_list'                 => [
                'shortcodes' => ['datetime'],
                'required'   => ['[DATETIME_LIST]'],
            ],
            'attendee_list'                 => [
                'shortcodes' => ['attendee'],
                'required'   => ['[ATTENDEE_LIST]'],
            ],
            'tax_line_item_list'            => [
                'shortcodes' => ['line_item'],
                'required'   => ['[TAX_LINE_ITEM_LIST]'],
            ],
            'additional_line_item_list'     => [
                'shortcodes' => ['line_item'],
                'required'   => ['[ADDITIONAL_LINE_ITEM_LIST]'],
            ],
            'payment_list'                  => [
                'shortcodes' => ['payment'],
                'required'   => ['[PAYMENT_LIST_*]'],
            ],
        ];
    }


    /**
     * This is a method called from EE_messages when this messenger is a generating messenger and the sending messenger
     * is a different messenger.  Child messengers can set hooks for the sending messenger to callback on if necessary
     * (i.e. swap out css files or something else).
     *
     * @param string $sending_messenger_name the name of the sending messenger so we only set the hooks needed.
     * @return void
     * @since 4.5.0
     */
    public function do_secondary_messenger_hooks($sending_messenger_name)
    {
        if ($sending_messenger_name === 'pdf') {
            add_filter('EE_messenger__get_variation__variation', [$this, 'add_html_css'], 10, 8);
        }
    }


    /**
     * @param                            $variation_path
     * @param EE_Messages_Template_Pack  $template_pack
     * @param                            $messenger_name
     * @param                            $message_type_name
     * @param                            $url
     * @param                            $type
     * @param                            $variation
     * @param                            $skip_filters
     * @return string
     */
    public function add_html_css(
        $variation_path,
        EE_Messages_Template_Pack $template_pack,
        $messenger_name,
        $message_type_name,
        $url,
        $type,
        $variation,
        $skip_filters
    ): string {
        return $template_pack->get_variation(
            $this->name,
            $message_type_name,
            $type,
            $variation,
            $url,
            '.css',
            $skip_filters
        );
    }


    /**
     * Takes care of enqueuing any necessary scripts or styles for the page.  A do_action() so message types using this
     * messenger can add their own js.
     *
     * @return void.
     */
    public function enqueue_scripts_styles()
    {
        parent::enqueue_scripts_styles();
        do_action('AHEE__EE_Html_messenger__enqueue_scripts_styles');
    }


    /**
     * _set_template_fields
     * This sets up the fields that a messenger requires for the message to go out.
     *
     * @access  protected
     * @return void
     */
    protected function _set_template_fields()
    {
        // any extra template fields that are NOT used by the messenger
        // but will get used by a messenger field for shortcode replacement
        // get added to the 'extra' key in an associated array
        // indexed by the messenger field they relate to.
        // This is important for the Messages_admin to know what fields to display to the user.
        // Also, notice that the "values" are equal to the field type
        // that messages admin will use to know what kind of field to display.
        // The values ALSO have one index labeled "shortcode".
        // The values in that array indicate which ACTUAL SHORTCODE (i.e. [SHORTCODE])
        // is required in order for this extra field to be displayed.
        //  If the required shortcode isn't part of the shortcodes array
        // then the field is not needed and will not be displayed/parsed.
        $this->_template_fields = [
            'subject' => [
                'input'      => 'text',
                'label'      => esc_html__('Page Title', 'event_espresso'),
                'type'       => 'string',
                'required'   => true,
                'validation' => true,
                'css_class'  => 'large-text',
                'format'     => '%s',
            ],
            'content' => '',
            // left empty b/c it is in the "extra array" but messenger still needs needs to know this is a field.
            'extra'   => [
                'content' => [
                    'main'                          => [
                        'input'      => 'wp_editor',
                        'label'      => esc_html__('Main Content', 'event_espresso'),
                        'type'       => 'string',
                        'required'   => false,
                        'validation' => true,
                        'format'     => '%s',
                        'rows'       => '15',
                    ],
                    'event_list'                    => [
                        'input'               => 'wp_editor',
                        'label'               => '[EVENT_LIST]',
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'rows'                => '15',
                        'shortcodes_required' => ['[EVENT_LIST]'],
                    ],
                    'ticket_list'                   => [
                        'input'               => 'textarea',
                        'label'               => '[TICKET_LIST]',
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '10',
                        'shortcodes_required' => ['[TICKET_LIST]'],
                    ],
                    'ticket_line_item_no_pms'       => [
                        'input'               => 'textarea',
                        'label'               => '[TICKET_LINE_ITEM_LIST] <br>' . esc_html__(
                            'Ticket Line Item List with no Price Modifiers',
                            'event_espresso'
                        ),
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '5',
                        'shortcodes_required' => ['[TICKET_LINE_ITEM_LIST]'],
                    ],
                    'ticket_line_item_pms'          => [
                        'input'               => 'textarea',
                        'label'               => '[TICKET_LINE_ITEM_LIST] <br>' . esc_html__(
                            'Ticket Line Item List with Price Modifiers',
                            'event_espresso'
                        ),
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '5',
                        'shortcodes_required' => ['[TICKET_LINE_ITEM_LIST]'],
                    ],
                    'price_modifier_line_item_list' => [
                        'input'               => 'textarea',
                        'label'               => '[PRICE_MODIFIER_LINE_ITEM_LIST]',
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '5',
                        'shortcodes_required' => ['[PRICE_MODIFIER_LINE_ITEM_LIST]'],
                    ],
                    'datetime_list'                 => [
                        'input'               => 'textarea',
                        'label'               => '[DATETIME_LIST]',
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '5',
                        'shortcodes_required' => ['[DATETIME_LIST]'],
                    ],
                    'attendee_list'                 => [
                        'input'               => 'textarea',
                        'label'               => '[ATTENDEE_LIST]',
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '5',
                        'shortcodes_required' => ['[ATTENDEE_LIST]'],
                    ],
                    'tax_line_item_list'            => [
                        'input'               => 'textarea',
                        'label'               => '[TAX_LINE_ITEM_LIST]',
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '5',
                        'shortcodes_required' => ['[TAX_LINE_ITEM_LIST]'],
                    ],
                    'additional_line_item_list'     => [
                        'input'               => 'textarea',
                        'label'               => '[ADDITIONAL_LINE_ITEM_LIST]',
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '5',
                        'shortcodes_required' => ['[ADDITIONAL_LINE_ITEM_LIST]'],
                    ],
                    'payment_list'                  => [
                        'input'               => 'textarea',
                        'label'               => '[PAYMENT_LIST]',
                        'type'                => 'string',
                        'required'            => false,
                        'validation'          => true,
                        'format'              => '%s',
                        'css_class'           => 'large-text',
                        'rows'                => '5',
                        'shortcodes_required' => ['[PAYMENT_LIST_*]'],
                    ],
                ],
            ],
        ];
    }


    /**
     * @see   definition of this method in parent
     * @since 4.5.0
     */
    protected function _set_default_message_types()
    {
        $this->_default_message_types = ['receipt', 'invoice'];
    }


    /**
     * @see   definition of this method in parent
     * @since 4.5.0
     */
    protected function _set_valid_message_types()
    {
        $this->_valid_message_types = ['receipt', 'invoice'];
    }


    /**
     * Displays the message in the browser.
     *
     * @return void.
     * @since 4.5.0
     */
    protected function _send_message()
    {
        $this->_template_args = [
            'page_title' => $this->_subject,
            'base_css'   => $this->get_variation(
                $this->_tmp_pack,
                $this->_incoming_message_type->name,
                true,
                'base',
                $this->_variation
            ),
            'print_css'  => $this->get_variation(
                $this->_tmp_pack,
                $this->_incoming_message_type->name,
                true,
                'print',
                $this->_variation
            ),
            'main_css'   => $this->get_variation(
                $this->_tmp_pack,
                $this->_incoming_message_type->name,
                true,
                'main',
                $this->_variation
            ),
            'main_body' => wpautop(
                apply_filters(
                    'FHEE__EE_Html_messenger___send_message__main_body',
                    (string) $this->_content,
                    (string) $this->_content,
                    $this->_incoming_message_type
                ),
                false
            ),
        ];
        $this->_deregister_wp_hooks();
        add_action('wp_enqueue_scripts', [$this, 'enqueue_scripts_styles']);
        echo ($this->_get_main_template());
        exit();
    }


    /**
     * The purpose of this function is to de register all actions hooked into wp_head and wp_footer so that it doesn't
     * interfere with our templates.  If users want to add any custom styles or scripts they must use the
     * AHEE__EE_Html_messenger__enqueue_scripts_styles hook.
     *
     * @return void
     * @since 4.5.0
     */
    protected function _deregister_wp_hooks()
    {
        remove_all_actions('wp_head');
        remove_all_actions('wp_footer');
        remove_all_actions('wp_print_footer_scripts');
        remove_all_actions('wp_enqueue_scripts');
        global $wp_scripts, $wp_styles;
        $wp_scripts = $wp_styles = [];
        // just add back in wp_enqueue_scripts and wp_print_footer_scripts cause that's all we want to load.
        add_action('wp_footer', 'wp_print_footer_scripts');
        add_action('wp_print_footer_scripts', '_wp_footer_scripts');
        add_action('wp_head', 'wp_enqueue_scripts');
    }


    /**
     * Overwrite parent _get_main_template for display_html purposes.
     *
     * @param bool $preview
     * @return string
     * @since  4.5.0
     */
    protected function _get_main_template($preview = false): string
    {
        $wrapper_template = $this->_tmp_pack->get_wrapper($this->name);
        // include message type as a template arg
        $this->_template_args['message_type'] = $this->_incoming_message_type;
        return EEH_Template::display_template($wrapper_template, $this->_template_args, true);
    }


    /**
     * @return void
     */
    protected function _preview()
    {
        $this->_send_message();
    }


    protected function _set_admin_settings_fields()
    {
    }


    /**
     * add the "powered by EE" credit link to the HTML receipt and invoice
     *
     * @param string|null     $content
     * @param string|null     $content_again
     * @param EE_message_type $incoming_message_type
     * @return string
     */
    public function add_powered_by_credit_link_to_receipt_and_invoice(
        ?string $content,
        ?string $content_again,
        EE_message_type $incoming_message_type
    ): string {
        if (
            ($incoming_message_type->name === 'invoice' || $incoming_message_type->name === 'receipt')
            && apply_filters('FHEE_EE_Html_messenger__add_powered_by_credit_link_to_receipt_and_invoice', true)
        ) {
            $content .= EEH_Template::powered_by_event_espresso(
                'aln-cntr',
                '',
                ['utm_content' => 'messages_system']
            ) . EEH_HTML::div(EEH_HTML::p('&nbsp;'));
        }
        return $content;
    }
}