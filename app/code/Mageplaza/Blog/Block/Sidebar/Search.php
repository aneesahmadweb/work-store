<?php
namespace Mageplaza\Blog\Block\Sidebar;

use Mageplaza\Blog\Block\Frontend;

class Search extends Frontend
{
	/**
	 * get search blog's data
	 */
	public function getSearchBlogData()
	{
		$result = [];
		$posts = $this->helperData->getPostList();
		$limitDesc = $this->getSidebarConfig('search/description') ?: 100;

	
			//array_push($result, $tmp);
		}

		//return json_encode($result);
	}
