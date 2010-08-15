<?php

	Class extension_showhide_fields extends Extension{

		public function about(){
			return array('name' => 'Show/Hide Fields',
						 'version' => '0.1',
						 'release-date' => '2010-08-14',
						 'author' => array('name' => 'Simone Economo',
										   'website' => 'http://www.lineheight.net',
										   'email' => 'my.ekoes@gmail.com'),
						 'description' => 'Lets you collapse/expand fields inside the section editor'
				 		);
		}

		public function getSubscribedDelegates(){
			return array(
				array(
					'page' => '/backend/',
					'delegate' => 'InitaliseAdminPageHead',
					'callback' => '__appendScripts'
				),
			);
		}

		public function __isSectionEditor($pageCallback) {
			return $pageCallback['driver'] == 'blueprintssections' && is_array($pageCallback['context']);
		}

		public function __appendScripts($context) {
			$callback = $context['parent']->getPageCallback();

			if ($this->__isSectionEditor($callback)) {
				$context['parent']->Page->addStylesheetToHead(URL . '/extensions/showhide_fields/assets/showhidefields.css', 'screen', 1000);
				$context['parent']->Page->addScriptToHead(URL . '/extensions/showhide_fields/assets/showhidefields.js', 1000, false);
			}
		}

	}

?>
